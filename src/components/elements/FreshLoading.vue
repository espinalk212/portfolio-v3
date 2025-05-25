<script setup>
defineProps({
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
    default: 'FreshLoading...'
  },
})
</script>

<template>
  <div class="w-full h-full">
    <a-spin :spinning="isLoading" :size="size" :tip="loadingMessage"/>
  </div>
</template>
