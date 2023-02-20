import { DamageEvents } from './damageEvents.js'
import { useAppStore } from '@/stores/app'

/**
 * Build the Damage Events Deck into appStore.
 * @param {Number} totalNumCards 
 * @param {Number} leapHardnessValue  8 => 1 damage || 8 => 2 damage || 8 => 3 damage
 */
export const buildDamageEventsDeck = (totalNumCards = 24, leapHardnessValue = 8, finalRound = 24) => {
  const appStore = useAppStore()
  const damageEvents = DamageEvents()

  // Initial Damage
  appStore.addInitialDamage(damageEvents.initial)

  // Set final Round
  appStore.finalRound = finalRound

  for (let index = 0; index < totalNumCards; index++) {
    // level 1
    if (index < leapHardnessValue) { 
      appStore.addDamageCard({id: index, ...damageEvents.basic.level1 })
    }

    // level 2
    if (index >= leapHardnessValue && index < leapHardnessValue * 2) {
      appStore.addDamageCard({ id: index, ...damageEvents.basic.level2 })
    }

    // level 3
    if (index >= leapHardnessValue * 2 && index <= leapHardnessValue * 3) {
      appStore.addDamageCard({ id: index, ...damageEvents.basic.level3 })
    }
  }
}