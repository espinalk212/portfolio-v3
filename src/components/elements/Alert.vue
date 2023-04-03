<script setup>
import { onMounted, ref } from 'vue'
const props = defineProps({
  message: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: ""
  },
  type: {
    type: String,
    required: true,
    validator: (value) => ['success', 'error', 'warning', 'info'].includes(value)
  }
})
const visible = ref(false)
const closeAlert = function () {
  setTimeout(() => {
    visible.value = false
    emit('closed')
  }, "5000")
}
onMounted(() => {
  closeAlert()
})

const emit = defineEmits(['closed'])
</script>
<template>
  <div class="c-element-alert flex w-7/12 h-2/7">
    <a-alert
    banner
    show-icon
    :type="type"
  >
    <template #icon>
      <div v-if="props.type === 'success'">
        <font-awesome-icon icon="fa-solid fa-circle-check"/>
      </div>
      <div v-if="props.type === 'info'">
        <font-awesome-icon icon="fa-solid fa-circle-info" />
      </div>
      <div v-if="props.type === 'warning'">
        <font-awesome-icon icon="fa-solid fa-triangle-exclamation" />
      </div>
      <div v-if="props.type === 'error'">
        <font-awesome-icon icon="fa-solid fa-circle-exclamation" />
      </div>
    </template>

    <template #message>
      {{ message }}
    </template>

    <template #description>
      {{ description }}
    </template>
  </a-alert>
  </div>
</template>
<style lang="pcss">
.c-element-alert {
  z-index: 1;
  position:absolute;
  .ant-alert {
    @apply w-11/12 h-3/6 md:w-6/12 lg:w-4/12;
    border-radius: 8px !important;
    border: 1px solid black;
    .ant-alert-content > .ant-alert-message, .ant-alert-description {
      font-weight: 900 !important;
      align-items: center !important;
    }



  }
  .ant-alert-success { background-color: #bbf7d0 !important;}
  .ant-alert-warning { background-color: #fde68a !important;}
  .ant-alert-info { background-color: #bfdbfe !important;}
  .ant-alert-error { background-color: #fecaca !important;}

}
</style>