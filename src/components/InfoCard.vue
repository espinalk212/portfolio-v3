<script setup>
import { ref, computed, h } from 'vue'
import { useAlertStore } from '../stores/AlertStore';
  const alertStore = useAlertStore()
  const cards = ref([
    {
      id: 1,
      title:'My Hobbies',
      content: 'During my free time you can find me studying, working out, or either watching or playing sports.'
       + ' I am a huge sports fan and basketball is my favorite.',
      icon: 'fa-solid fa-basketball',
      iconHexColor: '#b45309',
      color: 'amber'
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
      title: 'What I\'m looking for',
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
    if(!cards.value.length) {
      alertStore.setConfettiVisible()
      setTimeout(() => alertStore.isConfettiVisible = false, "4000")
      alertStore.createBlogUpdate({message: 'Showing off notification feature'})
      setTimeout(() => alertStore.triggerNotification({
        type: 'info',
        message: 'Look at the blog icon ⤴️',
        description: 'In the future when I publish blogs, badges like such will tell you there\'s a new one to read 😁'
      }), "2000")
      setTimeout(() => alertStore.clearBlogNotifications(), "10000")
    }
  }

  const handleforceRerender = () => {
    emit('restore')
  }

  const removeAnimation = computed(() => {
    return cards.value.length <= 2
  })

  const emit = defineEmits(['restore'])
</script>
<template>
  <button
    v-if="cards.length !== 4"
    @click="handleforceRerender"
    class="hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150 duration-300 select-none shadow-lg border border-black shadow-cyan-500/50 ml-4 bg-gradient-to-r from-cyan-700 to-teal-500 mb-2 text-white font-semibold dark:bg-gradient-to-r dark:from-gray-200 dark:to-slate-500 dark:text-black rounded-lg p-2"
    :class="{'hover:animate-none animate-bounce hover:-translate-y-1 hover:scale-110' : removeAnimation}"
    >
    Restore Cards
  </button>
  <div
    v-if="cards.length"
    v-for="{id, title, content, icon, iconHexColor, color } in cards"
    :key="id"
    class="c-info-card--container"
  >
    <a-card hoverable>
      <template #title>
      <span
      class="font-bold select-none"
      :class="`c-info-card__title-${color}`"
      >
        {{ title }}
      </span>
      </template>
      <template #extra>
        <div class="flex">
          <font-awesome-icon :icon="icon" :color="iconHexColor" size="lg"/>
          <font-awesome-icon
          class="cursor-pointer ml-auto hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150 duration-300"
          @click="onHandleClick(id)"
          icon="fa-solid fa-circle-xmark"
          size="lg"
          />
        </div>
      </template>
      <div >
        <p class=" text-slate-700 select-none">{{ content }}</p>
      </div>
    </a-card>
  </div>
  <div
   v-else="!cards.length"
   class="c-info-card--container mt-20"
  >
  <a-empty :description="null"/>
  <a-card hoverable>
    <p
      class="text-lg font-bold text-center dark:text-black"
    >
      Don't worry, you can restore the cards by either refreshing or pressing the
      <span class=" shadow-cyan-500/50 border border-black bg-gradient-to-r from-cyan-700 to-teal-500 text-white font-semibold dark:bg-gradient-to-r dark:from-gray-200 dark:to-slate-500 dark:border dark:border-black dark:text-black rounded-lg p-2 m-1">
        Restore Cards
      </span>
      button above 👆🏽
    </p>
  </a-card>


  </div>

</template>
<style lang="pcss"  >
.c-info-card--container {
  .ant-card {
    @apply mb-2.5 rounded-lg border-cyan-700 border-2 border-solid dark:bg-gray-200;
  }
  .ant-card-head {
    @apply w-full;
  }
  .ant-head-wrapper {
    @apply flex w-full;
  }
  .ant-card-head-title {
    @apply flex justify-end text-center w-1/2;
  }
  .ant-card-extra {
    float: none;
    margin-left: none;
    padding-left: 10px;
    @apply  w-1/2;
  }
  .c-info-card__title-amber { @apply text-amber-700 }
  .c-info-card__title-red { @apply text-red-700 }
  .c-info-card__title-stone { @apply text-stone-700 }
  .c-info-card__title-yellow { @apply text-yellow-700 }

}

</style>
