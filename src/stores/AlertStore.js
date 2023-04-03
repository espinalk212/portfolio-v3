import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAlertStore = defineStore('alert', {
  state: () => ({
    alertVisible: false,
    message: '',
    description: '',
    type: '',
  }),
  getters: {},
  actions: {
    setAlertVisible ({message, description, type}) {
      this.alertVisible = true
      this.message = message,
      this.description = description,
      this.type = type
    },
  }
})