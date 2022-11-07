import { defineStore } from 'pinia'

export const useBreadStore = defineStore('bread', {
  // 其它配置项
  state() {
    return {
      leftBread: [],
      rightBread: [],
    }
  },
  actions() {
    
  }
})