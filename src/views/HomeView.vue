<script setup>
import InfoCard from '../components/InfoCard.vue';
import { ref, onMounted } from 'vue';
import {useAlertStore } from '@/stores/AlertStore.js'
import keHeadshot from '@/assets/keHeadshot.jpg'
import FreshButton from '@/components/elements/FreshButton.vue'

const alertStore = useAlertStore();
const componentKey = ref(0);
function handleRestore () {
  componentKey.value += 1;
}
const image = keHeadshot
function handleAlert() {
  const randomNumber = Math.floor(Math.random() * 4)
  const randomType = ['error', 'success', 'warning', 'info'][randomNumber]

  alertStore.triggerNotification({
    message: `You triggered ${useAppropriateGrammar(randomType)} ${randomType} alert`,
    description: 'Isn\'t it nice?',
    type: randomType
  });
}
function useAppropriateGrammar (word) {
  if (word[0] === 'e' || word[0] === 'i') return 'an'
  return 'a'
}
onMounted(() => {
  alertStore.triggerNotification({
    message: 'Welcome! want to see something cool?',
    description: 'Try dismissing all the cards when you are done reading them',
    type: 'info'
  })
});

</script>

<template>
  <section>
    <div class="flex p-5 items-center justify-center h-fit">
      <a-image
        :src="image"
        :width="200"
        :height="300"
        :preview="false"
        alt="Image of Kevin"
        class="select-none object-fill rounded-lg"
      />
    </div>
    <div class="flex flex-col items-center justify-center">
      <h2 class="select-none font-bold text-lg dark:text-white">Kevin Espinal</h2>
      <p class="select-none text-sm dark:text-white">Fullstack Software Engineer</p>
    </div>
    <FreshButton text="Test Random Alerts" @clicked="handleAlert" />
    <InfoCard @restore="handleRestore" :key="componentKey" />
  </section>
</template>
