<template>
  <div class="mb-5 min-w-fit dark:bg-gray-200 bg-slate-100 rounded-2xl border-2 border-brand-teal">
    <p class="flex justify-center p-5 font-bold">{{ props.name }}</p>
    <div class="flex justify-center">

      <img :src="props.src" class="p-5" :height="iconHeight" :width="iconWidth" />
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  }
})

const iconHeight = ref(200)
const iconWidth = ref(200)
</script>