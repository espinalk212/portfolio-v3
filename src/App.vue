<script setup>
import { RouterView } from 'vue-router'
import ConfettiExplosion from 'vue-confetti-explosion'
import NavBarItem  from '@/components/NavBarItem.vue';
import { onBeforeMount, ref } from 'vue'
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
  <header>
    <NavBarItem @click="onDarkModeToggled" :systemSetTheme="systemSetTheme" :screenWidth="screenWidth" />
  </header>
  <div class="flex w-2/3 h-full ml-auto">
    <ConfettiExplosion v-if="alertStore.isConfettiVisible" :stageWidth="screenWidth" :stageHeight="screenHeight"/>
  </div>
  <RouterView  />
</template>
<style lang="pcss">
.ant-notification {

  .c-notification-info {
    background-color: #bfdbfe !important;
    @apply shadow-md shadow-blue-500/50;
    @apply rounded-lg border-2 cursor-pointer;
  }

  .c-notification-warning {
    background-color: #fde68a !important;
    @apply shadow-md shadow-yellow-500/50;
    @apply rounded-lg border-2;
  }
  .c-notification-success {
    background-color: #bbf7d0 !important;
    @apply shadow-md shadow-green-500/50;
    @apply rounded-lg border-2;
  }
  .c-notification-error {
    background-color: #fecaca !important;
    @apply shadow-md shadow-red-500/50;
    @apply rounded-lg border-2;
  }
  .ant-notification-notice-message {
    @apply font-bold select-none;
  }
  .ant-notification-notice-icon {
    @apply mt-3;
  }
  .ant-notification-notice-description {
    @apply font-semibold select-none;
  }

}
</style>