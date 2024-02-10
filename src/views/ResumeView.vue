<script setup>
import { VuePDF, usePDF } from '@tato30/vue-pdf'
import Loading from '@/components/elements/Loading.vue'
import { ref, onMounted } from 'vue'

const { pdf } = usePDF('../src/assets/Kevin_Espinal_Resume_Updated.pdf')
const loading = ref(false)

function onFileLoaded () {
  console.log('done loading ...')
  loading.value = false
}

onMounted(() => {
  loading.value = true
})
</script>


<template>
  <div  class="w-full h-full">
    <VuePDF class="flex justify-center" :pdf="pdf" @loaded="onFileLoaded" watermark-text="kevinespinal212" >
      <Loading class="flex justify-center" size="large" :is-loading="loading"/>
    </VuePDF>
  </div>
</template>
