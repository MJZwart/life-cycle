<template>
    <template v-if="isJobUnlocked()">
        <ProgressBar :current-progress="job.currentExp" :max-progress="getCurrentExpCap(job.level, job.job.baseExpCap,)"
            :title="job.job.title" :description="job.job.description" :active="isCurrentlyActive(job.job.title)"
            @click="setCurrentActive(job)" />
        <span min-w-15>{{ job.currentExp }}</span> / <span min-w-15>{{ getCurrentExpCap(job.level,
            job.job.baseExpCap,) }}</span>
        <span min-w-15 flex justify-center>{{ job.level }}</span>
        <span min-w-15 flex justify-center>{{ getExpBonusForJob(job.job) }}</span>
        <span min-w-15 flex justify-center>{{ job.legacy }}</span>
    </template>
    <template v-else>
        {{ parseJobUnlocks() }}
    </template>
</template>

<script setup lang="ts">
import ProgressBar from '../../components/ProgressBar.vue';
import type { UserJob } from '../../constants/types';
import { getCurrentExpCap } from '../../helpers/maths.ts';
import { allJobs, getExpBonusForJob, isCurrentlyActive, setCurrentActive, unlockJob } from '../../userJobs.ts';
import { allSkills } from '../../userSkills.ts';

const { job } = defineProps<{ job: UserJob }>();

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