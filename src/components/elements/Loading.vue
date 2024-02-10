<script setup>

const props = defineProps({
  isLoading: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: 'default',
    validator: (value) => ['small', 'default', 'large'].includes(value)
  },
  loadingMessage: {
    type: String,
    default: 'Loading...'
  },
})
</script>

<template>
  <div class="w-full h-full">
    <a-spin :spinning="isLoading" :size="props.size" :tip="props.loadingMessage"/>
  </div>
</template>
