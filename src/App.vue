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
    @apply shadow-md shadow-blue-500/50 bg-blue-200;
    @apply rounded-lg border-blue-700 border-2 cursor-pointer;
  }

  .c-notification-warning {
    @apply shadow-md shadow-yellow-500/50 bg-yellow-200;
    @apply rounded-lg border-yellow-700 border-2;
  }
  .c-notification-success {
    @apply shadow-md shadow-green-500/50 bg-green-200;
    @apply rounded-lg border-green-700 border-2;
  }
  .c-notification-error {
    @apply shadow-md shadow-red-500/50 bg-red-200;
    @apply rounded-lg border-red-700 border-2;
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
  .ant-notification-notice-close {
    @apply hover:text-black text-black hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150 duration-300
  }

}
</style>