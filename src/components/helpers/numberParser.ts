// Input: total days eg 400, output: 1 year, 35 days
export const parseAge = (days: number) => {
    if (days < 365) return `${days} days`;
    const years = Math.floor(days / 365);
    return `${years} years, ${Math.floor(days - (years * 365))} days`;
}

const NUMBER_SHORTHAND_CUTOFF = 10000;

const MILLION = 1_000_000;
const BILLION = 1_000_000_000;
const TRILLION = 1_000_000_000_000;
const QUADRILLION = 1_000_000_000_000_000;
const QUINTILLION = 1_000_000_000_000_000_000;

export const parseThousands = (num: number): string => {
    if (num < NUMBER_SHORTHAND_CUTOFF) return num.toString();

    if (num < MILLION) return Math.round(num / 1000) + 'k';
    else if (num < BILLION) return Math.round(num / MILLION) + 'm';
    else if (num < TRILLION) return Math.round(num / BILLION) + 'b';
    else if (num < QUADRILLION) return Math.round(num / TRILLION) + 't';
    else if (num < QUINTILLION) return Math.round(num / QUADRILLION) + 'q';
    else return Math.round(num / QUINTILLION) + 'Q';
}