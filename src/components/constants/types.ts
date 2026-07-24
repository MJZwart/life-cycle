export const availableLabourJobs = ['Labourer', 'Skilled worker', 'Foreman', 'Construction manager'] as const;
export const availableJobTypes = ['Labour'] as const;
export const availableJobs = [...availableLabourJobs] as const;

export const availableSkills = [
    'Research', 'Education', 'Nutrition', 'Negotiation', 'Frugality', 'Strength training'
] as const;

export const boostType = [
    ...availableSkills, ...availableJobTypes, 'Lifespan', 'Job Pay', 'Skill Exp', 'Job Exp', 'Costs'
] as const;

export const influenceType = [
    ...availableJobs,
    ...availableSkills,
] as const;

export type AvailableJobTypes = typeof availableJobTypes[number];
export type AvailableLabourJobs = typeof availableLabourJobs[number];

export type AvailableJobs = typeof availableJobs[number];

export type AvailableSkills = typeof availableSkills[number];

export type BoostType = typeof boostType[number];
export type InfluenceType = typeof influenceType[number];

export interface Job {
    title: AvailableJobs,
    type: AvailableJobTypes,
    description: string,
    baseExpCap: number,
    unlock: UnlockCondition[],
    basePay: number,
    payScale: number,
    effect: number,
    effectType?: BoostType;
    expInfluencedBy: InfluenceType[], // TODO Check if any jobs influence them, if not, only do Skills
    payInfluencedBy: InfluenceType[],
}

export interface UnlockCondition {
    job?: AvailableJobs,
    skill?: AvailableSkills,
    level: number,
}

export interface Skill {
    title: AvailableSkills,
    description: string,
    baseExpCap: number,
    unlock: UnlockCondition[],
    effect: number,
    effectType: BoostType,
    influencedBy: InfluenceType[],
}

export interface UserSkill {
    skill: Skill,
    currentExp: number,
    level: number,
    legacy: number,
    unlocked: boolean,
}

export interface UserJob {
    job: Job
    currentExp: number,
    level: number,
    legacy: number,
    unlocked: boolean,
}