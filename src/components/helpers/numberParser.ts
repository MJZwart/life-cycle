// Input: total days eg 400, output: 1 year, 35 days
export const parseAge = (days: number) => {
    if (days < 365) return `${days} days`;
    const years = Math.floor(days / 365);
    return `${years} years, ${days - (years * 365)} days`;
}