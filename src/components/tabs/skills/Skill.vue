<template>
    <template v-if="isSkillUnlocked()">
        <SkillBar :current-progress="skill.currentExp"
            :max-progress="getCurrentExpCap(skill.level, skill.skill.baseExpCap,)" :title="skill.skill.title"
            @click="setCurrentActive(skill)" />
        <span w-15>{{ skill.currentExp }}</span> / <span w-15>{{ getCurrentExpCap(skill.level,
            skill.skill.baseExpCap,) }}</span>
        <span min-w-15 flex justify-center>{{ skill.level }}</span>
    </template>
    <template v-else>
        {{ parseSkillUnlocks() }}
    </template>
</template>

<script setup lang="ts">
import SkillBar from '../../components/SkillBar.vue'
import type { UserSkill } from '../../constants/types';
import { allSkills, getCurrentExpCap, setCurrentActive } from '../../userSkills.ts';

// TODO Turn into v-model
const { skill } = defineProps<{ skill: UserSkill }>();

const isSkillUnlocked = () => {
    if (skill.unlocked) return true;
    const allConditionsMet = skill.skill.unlock.every((unlock) => {
        if (unlock.skill) {
            const requiredSkill = allSkills.value[unlock.skill];
            return requiredSkill.level >= unlock.level;
        }
    });
    skill.unlocked = allConditionsMet;
    return allConditionsMet;
}

const parseSkillUnlocks = () => {
    let unlockText = 'Locked: ';
    skill.skill.unlock.forEach((unlock) => {
        unlockText += `${unlock.level} ${unlock.skill} `;
    });
    return unlockText;
}
</script>