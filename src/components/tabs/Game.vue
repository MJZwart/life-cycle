<template>
    <h3 flex justify-center text-gentle-light>Main game</h3>
    <p>This is where the main gameplay is.</p>
    <p>Here is a progress bar. To show progress.</p>
    <ProgressBar :current-progress="progress" />
    <div flex flex-row gap-3 justify-center>
        <PrimaryButton @click="progress -= 10">Decrease</PrimaryButton>
        <PrimaryButton @click="progress += 10">Increase</PrimaryButton>
    </div>
</template>

<script setup lang="ts">
import ProgressBar from '../components/ProgressBar.vue';
import PrimaryButton from '../components/PrimaryButton.vue';
import { ref } from 'vue';

const progress = ref(78);
</script>