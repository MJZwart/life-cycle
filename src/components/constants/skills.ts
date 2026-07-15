export type AvailableSkills = 'Research' | 'Education' | 'Nutrition' | 'Negotiation' | 'Frugality' | 'Strength training';

export interface Skill {
    title: AvailableSkills,
    description: string,
    baseExpCap: number,
    unlock: UnlockCondition[],
    effect: number,
}

interface UnlockCondition {
    skill: AvailableSkills,
    level: number,
}

export const researchSkill: Skill = {
    title: 'Research',
    description: 'Improve skill learning',
    baseExpCap: 50,
    unlock: [],
    effect: 0.01,
    // all skills
};

export const educationSkill: Skill = {
    title: 'Education',
    description: 'Faster job growth and unlock better jobs',
    baseExpCap: 50,
    unlock: [],
    effect: 0.01,
    // job exp
};

export const nutritionSkill: Skill = {
    title: 'Nutrition',
    description: 'Longer lifespan',
    baseExpCap: 50,
    unlock: [
        {
            skill: 'Research',
            level: 10,
        },
        {
            skill: 'Education',
            level: 10,
        }
    ],
    effect: 0.01,
    // max lifespan multiplier
};

export const negotiationSkill: Skill = {
    title: 'Negotiation',
    description: 'Higher work pay',
    baseExpCap: 50,
    unlock: [
        {
            skill: 'Research',
            level: 20,
        },
        {
            skill: 'Education',
            level: 20,
        }
    ],
    effect: 0.01,
    // job pay
};

export const frugalitySkill: Skill = {
    title: 'Frugality',
    description: 'Lower daily cost',
    baseExpCap: 50,
    unlock: [
        {
            skill: 'Research',
            level: 40,
        },
    ],
    effect: -0.01,
    // daily cost
};

export const strengthSkill: Skill = {
    title: 'Strength training',
    description: 'Boost to labour job exp and pay',
    baseExpCap: 50,
    unlock: [],
    effect: 0.01,
    // labour exp AND pay
};