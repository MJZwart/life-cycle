<template>
    <h3 flex justify-center text-gentle-light>Main game</h3>
    <div flex flex-col gap-2>
        <span>Section header</span>
        <span v-for="skill in allSkills" flex flex-row items-center>
            <SkillBar :current-progress="skill.currentExp"
                :max-progress="getCurrentExpCap(skill.level, skill.baseExpCap,)" :title="skill.title"
                @click="setCurrentActive(skill)" /> {{ skill.currentExp }} / {{ getCurrentExpCap(skill.level,
                    skill.baseExpCap,) }}
            <span min-w-15 flex justify-center>{{ skill.level }}</span>
        </span>
    </div>
</template>

<script setup lang="ts">
import SkillBar from '../components/SkillBar.vue';
import { allSkills, getCurrentExpCap, setCurrentActive } from '../skills';
</script>