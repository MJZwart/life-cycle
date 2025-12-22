<template>
    <div flex flex-row px-6 py-2>
        <h1 my-0 text-gentle-light text-lg absolute>{{ gameName }}</h1>
        <div flex w-full gap-6 justify-center>
            <span v-for="(link, idx) in links" :key="idx" @click="activeNavTab = link.link" hover:decoration-underline
                cursor-pointer :class="{ 'decoration-underline text-gentle-light': activeNavTab === link.link }">
                {{ link.name }}
            </span>
        </div>
    </div>
</template>

<script setup lang="ts">
// TODO use tab names as possible prop type
const activeNavTab = defineModel<string>({ required: true });

const links = [
    {
        name: 'Main',
        link: 'game',
    }, {
        name: 'Nav 1',
        link: 'nav1',
    }, {
        name: 'Nav 2',
        link: 'nav2',
    },
]

const gameName = 'Life Cycle';
</script>