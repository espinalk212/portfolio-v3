<script setup>
import { RouterLink } from 'vue-router'
import { computed, ref, onBeforeMount } from 'vue'
const props = defineProps({
  screenWidth: Number,
  systemSetTheme: Boolean,
})

let darkMode

onBeforeMount(() => {
  if(props.systemSetTheme) {
    darkMode = ref(true)
  } else {
    darkMode = ref(false)
  }
})

const navBarSections = [
  {
    title: 'Home',
    icon: 'fa-solid fa-home',
    path: '/',
  },
  {
    title: 'About Me',
    icon: 'fa-solid fa-user',
    path: '/about',
  },
  {
    title: 'Projects',
    icon: 'fa-solid fa-laptop',
    path: '/projects',
  },
  {
    title: 'Resume',
    icon: 'fa-solid fa-file',
    path: '/resume',
  },
  {
    title: 'Blog',
    icon: 'fa-solid fa-file-pen',
    path: '/blog',
  },
]

const onDarkModeToggled = function () {
  emit('click', darkMode.value)
}

const pageIsNotReady = function (title) {
  if (title === 'Blog' || title === 'Resume') return true
  return false
}

const emit = defineEmits(['click'])
</script>
<template>
  <div class="flex justify-between cursor-pointer md:px-20 lg:px-30">
    <div
      v-for="{title, icon, path} in navBarSections"
      :key="title"
      >
      <RouterLink
        :to="path"
        v-slot="{ isActive }"
        >
          <div
            class="flex items-center justify-center md:text-2xl lg:text-3xl"
            :class="pageIsNotReady(title) ? 'cursor-not-allowed' : ''"
          >
            <font-awesome-icon :icon="icon" :color="darkMode ? 'white' : '#0e7490'" />
          </div>
          <p  :class="isActive && darkMode ? 'activeDark' : isActive && !darkMode ? 'activeLight' : '',
          pageIsNotReady(title) ? 'cursor-not-allowed' : ''"
          class="font-bold text-sm text-cyan-700 dark:text-white md:text-2xl lg:text-3xl"
          >
          {{ title }}
        </p>
      </RouterLink>
    </div>
    <div  @click="onDarkModeToggled" data-test="ant-switch">
      <div class="flex items-center justify-center md:pb-0.5 lg:pb-1.5">
        <a-switch
          v-model:checked="darkMode"
          :size="screenWidth < 768 ? 'small' : 'default'"
          >
          <template #checkedChildren>
            <font-awesome-icon icon="fa-solid fa-moon" color="#1890ff" />
          </template>
          <template #unCheckedChildren>
            <font-awesome-icon icon="fa-solid fa-sun" color="#facc15" />
          </template>
        </a-switch>
      </div>
      <p class="font-bold text-sm text-cyan-700 dark:text-white md:text-2xl lg:text-3xl">{{ darkMode ? 'Dark' : 'Light' }}</p>
    </div>
  </div>
</template>
<style lang="pcss" >
.activeDark {
  border-bottom: 4px solid #5eead4;
  border-radius: 2px;
}
.activeLight {
  border-bottom: 4px solid #5eead4;
  border-radius: 2px;
}
button.ant-switch {
  background-color: #1890ff;
}
button.ant-switch.ant-switch-checked {
  background-color: #4b5563;
}
button:not(.ant-switch-checked).ant-switch:focus {
    box-shadow: 0 0 0 2px #0e7490;

  &:hover {
    box-shadow: none !important;
  }
}
</style>