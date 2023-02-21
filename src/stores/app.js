import { defineStore } from 'pinia'

export const useAppStore = defineStore({
  id: 'app',
  state: () => ({
    // Ronda ( cada jugador es una ronda - no todos los jugadores componen una ronda)
    round: -1,
    finalRound: undefined,

    // Daño inicial de 6
    initialDamage: null,

    // El mazo de daño.
    damageDeck: [],

    // repared and activated derive energy to cre
    reparedRooms: [],

    selectedRoom: undefined
  }),

  getters: {
    getRoundDamageCard: (state) => state.damageDeck[state.round - 1],
    doubleCount: (state) => state.counter * 2
  },
  
  actions: {
    incrementRound() {
      this.round++
    },

    decrementRound() {
      this.round--
    },

    addDamageCard(damageCard) {
      this.damageDeck.push(damageCard)
    },

    addInitialDamage(_initialDamage) {
      console.log('iniciando', _initialDamage)
      this.initialDamage = _initialDamage
    },
    
    resetGame () {
      this.initialDamage = null
      this.damageDeck = []
      this.finalRound = undefined
      this.round = -1
    }
  }
})
