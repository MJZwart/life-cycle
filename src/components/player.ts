import { computed, ref } from "vue"
import { getCurrentEffectFromSkill, nutrition } from "./userSkills";

export interface Player {
    age: number,
    money: number,
    happiness: number,
}

const createNewPlayer = (): Player => {
    return {
        age: 16 * 365,
        money: 0,
        happiness: 1,
    }
}

export const currentLifespan = computed(() => (70 * 365) * (getCurrentEffectFromSkill(nutrition.value) + 1));
// TODO Add items that affect happiness here
// TODO Create easy computed or function to calculate active effect, so you don't have to calculate based on effect * level
export const currentHappiness = computed(() => player.value.happiness);

export const player = ref<Player>(createNewPlayer());

export const setPlayerFromSave = (savedPlayer: Player) => {
    player.value = savedPlayer;
}