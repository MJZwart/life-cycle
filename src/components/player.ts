import { computed, ref } from "vue"
import { nutrition } from "./userSkills";

export interface Player {
    age: number,
    money: number,
}

const createNewPlayer = (): Player => {
    return {
        age: 16 * 365,
        money: 0,
    }
}

export const currentLifespan = computed(() => (70 * 365) * (((nutrition.value.level - 1) * nutrition.value.skill.effect) + 1))

export const player = ref<Player>(createNewPlayer());

export const setPlayerFromSave = (savedPlayer: Player) => {
    player.value = savedPlayer;
}