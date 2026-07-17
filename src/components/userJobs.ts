import { ref } from "vue";
import { constructionManagerJob, foremanJob, labourerJob, skilledWorkerJob } from "./constants/jobs";
import type { Job, UserJob } from "./constants/types";
import { allSkills } from "./userSkills";

const baseExpPerTick = 5;

export const labourer = ref<UserJob>({
    job: labourerJob,
    currentExp: 0,
    level: 0,
    legacy: 0,
});

export const skilledWorker = ref<UserJob>({
    job: skilledWorkerJob,
    currentExp: 0,
    level: 0,
    legacy: 0,
});

export const foreman = ref<UserJob>({
    job: foremanJob,
    currentExp: 0,
    level: 0,
    legacy: 0,
});

export const constructionManager = ref<UserJob>({
    job: constructionManagerJob,
    currentExp: 0,
    level: 0,
    legacy: 0,
});

const currentlyActiveJob = ref(labourer.value);

export const allJobs = ref<UserJob[]>([labourer.value, skilledWorker.value, foreman.value, constructionManager.value]);

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
        const userSkill = allSkills.value.find((userSkill) => userSkill.skill.title === influence)
        if (userSkill) {
            // TODO Check if this is correct
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
