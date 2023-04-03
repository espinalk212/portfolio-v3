<script setup>
import InfoCard from '../components/InfoCard.vue';
import { useAlertStore } from '../stores/AlertStore';
import { ref, onMounted } from 'vue';

const componentKey = ref(0)
const handleRestore = () => {
  componentKey.value += 1;
}
const alertStore = useAlertStore()
const handleAlert = function () {
  alertStore.setAlertVisible({
    message: 'This is the message',
    description: 'This is the description',
    type: 'success'
  })
}

onMounted(() => {
  alertStore.setAlertVisible({
    message: 'Are you up for a surprise?',
    description: 'Try dismissing all the cards when you are done reading them',
    type: 'info'
  })
})
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
    <button
      @click="handleAlert"
      class="shadow-lg shadow-cyan-500/50 bg-gradient-to-r from-cyan-700 to-teal-500 mb-2 text-white font-semibold dark:bg-gradient-to-r dark:from-gray-200 dark:to-slate-500 dark:text-black rounded-lg p-2"
      >
      Trigger Alert
    </button>
    <InfoCard @restore="handleRestore" :key="componentKey" />
  </main>
</template>
