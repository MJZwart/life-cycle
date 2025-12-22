import { ref } from "vue";
// When you level up, the new max xp should be
// Math.round(skill.baseExp * (skill.level + 1) * Math.pow(1.01, skill.level))

interface Skill {
    currentExp: number,
    level: number,
    legacy: number,
    baseExp: number,
}

const allSkills = ref<Skill[]>([]);

const learningSkill = ref<Skill>({
    currentExp: 0,
    level: 1,
    legacy: 0,
    baseExp: 50
});