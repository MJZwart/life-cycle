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
import { allSkills, getCurrentExpCap, setCurrentActive, type UserSkill } from '../../userSkills.ts';

const { skill } = defineProps<{ skill: UserSkill }>();

const isSkillUnlocked = () => {
    let unlocked = true;
    skill.skill.unlock.forEach((unlock) => {
        const requiredSkill = allSkills.value.find((userSkill) => userSkill.skill.title === unlock.skill);
        if (!requiredSkill) return;
        if (requiredSkill.level >= unlock.level) return;
        unlocked = false;
    });
    return unlocked
}

const parseSkillUnlocks = () => {
    let unlockText = 'Locked: ';
    skill.skill.unlock.forEach((unlock) => {
        unlockText += `${unlock.level} ${unlock.skill} `;
    });
    return unlockText;
}
</script>