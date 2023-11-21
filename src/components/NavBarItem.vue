<script setup>
import { RouterLink } from 'vue-router'
import { computed, ref, onBeforeMount } from 'vue'
import { useAlertStore } from '@/stores/AlertStore'
const props = defineProps({
  screenWidth: Number,
  systemSetTheme: Boolean,
})

const alertStore = useAlertStore()

const notificationCount = computed(() => alertStore.blogUpdates.length)

const darkMode = ref(false)

onBeforeMount(() => {
  if(props.systemSetTheme) {
    darkMode.value = true
  }
})

const navBarSections = [
  {
    title: 'Home',
    icon: 'fa-solid fa-home',
    path: '/',
  },
  {
    title: 'Projects',
    icon: 'fa-solid fa-laptop',
    path: '/projects',
  },
  {
    title: 'Tech',
    icon: 'fa-solid fa-school',
    path: '/technologies',
  },
  {
    title: 'Resume',
    icon: 'fa-solid fa-file',
    path: '/resume',
  },
  {
    title: 'Blog',
    icon: 'fa-solid fa-blog',
    path: '/blog',
  },
]

const onDarkModeToggled = function () {
  emit('click', darkMode.value)
}

const pageIsNotReady = function (title) {
  const prohibitedPages = ['Tech', 'Resume', 'Blog']
  if (prohibitedPages.includes(title)) return true
  return false
}

const emit = defineEmits(['click'])
</script>
<template>
  <div class="flex items-center cursor-pointer md:px-20 lg:px-30">
    <div
      v-for="{title, icon, path} in navBarSections"
      :key="title"
      class="w-[17vw]"
      >
      <RouterLink
        :to="path"
        v-slot="{ isActive }"
        >
          <div
            class="fa-stack flex items-center justify-center w-full  md:text-2xl lg:text-4xl"
            :class="pageIsNotReady(title) ? 'cursor-not-allowed' : ''"
          >
          <font-awesome-layers class="flex w-1/2 h-full" >
            <font-awesome-icon icon="fa-solid fa-circle" class="fa-stack-2x" :color="darkMode ? '#0e7490' : '#e5e7eb'" />
            <font-awesome-icon :icon="icon" class="fa-stack-1x" :color="darkMode ? '#e5e7eb' : '#0e7490'" />
            <font-awesome-layers-text
            class="fa-2x"
              v-if="title === 'Blog' && notificationCount > 0"
              counter
              :value="notificationCount"
              position="top-right"
            />
          </font-awesome-layers>
        </div>
          <p  :class="{'activeLink': isActive,
          'cursor-not-allowed' : pageIsNotReady(title)}"
          class="flex justify-center font-bold text-sm text-cyan-700 dark:text-gray-200 md:text-2xl lg:text-3xl"
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
      <p class="font-bold text-sm text-cyan-700 dark:text-gray-200 md:text-2xl lg:text-3xl">{{ darkMode ? 'Dark' : 'Light' }}</p>
    </div>
  </div>
</template>
<style lang="pcss" >
.activeLink {
  @apply border-b-4 border-solid border-brand-teal rounded
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

/* class="flex items-center justify-center md:text-2xl lg:text-3xl" */
</style>

