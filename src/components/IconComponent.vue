<script setup>
defineProps({
  src: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  }
});
</script>
<template>
  <div class="mb-5 min-w-fit dark:bg-gray-200 bg-slate-100 rounded-2xl border-2 border-brand-teal">
    <p class="flex justify-center p-5 font-bold">{{ name }}</p>
    <div class="flex justify-center">
      <img :src="src" class="p-5" height="200" width="200" :alt="name" />
    </div>
  </div>
</template>
