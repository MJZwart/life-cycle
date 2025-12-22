<template>
    <h3 flex justify-center text-gentle-light>Main game</h3>
    <div flex flex-col gap-2>
        <span>Section header</span>
        <SkillBar v-for="skill in skills" :current-progress="skill.progress" :title="skill.title"
            :active="skill.active" />
    </div>
</template>

<script setup lang="ts">
import ProgressBar from '../components/ProgressBar.vue';
import PrimaryButton from '../components/PrimaryButton.vue';
import { ref } from 'vue';
import SkillBar from '../components/SkillBar.vue';

const skill = ref({ progress: 78, title: "Generic Skill", active: true });
const otherSkill = ref({ progress: 23, title: "Other Skill", active: false });

const skills = ref([
    skill.value,
    otherSkill.value,
]);
</script>