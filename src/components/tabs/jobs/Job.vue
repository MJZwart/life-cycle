<template>
    <template v-if="isJobUnlocked()">
        <JobBar :current-progress="job.currentExp" :max-progress="getCurrentExpCap(job.level, job.job.baseExpCap,)"
            :title="job.job.title" @click="setCurrentActive(job)" />
        <span w-15>{{ job.currentExp }}</span> / <span w-15>{{ getCurrentExpCap(job.level,
            job.job.baseExpCap,) }}</span>
        <span min-w-15 flex justify-center>{{ job.level }}</span>
        <span min-w-15 flex justify-center>{{ getExpBonusForJob(job.job) }}</span>
    </template>
    <template v-else>
        {{ parseJobUnlocks() }}
    </template>
</template>

<script setup lang="ts">
// TODO Fix css trolling on Skilled Worker
import JobBar from '../../components/JobBar.vue';
import type { UserJob } from '../../constants/types';
import { allJobs, getCurrentExpCap, getExpBonusForJob, setCurrentActive, unlockJob } from '../../userJobs.ts';
import { allSkills } from '../../userSkills.ts';

const { job } = defineProps<{ job: UserJob }>();

// TODO 2) The job unlock for Skilled Worker checks every single tick after it has already been unlocked
// Add a variable 'unlocked' to userSkill/userJob which is default false (except for base) and toggle them and then early return every tick
// TODO 3) I think the Research skill still isn't adding bonus exp to skills

const isJobUnlocked = () => {
    if (job.unlocked) return true;
    const allConditionsMet = job.job.unlock.every((unlock) => {
        if (unlock.job) {
            const requiredJob = allJobs.value[unlock.job];
            return requiredJob.level >= unlock.level;
        } else if (unlock.skill) {
            const requiredSkill = allSkills.value[unlock.skill];
            return requiredSkill.level >= unlock.level;
        }
    });
    if (allConditionsMet) unlockJob(job.job.title);
    return allConditionsMet;
}

const parseJobUnlocks = () => {
    let unlockText = 'Locked: ';
    job.job.unlock.forEach((unlock) => {
        if (unlock.job) unlockText += `${unlock.level} ${unlock.job} `;
        if (unlock.skill) unlockText += `${unlock.level} ${unlock.skill} `;
    });
    return unlockText;
}
</script>