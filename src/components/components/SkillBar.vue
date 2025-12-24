<template>
    <div w-full rounded-full bg-white bg-opacity-3 overflow-hidden>
        <div :style="`width:${limitedProgress}%`" rounded-full bg-gentle-light bg-opacity-15 p-2 transition-ease-in-out
            transition-width transition-duration-200 :class="{ 'bg-opacity-40': active }">
            {{ title }}
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { isCurrentlyActive } from '../skills';

const { currentProgress, maxProgress, title } = defineProps<{ currentProgress: number, maxProgress: number, title: string }>();

const limitedProgress = computed(() => {
    if (currentProgress > maxProgress) return 100;
    if (currentProgress < 0) return 0;
    return (currentProgress / maxProgress) * 100;
})

const active = computed(() => isCurrentlyActive(title));
</script>