<template>
    <h3 flex justify-center text-gentle-light>Main game</h3>
    <div flex flex-col gap-2>
        <span>Section header</span>
        <span v-for="skill in allSkills" flex flex-row items-center>
            <Skill :skill />
        </span>
    </div>
</template>

<script setup lang="ts">
import { allSkills } from '../userSkills.ts';
import Skill from './skills/Skill.vue';
</script>