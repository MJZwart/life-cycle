<template>
    <div w-full rounded-full bg-white bg-opacity-3>
        <div :style="`width:${limitedProgress}%`" rounded-full bg-gentle-light bg-opacity-15 p-2 transition-ease-in-out
            transition-width transition-duration-200 :class="{ 'bg-opacity-40': active }">
            {{ title }}
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const { currentProgress, title, active } = defineProps<{ currentProgress: number, title: string, active: boolean }>();

const limitedProgress = computed(() => {
    if (currentProgress > 100) return 100;
    if (currentProgress < 0) return 0;
    return currentProgress;
})
</script>