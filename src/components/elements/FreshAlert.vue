<script setup>
import { onMounted, ref } from 'vue'
defineProps({
  message: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    required: true,
    validator: (value) => ['success', 'error', 'warning', 'info'].includes(value)
  }
});

const emit = defineEmits(['closed']);

const visible = ref(false);
function closeAlert () {
  setTimeout(() => {
    visible.value = false
    emit('closed')
  }, '3500')
}
onMounted(() => {
  closeAlert();
});
</script>
<template>
  <div class="c-element-alert flex w-7/12 h-2/7 mt-10">
    <a-alert banner show-icon :type="type">
      <template #icon>
        <div v-if="type === 'success'">
          <font-awesome-icon icon="fa-solid fa-circle-check" />
        </div>
        <div v-if="type === 'info'">
          <font-awesome-icon icon="fa-solid fa-circle-info" />
        </div>
        <div v-if="type === 'warning'">
          <font-awesome-icon icon="fa-solid fa-triangle-exclamation" />
        </div>
        <div v-if="type === 'error'">
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
  .ant-alert-success {
    background-color: #bbf7d0 !important;
    @apply shadow-md shadow-green-500/50
  }
  .ant-alert-warning {
    background-color: #fde68a !important;
    @apply shadow-md shadow-yellow-500/50
  }
  .ant-alert-info {
    background-color: #bfdbfe !important;
    @apply shadow-md shadow-blue-500/50
  }
  .ant-alert-error {
    background-color: #fecaca !important;
    @apply shadow-md shadow-red-500/50
  }

}
</style>
