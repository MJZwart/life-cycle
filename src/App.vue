<template>
  <Navbar v-model="activeNavTab" />
  <div flex flex-row p-4 gap-4>
    <div flex flex-col w-30rem>
      <MainStats />
      <SideStats />
    </div>
    <div w-full flex flex-col gap-2 px-4 pt-2 pb-4 bg-white bg-opacity-3 rounded-xl>
      <component :is="activeTab.component" />
    </div>
    <div flex w-30rem>
      <Log />
    </div>
  </div>
</template>

<script setup lang="ts">
import Game from './components/tabs/Game.vue';
import Navbar from './components/navigation/Navbar.vue';
import MainStats from './components/stats/MainStats.vue';
import SideStats from './components/stats/SideStats.vue';
import SecondTab from './components/tabs/SecondTab.vue';
import ThirdTab from './components/tabs/ThirdTab.vue';
import { computed, ref } from 'vue';
import Log from './components/stats/Log.vue';

const tabs = [
  {
    component: Game,
    name: 'game',
  },
  {
    component: SecondTab,
    name: 'nav1',
  },
  {
    component: ThirdTab,
    name: 'nav2',
  },
];

const activeNavTab = ref('game');

const activeTab = computed(() => tabs.find(tab => tab.name === activeNavTab.value) ?? tabs[0]);

</script>