<script setup>
import {ref } from 'vue'
import { useAlertStore } from '../stores/AlertStore';
const alertStore = useAlertStore()
  let cards = ref([
    {
      id: 1,
      title:'My Hobbies',
      content: 'During my free time you can find me studying, working out, or either watching or playing sports.'
       + ' I am a huge sports fan and basketball is my favorite.',
      icon: 'fa-solid fa-basketball',
      iconHexColor: '#c2410c',
      color: 'orange'
    },
    {
      id: 2,
      title: 'My Journey',
      content: 'I have always had a passion for technology but I never dreamed to pursue it until I started working at Equinox and'
      + ' and realized that by learning to code I had an opportunity to combine both of my dreams together by one day working on a'
      + ' fitness app to help people reach their goals.',
      icon: 'fa-solid fa-car',
      iconHexColor: '#dc2626',
      color: 'red'
    },
    {
      id: 3,
      title: 'What I am looking for',
      content: 'I believe that the best places to work are most often ones where it doesn\'t feel like work, I am looking for'
      + ' an environment where people believe in helping one another achieve the best version of themselves while being passionate'
      + ' about what they do.',
      icon: 'fa-solid fa-glasses',
      iconHexColor: '#57534e',
      color: 'stone'
    },
    {
      id: 4,
      title: 'Work Experience',
      content: 'I have been working since I was 13, I worked at Starbucks for almost 10 years and worked my way up to Assistant Store Manager, I later'
      + ' on realized that my happiness didn\'t come from managing people but by educating them in ways to help themselves, this led me to working at Equinox'
      + ' as on personal trainer and eventually pursuing a career in tech.',
      icon: 'fa-solid fa-briefcase',
      iconHexColor: '#ca8a04',
      color: 'yellow'
    }
  ])

  const onHandleClick = function (id) {
    const activeCards = cards.value.filter((card) => card.id !== id)
    cards.value = activeCards
    if(!cards.value.length) alertStore.setConfettiVisible()
  }

</script>
<template>
  <div
    v-for="{id, title, content, icon, iconHexColor, color } in cards"
    :key="id"
    class="c-info-card--container"
    @click="onHandleClick(id)"
  >
    <a-card hoverable>
      <template #title>
      <span
      class="font-bold"
      :class="`c-info-card__title-${color}`"
      >
        {{ title }}
      </span>
      </template>
      <template #extra>
        <div class="flex">
          <font-awesome-icon :icon="icon" :color="iconHexColor"/>
          <font-awesome-icon icon="fa-solid fa-x"/>
        </div>
      </template>
      <div >
        <p class="text-slate-700">{{ content }}</p>
      </div>
    </a-card>
  </div>
</template>
<style lang="pcss"  >
.c-info-card--container {
  .ant-card {
    @apply mb-2.5 rounded-lg border-cyan-700 border-2 border-solid dark:bg-gray-200;
  }
  .ant-card-head {
    @apply flex justify-center;
  }
  .ant-card-extra {
    margin-left: 20px;
    font-size: 16px;
  }
  .c-info-card__title-orange { @apply text-orange-700 }
  .c-info-card__title-red { @apply text-red-700 }
  .c-info-card__title-stone { @apply text-stone-700 }
  .c-info-card__title-yellow { @apply text-yellow-700 }

}

</style>
