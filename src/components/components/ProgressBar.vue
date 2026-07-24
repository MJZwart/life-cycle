<template>
    <div w-full rounded-full bg-white bg-opacity-3 overflow-hidden h-9 relative>
        <div :style="`width:${limitedProgress}%`" rounded-full bg-gentle-light bg-opacity-15 transition-ease-in-out
            transition-width transition-duration-200 :class="{ 'bg-opacity-40': active }" h-9 absolute>
        </div>
        <div absolute p-2>
            {{ title }} <span text-xs>{{ description }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const { currentProgress, maxProgress, title, description, active } = defineProps<{ currentProgress: number, maxProgress: number, title: string, description: string, active: boolean }>();

const limitedProgress = computed(() => {
    if (currentProgress > maxProgress) return 100;
    if (currentProgress < 0) return 0;
    return (currentProgress / maxProgress) * 100;
})
</script>