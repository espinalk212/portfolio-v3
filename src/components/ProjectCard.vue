<script setup>
import FreshButton from '@/components/elements/FreshButton.vue'

const props = defineProps ({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  site: {
    type: String,
    default: () => '',
  },
  source: {
    type: String,
    required: true,
  }
})


function onClickedSource () {
  window.open(`${props.source}`, '_blank')
}

function onClickedSite () {
  window.open(`${props.site}`, '_blank')
}
</script>
<template>
<div class="flex flex-col border-solid border border-black items-center m-4 rounded-lg">
  <img>
  <h3 class="font-semibold text-lg">{{ props.title }}</h3>
  <span class="text-sm text-center max-w-[600px]">{{  props.description }}</span>
  <div class="flex">
    <FreshButton text="Link to source"  @clicked="onClickedSource" />
    <FreshButton text="Link to site" :disabled="!props.site" @clicked="onClickedSite"/>
  </div>
</div>
</template>
<style lang="pcss">
</style>