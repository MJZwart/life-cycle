import { computed, ref } from "vue";
import { player, setPlayerFromSave } from "./player";
import { increaseCurrentSkill } from "./skills";

const intervalId = ref();

const timeLoop = () => {
    player.value.age++;
    increaseCurrentSkill();
    if (player.value.age >= player.value.lifespan) pauseTimer();
}

const currentSpeed = computed(() => 100);

export const startTimer = () => {
    intervalId.value = setInterval(timeLoop, currentSpeed.value)
}

export const pauseTimer = () => {
    clearInterval(intervalId.value);
}

const SAVED_PLAYER_KEY = 'lc-player-save';

export const savePlayer = () => {
    const save = {
        player: player.value,
    };
    localStorage.setItem(SAVED_PLAYER_KEY, JSON.stringify(save));
}

export const loadPlayer = () => {
    const savedPlayer = localStorage.getItem(SAVED_PLAYER_KEY);
    if (!savedPlayer) return; // New game starts automatically
    const saveGame = JSON.parse(savedPlayer);
    setPlayerFromSave(saveGame.player);
    // Set skills
}