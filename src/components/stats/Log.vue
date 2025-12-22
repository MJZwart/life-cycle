<template>
    <div overflow-y-auto max-h-xl>
        <LogItem v-for="(item, idx) of log" :key="idx" :log="item" />
    </div>
</template>

<script setup lang="ts">
import LogItem from './components/LogItem.vue';

const log = [
    {
        text: 'You gained {r}.',
        variable: '2 armour',
    },
    {
        text: 'You found {r}.',
        variable: 'a giant squid',
    },
    {
        text: 'Ho there wanderer, stay thy course for a moment, to indulge {r}.',
        variable: 'an old man',
    },
    {
        text: 'Fourteen {r} started attacking you.',
        variable: 'yellow doves',
    },
    {
        text: 'I\'m an {r}.',
        variable: 'immigrant child',
    },
    {
        text: 'Who the hell is {r}?',
        variable: 'Edgar',
    },
    {
        text: 'Say my {r} right.',
        variable: 'name',
    },
    {
        text: 'Fourteen {r} started attacking you.',
        variable: 'yellow doves',
    },
    {
        text: 'You gained {r}.',
        variable: '2 armour',
    },
    {
        text: 'You found {r}.',
        variable: 'a giant squid',
    },
    {
        text: 'Ho there wanderer, stay thy course for a moment, to indulge {r}.',
        variable: 'an old man',
    },
    {
        text: 'Fourteen {r} started attacking you.',
        variable: 'yellow doves',
    },
    {
        text: 'You gained {r}.',
        variable: '2 armour',
    },
    {
        text: 'You found {r}.',
        variable: 'a giant squid',
    },
    {
        text: 'Ho there wanderer, stay thy course for a moment, to indulge {r}.',
        variable: 'an old man',
    },
    {
        text: 'Fourteen {r} started attacking you.',
        variable: 'yellow doves',
    },
    {
        text: 'You gained {r}.',
        variable: '2 armour',
    },
    {
        text: 'You found {r}.',
        variable: 'a giant squid',
    },
    {
        text: 'Ho there wanderer, stay thy course for a moment, to indulge {r}.',
        variable: 'an old man',
    },
    {
        text: 'Fourteen {r} started attacking you.',
        variable: 'yellow doves',
    },
];
</script>