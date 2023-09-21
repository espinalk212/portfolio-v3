<script setup>
import {computed } from 'vue'
const props = defineProps({
  icon: {
    type: String,
  },
  size: {
    type: String,
    default: 'medium',
    validator (val) {
      return ['small', 'medium', 'large', 'xlarge'].includes(val)
    }
  },
  text: {
    type: String,
  },
  variant: {
    type: String,
    default: 'primary',
    validator (val) {
      return ['primary', 'secondary'].includes(val)
    }
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})


const emit = defineEmits(['clicked'])

function onButtonClicked () {
  emit('clicked')
}

const sizeMappedToClass = {
  small: 'sm',
  medium: 'md',
  large: 'lg',
  xlarge: 'xl'
}

const variantMappedToClass = {
  primary: 'hover:-translate-y-1 hover:scale-110 hover:cusor-pointer transition ease-in-out delay-150 duration-300 select-none m-2 border border-black shadow-lg shadow-cyan-500/50 bg-gradient-to-r from-cyan-700 to-teal-500 mb-2 text-white font-semibold dark:bg-gradient-to-r dark:from-gray-200 dark:to-slate-500 dark:text-black rounded-lg p-2',
  secondary: '',
}

const buttonSize = computed(() => `text-${sizeMappedToClass[props.size]}`)
const buttonVariant = computed(() => variantMappedToClass[props.variant])
const disabled = computed(() => props.disabled ? 'hover:cursor-not-allowed bg-gradient-to-r from-zinc-300 to-zinc-300 text-zinc-400 border-zinc-300 dark:text-zinc-600 dark:border-none hover:transform-none' : '')

</script>
<template>
  <button
  :class="[disabled, buttonSize, buttonVariant]"
  :disabled="props.disabled"
  @click="onButtonClicked"
  >{{ text }}</button>
</template>
<style lang="pcss">

</style>