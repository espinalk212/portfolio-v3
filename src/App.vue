<script setup>
import { RouterView } from 'vue-router'
import NavBarItem  from '@/components/NavBarItem.vue';
import { onBeforeMount, ref } from 'vue'

const screenWidth = ref(640)
const systemSetTheme = ref(false)

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
}
</script>

<template >
  <header>
    <NavBarItem @click="onDarkModeToggled" :systemSetTheme="systemSetTheme" :screenWidth="screenWidth" />
  </header>
  <RouterView  />
</template>
