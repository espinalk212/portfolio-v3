<script setup>
import { RouterView } from 'vue-router'
import ConfettiExplosion from 'vue-confetti-explosion'
import NavBarItem  from '@/components/NavBarItem.vue';
import { onBeforeMount, ref } from 'vue'
import Alert from '@/components/elements/Alert.vue'
import {useAlertStore } from '@/stores/AlertStore.js'

const screenWidth = ref(640)
const screenHeight = ref(0)
const systemSetTheme = ref(false)
const alertStore = useAlertStore()

onBeforeMount(() => {
  updateScreenWidth();
  onScreenResize();
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    const app = document.body
    app.classList.add('dark');
    systemSetTheme.value = true
  }
})

const onDarkModeToggled = (darkMode) => {
  const app = document.body
  app.classList[
      darkMode === true ? 'add' : 'remove'
    ]('dark');
}

const onScreenResize = function () {
  window.addEventListener('resize', () => {
    updateScreenWidth()
  })
}

const updateScreenWidth = function () {
  screenWidth.value = window.innerWidth
  screenHeight.value = window.innerHeight
}

</script>

<template >
  <Alert v-if="alertStore.alertVisible" @closed="() => alertStore.alertVisible = false" :message="alertStore.message" :type="alertStore.type" :description="alertStore.description"/>
  <header>
    <NavBarItem @click="onDarkModeToggled" :systemSetTheme="systemSetTheme" :screenWidth="screenWidth" />
  </header>
  <div class="flex w-2/3 h-full ml-auto">
    <ConfettiExplosion v-if="alertStore.isConfettiVisible" :stageWidth="screenWidth" :stageHeight="screenHeight"/>
  </div>
  <RouterView  />
</template>
