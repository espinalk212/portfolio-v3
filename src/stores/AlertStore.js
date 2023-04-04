import { defineStore } from 'pinia'
import {notification } from 'ant-design-vue'
import { h } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { v4 as uuidv4 } from "uuid";


export const useAlertStore = defineStore('Alert', {
  state: () => ({
    notifications: [],
    isConfettiVisible: false,
  }),
  actions: {
    triggerNotification({message, description, type}) {
      const id = uuidv4()
      createNotification({id, message, description, type})
      this.notifications.push({
        id,
        message,
        description,
        type})
    },
    setConfettiVisible() {
      this.isConfettiVisible = true
    }
  }
})

notification.config({
  maxCount: 4,
  duration: null,
  placement: 'topLeft',
  top: '70px',
})
const createNotification = ({id, type, message, description}) => {
  notification[type]({
    key: id,
    message,
    description,
    class: `c-notification-${type}`,
    closeIcon: () => h(FontAwesomeIcon, {icon: 'fa-solid fa-circle-xmark', size: 'lg'}),
    icon: () => h(FontAwesomeIcon, {icon: `${typeBasedIcon[type].icon}`, color: `${typeBasedIcon[type].color}`, size: 'lg'}),
  })
}

const typeBasedIcon = {
  success: {icon: 'fa-solid fa-circle-check', color: '#15803d'} ,
  info: {icon: 'fa-solid fa-circle-info', color: '#1d4ed8'},
  warning: {icon: 'fa-solid fa-triangle-exclamation', color: '#b45309'},
  error: {icon: 'fa-solid fa-circle-exclamation', color: '#b91c1c'}
}