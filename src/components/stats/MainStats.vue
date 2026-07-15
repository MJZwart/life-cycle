<template>
    <div flex flex-col gap-2 p-2 min-w-45>
        <!-- <h3 text-gentle-light>Age 16</h3> -->
        <div flex flex-row gap-2>
            <span font-bold text-gentle-light>Age</span>
            {{ parseAge(player.age) }}
        </div>
        <div flex flex-col gap-2>
            <span font-bold text-gentle-light>Lifespan</span>
            {{ parseAge(currentLifespan) }}
            <ProgressBar :current-progress="expProgress" class="w-[9rem]!" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import ProgressBar from '../components/ProgressBar.vue';
import { currentLifespan, player } from '../player';
import { parseAge } from '../helpers/numberParser';

const expProgress = computed(() => (player.value.age / currentLifespan.value) * 100);
</script>