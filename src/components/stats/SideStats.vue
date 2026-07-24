<script setup lang="ts">
import { player } from '../player';
import { getCurrentPay } from '../userJobs';

</script>

<template>
    <div flex flex-col p-2 gap-2>
        <span>Income: {{ getCurrentPay }}</span>
        <span>Money: {{ player.money }}</span>
        <span>Happiness: </span>
    </div>
</template>