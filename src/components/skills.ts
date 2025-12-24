import { ref } from "vue";
// When you level up, the new max xp should be
// Math.round(skill.baseExp * (skill.level + 1) * Math.pow(1.01, skill.level))

const baseExpPerTick = 5;

interface Skill {
    title: string,
    currentExp: number,
    level: number,
    legacy: number,
    baseExpCap: number,
    expBoost: number[],
}

const learningSkill = ref<Skill>({
    title: 'Learning',
    currentExp: 0,
    level: 1,
    legacy: 0,
    baseExpCap: 50,
    expBoost: [],
});

const workingSkill = ref<Skill>({
    title: 'Working',
    currentExp: 0,
    level: 1,
    legacy: 0,
    baseExpCap: 50,
    expBoost: [],
});

const currentlyActive = ref(learningSkill.value);

export const allSkills = ref<Skill[]>([learningSkill.value, workingSkill.value, ]);

export const setCurrentActive = (skill: Skill) => {
    currentlyActive.value = skill;
}

export const isCurrentlyActive = (skillName: string) => currentlyActive.value.title === skillName;

export const getCurrentExpCap = (level: number, baseExpCap: number) => {
    return Math.round(baseExpCap * (level + 1) * Math.pow(1.01, level));
}

export const increaseCurrentSkill = () => {
    currentlyActive.value.currentExp += baseExpPerTick;
    const expCap = getCurrentExpCap(currentlyActive.value.level, currentlyActive.value.baseExpCap);
    if (currentlyActive.value.currentExp >= expCap) {
        currentlyActive.value.level++;
        currentlyActive.value.currentExp -= expCap;
    }
}