export const getCurrentExpCap = (level: number, baseExpCap: number) => {
    return Math.round(baseExpCap * (level + 1) * Math.pow(1.01, level));
}