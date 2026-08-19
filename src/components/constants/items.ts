import type { Home, Item } from "./types";

export const homes = <Home[]>[
    {
        name: 'Unhoused',
        happiness: 0,
        cost: 0,
        unlock: 0,
    },
    {
        name: 'Trailer',
        happiness: 1,
        cost: 100,
        unlock: 10_000,
    },
    {
        name: 'Apartment',
        happiness: 2,
        cost: 250,
        unlock: 500_000,
    },
    {
        name: 'Small house',
        happiness: 3,
        cost: 500,
        unlock: 250_000,
    },
    {
        name: 'Chalet',
        happiness: 4,
        cost: 1000,
        unlock: 1_000_000,
    },
    {
        name: 'Mansion',
        happiness: 5,
        cost: 2500,
        unlock: 25_000_000,
    },
    {
        name: 'Palace',
        happiness: 6,
        cost: 7500,
        unlock: 250_000_000,
    },
    {
        name: 'Castle',
        happiness: 7,
        cost: 25000,
        unlock: 5_000_000_000,
    },
];

export const items = <Item[]>[
    {
        name: 'Gym membership',
        boost: 'Strength training',
        boostEffect: 0.25,
        cost: 50,
        unlockType: 'Strength training',
        unlockLevel: 5,
    },
];