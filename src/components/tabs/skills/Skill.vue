<template>
    <template v-if="isSkillUnlocked()">
        <ProgressBar :current-progress="skill.currentExp"
            :max-progress="getCurrentExpCap(skill.level, skill.skill.baseExpCap,)" :title="skill.skill.title"
            @click="setCurrentActive(skill)" :active="isCurrentlyActive(skill.skill.title)"
            :description="skill.skill.description" />
        <span min-w-15>{{ parseThousands(skill.currentExp) }}</span> / <span min-w-15>{{
            parseThousands(getCurrentExpCap(skill.level,
                skill.skill.baseExpCap)) }}</span>
        <span min-w-15 flex justify-center>{{ skill.level }}</span>
        <span min-w-15 flex justify-center>{{ (getExpBonusForSkill(skill.skill)) }}</span>
        <span min-w-15 flex justify-center>{{ skill.legacy }}</span>
    </template>
    <template v-else>
        {{ parseSkillUnlocks() }}
    </template>
</template>

<script setup lang="ts">
import ProgressBar from '../../components/ProgressBar.vue';
import type { UserSkill } from '../../constants/types';
import { parseThousands } from '../../helpers/numberParser.ts';
import { allSkills, getCurrentExpCap, getExpBonusForSkill, isCurrentlyActive, setCurrentActive, unlockSkill } from '../../userSkills.ts';

const { skill } = defineProps<{ skill: UserSkill }>();

const isSkillUnlocked = () => {
    if (skill.unlocked) return true;
    const allConditionsMet = skill.skill.unlock.every((unlock) => {
        if (unlock.skill) {
            const requiredSkill = allSkills.value[unlock.skill];
            return requiredSkill.level >= unlock.level;
        }
    });
    if (allConditionsMet) unlockSkill(skill.skill.title);
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