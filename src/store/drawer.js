import { defineStore } from 'pinia'

export const userDrawder = defineStore('drawer', {
  // 其它配置项
  state() {
    return {
      rail: true
    }
  },
  actions: {
    setFalse() {
      this.rail = false
    },
    setTrue() {
      this.rail = true
    },
    switch() {
      this.rail = !this.rail
    },
  }
})