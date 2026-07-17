<template>
    <h3 flex justify-center text-gentle-light>Main game</h3>
    <div flex flex-col gap-2>
        <h4>Skills</h4>
        <span v-for="skill in allSkills" flex flex-row items-center>
            <Skill :skill />
        </span>
        <h4>Jobs</h4>
        <span v-for="job in allJobs" flex flex-row items-center>
            <Job :job />
        </span>
    </div>
</template>

<script setup lang="ts">
import { allJobs } from '../userJobs.ts';
import { allSkills } from '../userSkills.ts';
import Job from './jobs/Job.vue';
import Skill from './skills/Skill.vue';
</script>