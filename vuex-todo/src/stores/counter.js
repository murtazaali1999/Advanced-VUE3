import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {

  //state
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)


  //mutations, state is updated and can be accessed via mutations
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})
