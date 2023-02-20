import { defineStore } from 'pinia'

export const useDamageEvents = defineStore({
  id: 'damageEvents',
  state: () => ({
    // esto no debería estar aqui. Pq al no ser reactivo sino datos, sacarlo a .js
    basic: [
      { level: 1, name: 'Damage on one location', type: 'damage-location', value: 1 },
      { level: 2, name: 'Damage on two locations', type: 'damage-location', value: 2 },
      { level: 3, name: 'Damage on three locations', type: 'damage-location', value: 3 },
    ],
    
    special: [
      { name: 'No Damage', type: 'damage-location', value: 0 },
      { name: 'Tu traje tiene una rotura - You have to fix it', type: 'damage-player', value: { num: 1, type: 'data'}}
    ]
  }),
  getters: {
    doubleCount: (state) => state.counter * 2
  },
  actions: {
    increment() {
      this.counter++
    }
  }
})
