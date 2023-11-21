<template>
  <div >
    <h1 class="font-bold dark:text-white lg:text-2xl text-center mb-10">Throughout my time working in software development here are some of the libraries, frameworks, services and languages I have worked with:</h1>
  </div>
  <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
    <li v-for="(icon, i) in icons" class="list-none">
      <IconComponent
      :key="`${icon.name}__${i}`"
      :name="icon.name"
      :src="icon.src"
      />
    </li>
  </div>
  <p class="font-bold dark:text-white lg:text-2xl text-center mb-10">Check my <a>resume</a> for even more info</p>
</template>
<script setup>
import { icons } from '@/utils/techIcons.js'
import IconComponent from '@/components/IconComponent.vue'
</script>