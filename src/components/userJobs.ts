import { computed, ref } from "vue";
import { constructionManagerJob, foremanJob, labourerJob, skilledWorkerJob } from "./constants/jobs";
import type { AvailableJobs, AvailableJobTypes, Job, UserJob } from "./constants/types";
import { allSkills, negotiation, strengthTraining } from "./userSkills";
import { isSkill, negotiationSkill, strengthSkill } from "./constants/skills";
import { getCurrentExpCap } from "./helpers/maths";
import { player } from "./player";

const baseExpPerTick = 500;

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

export const getExpBonusForJob = (job: Job): number => {
    let bonus = 1;
    job.expInfluencedBy.forEach((influence) => {
        if (isSkill(influence)) {
            const userSkill = allSkills.value[influence]
            bonus += (userSkill.level - 1) * userSkill.skill.effect;
        }
        // const userJob = allSkills.value.find((userSkill) => userSkill.skill.title === influence)
        // if (userSkill) {
        //     bonus += (userSkill.level - 1) * skill.effect;
        // }
    })
    return Math.floor(bonus * 1000) / 1000;
}
// TODO LATER add happiness system, boosting everything.
// TODO LATER Add items to buy to boost happiness, all on Nav 1 or something.

export const getPay = (jobBasePay: number, jobLevel: number, jobType: AvailableJobTypes) => {
    const basePay = jobBasePay * (jobLevel + 1);
    // TODO Currently has hardcoded negotiation bonus and added hardcoded labour type bonus, find a way to make it dynamic
    const negotiationBonus = negotiation.value.level * negotiationSkill.effect;
    let jobTypeBonus = 0;
    switch (jobType) {
        case 'Labour':
            jobTypeBonus += strengthTraining.value.level * strengthSkill.effect;
            break;
    }
    return Math.round(basePay * ((negotiationBonus + jobTypeBonus) + 1));
};

export const getCurrentPay = computed(() => {
    return getPay(currentlyActiveJob.value.job.basePay, currentlyActiveJob.value.level, currentlyActiveJob.value.job.type);
});

export const increaseCurrentJobPay = () => {
    player.value.money += getCurrentPay.value;
}

export const increaseCurrentJobExp = () => {
    currentlyActiveJob.value.currentExp += Math.floor(baseExpPerTick * getExpBonusForJob(currentlyActiveJob.value.job));
    const expCap = getCurrentExpCap(currentlyActiveJob.value.level, currentlyActiveJob.value.job.baseExpCap);
    if (currentlyActiveJob.value.currentExp >= expCap) {
        currentlyActiveJob.value.level++;
        currentlyActiveJob.value.currentExp -= expCap;
    }
}

export const unlockJob = (jobTitle: AvailableJobs) => {
    allJobs.value[jobTitle].unlocked = true;
}

export const getCurrentEffectFromJob = (job: UserJob) => {
    return (job.level - 1) * job.job.effect;
}