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

    selectedRoom: undefined,

    // room = {id, name, repaired?}
    rooms: [
      { id: 1, name: 'CREW QUARTERS', reparired: false },
      { id: 2, name: 'ENGINE ROOM', reparired: false },
      { id: 3, name: 'ARMOURY', reparired: false },
      { id: 4, name: 'MEDICAL BAY', reparired: false },
      { id: 5, name: 'CARGO HOLD', reparired: false },
      { id: 6, name: 'REPAIR CENTRE', reparired: false },
      { id: 7, name: 'MESS HALL', reparired: false },
      { id: 8, name: 'BRIDGE', reparired: false }
    ]
  }),

  getters: {
    getRoundDamageCard: (state) => state.damageDeck[state.round - 1],
    doubleCount: (state) => state.counter * 2,
    energyClass: (state) => `energy${state.reparedRooms.length}` // dont refresh
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
