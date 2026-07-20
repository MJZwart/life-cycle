import { ref } from "vue";
import { educationSkill, frugalitySkill, isJob, isSkill, negotiationSkill, nutritionSkill, researchSkill, strengthSkill } from "./constants/skills";
import type { AvailableSkills, Skill, UserSkill } from "./constants/types";
// When you level up, the new max xp should be
// Math.round(skill.baseExp * (skill.level + 1) * Math.pow(1.01, skill.level))

const baseExpPerTick = 5;

export const research = ref<UserSkill>({
    skill: researchSkill,
    currentExp: 0,
    level: 1,
    legacy: 0,
    unlocked: true,
});
export const education = ref<UserSkill>({
    skill: educationSkill,
    currentExp: 0,
    level: 1,
    legacy: 0,
    unlocked: true,
});
export const nutrition = ref<UserSkill>({
    skill: nutritionSkill,
    currentExp: 0,
    level: 1,
    legacy: 0,
    unlocked: false,
});
export const negotiation = ref<UserSkill>({
    skill: negotiationSkill,
    currentExp: 0,
    level: 1,
    legacy: 0,
    unlocked: false,
});
export const frugality = ref<UserSkill>({
    skill: frugalitySkill,
    currentExp: 0,
    level: 1,
    legacy: 0,
    unlocked: false,
});
export const strengthTraining = ref<UserSkill>({
    skill: strengthSkill,
    currentExp: 0,
    level: 1,
    legacy: 0,
    unlocked: true,
});

const currentlyActiveSkill = ref(research.value);

export const allSkills = ref<Record<AvailableSkills, UserSkill>>(
    {
        'Research': research.value, 
        'Education': education.value, 
        'Nutrition': nutrition.value, 
        'Negotiation': negotiation.value, 
        'Frugality': frugality.value, 
        'Strength training': strengthTraining.value
    }
);

export const setCurrentActive = (skill: UserSkill) => {
    currentlyActiveSkill.value = skill;
}

export const isCurrentlyActive = (skillName: string) => currentlyActiveSkill.value.skill.title === skillName;

export const getCurrentExpCap = (level: number, baseExpCap: number) => {
    return Math.round(baseExpCap * (level + 1) * Math.pow(1.01, level));
}

const getExpBonusForSkill = (skill: Skill): number => {
    let bonus = 1;
    skill.influencedBy.forEach((influence) => {
        if (isSkill(influence)) {
            const userSkill = allSkills.value[influence]
            bonus += (userSkill.level - 1) * userSkill.skill.effect;
        } else if (isJob(influence)){
            // const userJob = allJobs.value[]
        }
        // const userJob = allSkills.value.find((userSkill) => userSkill.skill.title === influence)
        // if (userSkill) {
        //     bonus += (userSkill.level - 1) * skill.effect;
        // }
    })
    return bonus;
}

export const increaseCurrentSkill = () => {
    currentlyActiveSkill.value.currentExp += Math.floor(baseExpPerTick * getExpBonusForSkill(currentlyActiveSkill.value.skill));
    const expCap = getCurrentExpCap(currentlyActiveSkill.value.level, currentlyActiveSkill.value.skill.baseExpCap);
    if (currentlyActiveSkill.value.currentExp >= expCap) {
        currentlyActiveSkill.value.level++;
        currentlyActiveSkill.value.currentExp -= expCap;
    }
}

interface SavedSkills {
    research: UserSkill;
    education: UserSkill;
    nutrition: UserSkill;
    negotiation: UserSkill;
    frugality: UserSkill;
    strengthTraining: UserSkill;
}

export const prepSkillsForSave = () => {
    const skills = {
        research: research.value,
        education: education.value,
        nutrition: nutrition.value,
        negotiation: negotiation.value,
        frugality: frugality.value,
        strengthTraining: strengthTraining.value,
    };
    return skills;
}

export const setSkillsFromSave = (skills: SavedSkills) => {
    research.value = skills.research;
    education.value = skills.education;
    nutrition.value = skills.nutrition,
    negotiation.value = skills.negotiation;
    frugality.value = skills.frugality;
    strengthTraining.value = skills.strengthTraining;
}