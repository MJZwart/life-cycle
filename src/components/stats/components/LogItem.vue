<template>
    <p>
        {{ destructuredLog.beforeText }}<span font-bold text-gentle-light>{{ log.variable }}</span>{{ destructuredLog.afterText }}
    </p>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const {log} = defineProps<{log: {text: string, variable: string}}>();

const PLACEHOLDER = '{r}';

const destructuredLog = computed(() => {
    const idx = log.text.indexOf(PLACEHOLDER);
    if (idx === -1) return {beforeText: log, afterText: ''};
    return {
        beforeText: log.text.substring(0, idx),
        afterText: log.text.substring(idx + PLACEHOLDER.length),
    };
});
</script>