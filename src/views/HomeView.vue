<script setup>
import InfoCard from '../components/InfoCard.vue';
import { useAlertStore } from '../stores/AlertStore';

const alertStore = useAlertStore()
const handleAlert = function () {
  alertStore.setAlertVisible({
    message: 'This is the message',
    description: 'This is the description',
    type: 'success'
  })
}

</script>

<template>
  <main>
    <div class="flex p-5 items-center justify-center h-fit">
      <a-image src="/keHeadshot.jpg" :width="200" :height="300" class="object-fill rounded-lg"  />
    </div>
    <div class="flex flex-col items-center justify-center">
      <h2 class="font-bold text-lg dark:text-white">Kevin Espinal</h2>
      <p class="text-sm dark:text-white">Fullstack Software Engineer</p>
    </div>
    <button @click="handleAlert" class="bg-black mb-2 text-white font-semibold dark:bg-gray-200 dark:text-black rounded-lg p-2">Trigger Alert</button>
    <InfoCard />
  </main>
</template>
