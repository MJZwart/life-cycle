import { ref } from "vue"

export interface Player {
    age: number,
    lifespan: number,
}

const createNewPlayer = (): Player => {
    return {
        age: 16 * 365,
        lifespan: 70 * 365,
    }
}

export const player = ref<Player>(createNewPlayer());

export const setPlayerFromSave = (savedPlayer: Player) => {
    player.value = savedPlayer;
}