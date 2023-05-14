import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const usePointsStore = defineStore('points', () => {
  const points = ref(0)
  const volume = ref(1)

  const increment = () => {
    points.value += volume.value
    localStorage.points = points.value
  }

  return { points, volume, increment }
})