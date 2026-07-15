import type { AvailableSkills } from "./skills";

type AvailableLabourJobs = 'Labourer' | 'Skilled worker' | 'Foreman' | 'Construction manager';
type AvailableJobTypes = 'Labour';

type AvailableJobs = AvailableLabourJobs;

export interface Job {
    title: AvailableJobs,
    type: AvailableJobTypes,
    baseExpCap: number,
    unlock: UnlockCondition[],
    basePay: number,
    payScale: number,
    effect: number,
}

interface UnlockCondition {
    job: AvailableJobs | AvailableSkills,
    level: number,
}

export const labourerJob: Job = {
    title: 'Labourer',
    type: 'Labour',
    baseExpCap: 100,
    unlock: [],
    basePay: 5,
    payScale: 1.2,
    effect: 0,
    // no effect
};

export const skilledWorkerJob: Job = {
    title: 'Skilled worker',
    type: 'Labour',
    baseExpCap: 150,
    unlock: [
        {
            job: 'Labourer',
            level: 10,
        }
    ],
    basePay: 10,
    payScale: 1.4,
    effect: 0.01,
    // strength training exp
};

export const foremanJob: Job = {
    title: 'Foreman',
    type: 'Labour',
    baseExpCap: 200,
    unlock: [
        {
            job: 'Skilled worker',
            level: 20,
        },
        {
            job: 'Education',
            level: 20,
        },
    ],
    basePay: 25,
    payScale: 1.6,
    effect: 0.02,
    // negotiation exp
};

export const constructionManagerJob: Job = {
    title: 'Labourer',
    type: 'Labour',
    baseExpCap: 250,
    unlock: [
        {
            job: 'Foreman',
            level: 20,
        },
        {
            job: 'Education',
            level: 40,
        },],
    basePay: 50,
    payScale: 1.7,
    effect: 0.02,
    // frugality exp
};