import type { Job } from "./types";

export const labourerJob: Job = {
    title: 'Labourer',
    type: 'Labour',
    baseExpCap: 100,
    unlock: [],
    basePay: 5,
    payScale: 1.2,
    effect: 0,
    expInfluencedBy: ['Education', 'Strength training'],
    payInfluencedBy: ['Negotiation', 'Strength training'],
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
    effectType: 'Strength training',
    expInfluencedBy: ['Education', 'Strength training'],
    payInfluencedBy: ['Negotiation', 'Strength training'],
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
            skill: 'Education',
            level: 20,
        },
    ],
    basePay: 25,
    payScale: 1.6,
    effect: 0.02,
    effectType: 'Negotiation',
    expInfluencedBy: ['Education', 'Strength training'],
    payInfluencedBy: ['Negotiation', 'Strength training'],
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
            skill: 'Education',
            level: 40,
        },],
    basePay: 50,
    payScale: 1.7,
    effect: 0.02,
    effectType: 'Frugality',
    expInfluencedBy: ['Education', 'Strength training'],
    payInfluencedBy: ['Negotiation', 'Strength training'],
};