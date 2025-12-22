import { computed, ref } from "vue";
import { player } from "./player";

const intervalId = ref();

const timeLoop = () => {
    player.value.age++;
    if (player.value.age >= player.value.lifespan) pauseTimer();
}

const currentSpeed = computed(() => 100);

export const startTimer = () => {
    intervalId.value = setInterval(timeLoop, currentSpeed.value)
}

export const pauseTimer = () => {
    clearInterval(intervalId.value);
}