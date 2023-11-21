<template>
  <div >
    <h1 class="text-lg font-bold text-center dark:text-white mb-10">Throughout my time working in software development here are some of the libraries, frameworks, services and languages I have worked with:</h1>
  </div>
  <div class="flex mb-5">
    <div class="flex ml-auto w-full md:w-3/4 lg:w-1/2">
      <p class="flex dark:text-white text-center lg:font-medium">You can sort by the items I have the most experience by clicking here 👉🏼</p>
      <FreshButton class="w-1/2" :text="btnText" :disabled="isSortedByExp" @clicked="onSort"/>
    </div>
  </div>
  <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
    <li v-for="(icon, i) in sortedIcons" class="list-none">
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
import FreshButton from '@/components/elements/FreshButton.vue'
import { sortBy } from 'lodash'
import { computed, onMounted, ref } from 'vue'

const sortedIcons = ref([])
const isSortedByExp = ref(false)
onMounted(() => sortedIcons.value = icons)

const btnText = computed(() => !isSortedByExp.value ? 'Sort' : 'Already Sorted' )

function onSort () {
  sortedIcons.value = sortBy(icons, ['experience']).reverse()
  isSortedByExp.value = true
}
</script>