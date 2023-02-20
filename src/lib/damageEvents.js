
export const DamageEvents = () => {
  // before starting, you must to add 6 of damage
  const initial = { level: 0, name: 'Initial Damage on six locations', type: 'damage-location', value: 6 }

  const basic = {
    level1: { level: 1, name: 'Damage on one location', type: 'damage-location', value: 1 },
    level2: { level: 2, name: 'Damage on two locations', type: 'damage-location', value: 2 },
    level3: { level: 3, name: 'Damage on three locations', type: 'damage-location', value: 3 },
  }

  const special = [
    { name: 'No Damage', type: 'damage-location', value: 0 },
    { name: 'Tu traje tiene una rotura - You have to fix it', type: 'damage-player', value: { num: 1, type: 'data'}}
  ]

  return {
    basic,
    special,
    initial
  }
}