<template>
    <template v-if="isJobUnlocked()">
        <JobBar :current-progress="job.currentExp" :max-progress="getCurrentExpCap(job.level, job.job.baseExpCap,)"
            :title="job.job.title" @click="setCurrentActive(job)" />
        <span w-15>{{ job.currentExp }}</span> / <span w-15>{{ getCurrentExpCap(job.level,
            job.job.baseExpCap,) }}</span>
        <span min-w-15 flex justify-center>{{ job.level }}</span>
    </template>
    <template v-else>
        {{ parseJobUnlocks() }}
    </template>
</template>

<script setup lang="ts">
import JobBar from '../../components/JobBar.vue';
import type { UserJob } from '../../constants/types';
import { allJobs, getCurrentExpCap, setCurrentActive } from '../../userJobs.ts';

const { job } = defineProps<{ job: UserJob }>();

const isJobUnlocked = () => {
    let unlocked = true;
    job.job.unlock.forEach((unlock) => {
        const requiredJob = allJobs.value.find((userJob) => userJob.job.title === unlock.job);
        if (!requiredJob) return;
        if (requiredJob.level >= unlock.level) return;
        unlocked = false;
    });
    return unlocked
}

const parseJobUnlocks = () => {
    let unlockText = 'Locked: ';
    job.job.unlock.forEach((unlock) => {
        unlockText += `${unlock.level} ${unlock.job} `;
    });
    return unlockText;
}
</script>