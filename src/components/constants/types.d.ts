export type AvailableLabourJobs = 'Labourer' | 'Skilled worker' | 'Foreman' | 'Construction manager';
export type AvailableJobTypes = 'Labour';

export type AvailableJobs = AvailableLabourJobs;

export type AvailableSkills = 'Research' | 'Education' | 'Nutrition' | 'Negotiation' | 'Frugality' | 'Strength training';

export type BoostType = AvailableSkills | AvailableJobTypes | 'Lifespan' | 'Job Pay' | 'Skill Exp' | 'Job Exp' | 'Costs';
export type InfluenceType = AvailableJobs | AvailableSkills;

export interface Job {
    title: AvailableJobs,
    type: AvailableJobTypes,
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
    job?: AvailableJobs | AvailableSkills,
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
}

export interface UserJob {
    job: Job
    currentExp: number,
    level: number,
    legacy: number,
}