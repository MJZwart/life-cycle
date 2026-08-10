<script setup lang="ts">
import { parseThousands } from '../helpers/numberParser';
import { player } from '../player';
import { getCurrentPay } from '../userJobs';

</script>

<template>
    <div flex flex-col p-2 gap-2>
        <span>Income: {{ parseThousands(getCurrentPay) }}</span>
        <span>Money: {{ parseThousands(player.money) }}</span>
        <span>Happiness: </span>
    </div>
</template>