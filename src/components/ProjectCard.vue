<script setup>
import FreshButton from '@/components/elements/FreshButton.vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  site: {
    type: String,
    default: () => ''
  },
  source: {
    type: String,
    required: true
  }
})

function onClickedSource() {
  window.open(`${props.source}`, '_blank')
}

function onClickedSite() {
  window.open(`${props.site}`, '_blank')
}
</script>
<template>
  <div
    class="flex max-w-1/2 justify-self-center flex-col border-solid border-2 border-black p-10 items-center m-4 rounded-2xl dark:border-white"
  >
    <img />
    <h3 class="font-semibold text-lg dark:text-white">{{ title }}</h3>
    <span class="text-sm text-center max-w-[600px] dark:text-white">{{ description }}</span>
    <div class="flex">
      <FreshButton text="Link to source" @clicked="onClickedSource" />
      <FreshButton text="Link to site" :disabled="!props.site" @clicked="onClickedSite" />
    </div>
  </div>
</template>
<style lang="pcss"></style>
