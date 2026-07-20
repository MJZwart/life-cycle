import { ref } from "vue";
import { constructionManagerJob, foremanJob, labourerJob, skilledWorkerJob } from "./constants/jobs";
import type { AvailableJobs, Job, UserJob } from "./constants/types";
import { allSkills } from "./userSkills";
import { isSkill } from "./constants/skills";

const baseExpPerTick = 5;

export const labourer = ref<UserJob>({
    job: labourerJob,
    currentExp: 0,
    level: 0,
    legacy: 0,
    unlocked: true,
});

export const skilledWorker = ref<UserJob>({
    job: skilledWorkerJob,
    currentExp: 0,
    level: 0,
    legacy: 0,
    unlocked: false,
});

export const foreman = ref<UserJob>({
    job: foremanJob,
    currentExp: 0,
    level: 0,
    legacy: 0,
    unlocked: false,
});

export const constructionManager = ref<UserJob>({
    job: constructionManagerJob,
    currentExp: 0,
    level: 0,
    legacy: 0,
    unlocked: false,
});

const currentlyActiveJob = ref(labourer.value);

export const allJobs = ref<Record<AvailableJobs, UserJob>>({
    'Labourer': labourer.value,
    'Skilled worker': skilledWorker.value, 
    'Foreman': foreman.value, 
    'Construction manager': constructionManager.value
});

export const setCurrentActive = (job: UserJob) => {
    currentlyActiveJob.value = job;
}

export const isCurrentlyActive = (jobName: string) => currentlyActiveJob.value.job.title === jobName;

// TODO is shared, try to put it elsewhere
export const getCurrentExpCap = (level: number, baseExpCap: number) => {
    return Math.round(baseExpCap * (level + 1) * Math.pow(1.01, level));
}

const getExpBonusForJob = (job: Job): number => {
    let bonus = 1;
    // TODO Annoyingly this happens several times per second, and is likely not very efficient because of it
    job.expInfluencedBy.forEach((influence) => {
        // TODO Check if this is correct, if it works as intended
        if (isSkill(influence)) {
            const userSkill = allSkills.value[influence]
            bonus += (userSkill.level - 1) * userSkill.skill.effect;
        }
        // const userJob = allSkills.value.find((userSkill) => userSkill.skill.title === influence)
        // if (userSkill) {
        //     bonus += (userSkill.level - 1) * skill.effect;
        // }
    })
    return bonus;
}
// TODO Add pay system

export const increaseCurrentJobExp = () => {
    currentlyActiveJob.value.currentExp += Math.floor(baseExpPerTick * getExpBonusForJob(currentlyActiveJob.value.job));
    const expCap = getCurrentExpCap(currentlyActiveJob.value.level, currentlyActiveJob.value.job.baseExpCap);
    if (currentlyActiveJob.value.currentExp >= expCap) {
        currentlyActiveJob.value.level++;
        currentlyActiveJob.value.currentExp -= expCap;
    }
}
