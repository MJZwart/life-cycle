<template>
    <div flex flex-col gap-2 p-2 min-w-45>
        <h3 text-gentle-light>Stats</h3>
        <div flex flex-row gap-2>
            <span font-bold text-gentle-light>Level</span>
            {{ player.level }}
        </div>
        <div flex flex-col gap-2>
            <span font-bold text-gentle-light>Experience</span>
            {{ player.experience }} / {{ expToNextLevel }}
            <ProgressBar :current-progress="expProgress" class="w-9rem!" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import ProgressBar from '../components/ProgressBar.vue';

const player = {
    level: 1,
    experience: 374,
}
const expToNextLevel = computed(() => 1000);
const expProgress = computed(() => (player.experience / expToNextLevel.value) * 100);
</script>