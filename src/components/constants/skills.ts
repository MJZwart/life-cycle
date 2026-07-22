import { availableJobs, availableSkills, type AvailableJobs, type AvailableSkills, type InfluenceType, type Skill } from './types';

export const researchSkill: Skill = {
    title: 'Research',
    description: 'Improve skill learning',
    baseExpCap: 500,
    unlock: [],
    effect: 0.01,
    effectType: 'Skill Exp',
    influencedBy: ['Research'],
};

export const educationSkill: Skill = {
    title: 'Education',
    description: 'Faster job growth and unlock better jobs',
    baseExpCap: 500,
    unlock: [],
    effect: 0.01,
    effectType: 'Job Exp',
    influencedBy: ['Research'],
};

export const nutritionSkill: Skill = {
    title: 'Nutrition',
    description: 'Longer lifespan',
    baseExpCap: 500,
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
    effect: 0.004,
    effectType: 'Lifespan',
    influencedBy: ['Research'],
};

export const negotiationSkill: Skill = {
    title: 'Negotiation',
    description: 'Higher work pay',
    baseExpCap: 500,
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
    effectType: 'Job Pay',
    influencedBy: ['Research', 'Foreman'],
};

export const frugalitySkill: Skill = {
    title: 'Frugality',
    description: 'Lower daily cost',
    baseExpCap: 500,
    unlock: [
        {
            skill: 'Research',
            level: 40,
        },
    ],
    effect: -0.01,
    effectType: 'Costs',
    influencedBy: ['Research', 'Construction manager'],
};

export const strengthSkill: Skill = {
    title: 'Strength training',
    description: 'Boost to labour job exp and pay',
    baseExpCap: 500,
    unlock: [],
    effect: 0.01,
    effectType: 'Labour',
    influencedBy: ['Research', 'Skilled worker']
};

export const isSkill = (value: InfluenceType): value is AvailableSkills => {
    return availableSkills.includes(value as AvailableSkills);
}

export const isJob = (value: InfluenceType): value is AvailableJobs => {
    return availableJobs.includes(value as AvailableJobs);
}