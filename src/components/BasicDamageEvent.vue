<!-- tarjeta de daño basica del juego => dañor en 1/2/3 room-->
<template>
  <div>
    <h2>{{  }}</h2>
    <section class="card-event">
      <ul class="matrix-rooms">
        <li @click="$emit('clickroom', index + 1)"
          :class="['room', `room${index + 1}`, {'has-damage animate__animated animate__pulse animate__infinite': room === 1}]" 
          v-for="(room, index) in rooms" :key="index">
            <h6 class="room-label">room {{ index + 1 }}</h6>
            <!-- room value::::: {{ room }} -->
            <!-- <bx-Icon v-if="room === 1" icon="bi:x-circle-fill" class="text-rose-500" size="xl"/> -->
            <bx-Icon v-if="room === 1" icon="bx:error" class="text-rose-500" size="xxl"/>
            <div :class="['energy-path']" v-if="appStore.reparedRooms.includes(index + 1)">
              <bx-Icon icon="ic:round-double-arrow" size="lg"></bx-Icon>
              <bx-Icon icon="ic:round-double-arrow" size="md"></bx-Icon>
              <bx-Icon v-if="isCornerRoom(index + 1)" icon="ic:round-double-arrow" size="sm"></bx-Icon>
            </div>
        </li>
        <li class="room room-core">
            <h6 class="room-label text-center">Energy Core</h6>
            <!-- simple-icons: coronaengine -->
          <bx-Icon size="xl" icon="mdi:energy-circle" class="energy-core-icon text-fuchsia-500" />
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup>
import { ref, toRefs, watchPostEffect } from "@vue/runtime-core"
import { useAppStore } from '@/stores/app'

const props = defineProps({ damage: Object })
const rooms = ref([0,0,0,0,0,0,0,0])
const appStore = useAppStore()

/**
 * Watcher for props damage
 * Usin postEffect in order to access methods resetRooms and AddDamageToRooms before initialization
 * With watchEffect ( without flush ) no puedes acceder a los metodos 
 * en la primera inicialización
 * https://stackoverflow.com/questions/69279288/prevent-running-watcheffect-function-after-app-mounts-in-vue-3
 * https://vuejs.org/api/reactivity-core.html#watcheffect
 * Se podría hacer con un watch normal y con el evento onmounted para la primera vez
 */
let { damage } = toRefs(props)
watchPostEffect(() => {
  resetRooms()
  addDamageToRooms()
})

const isCornerRoom = (roomNumber) => {
  return [1, 3, 8, 6].includes(roomNumber)
}

/**
 * Initiliaze rooms
 */
const resetRooms = () => rooms.value = [0,0,0,0,0,0,0,0]

/**
 * Turn 0 to 1 on random rooms array
 * The number of rooms damaged comes from value of damage object => level2: { level: 2, name: 'Damage on two locations', type: 'damage-location', value: 2
 */
const addDamageToRooms = () => {
  let damagedRooms = []
  let rndRoom = undefined

  while(damagedRooms.length < props.damage.value) {
     rndRoom = Math.floor(Math.random() * (8 - 0)) + 0
     
    if(rooms.value[rndRoom] !== 1) { 
      damagedRooms.push(rndRoom)
      rooms.value[rndRoom] = 1
    }
  }
}


</script>

<style scoped>
.card-event {
  margin: 0 auto;
  border: 2px solid var(--color-primary);
  border-radius: 20px;
  padding: 3rem;
  width: clamp(350px, 70%, 800px);
  background-color: rgba(0, 0, 0, .5);
  box-shadow: 1px 1px 10px 1px var(--color-primary);
}

.matrix-rooms {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 40px;
  grid-row-gap: 40px;
}

.room {
  position: relative;
  background: #000;
  border-radius: 10px;
  height: 12vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid var(--color-primary);
}

.energy-path {
  position: absolute;
  display: flex;
  align-items: center;
}

.energy-path svg {
  margin: -.2rem;
}

.room1 .energy-path{
  top: 100%;
  left: 100%;
  transform: rotate(45deg) translate(0%, 60%);
}
.room3 .energy-path {
  top: 100%;
  right: 100%;
  transform: rotate(135deg) translate(0%, -60%);
}

.room2 .energy-path {
  top: 100%;
  left: 50%;
  transform-origin: top left;
  transform: rotate(90deg) translateY(-50%);
}

.room7 .energy-path {
  top: 0%;
  left: 50%;
  transform-origin: top left;
  transform: rotate(270deg) translateY(-50%);
}

.room4 .energy-path {
  top: 50%;
  left: 100%;
  transform-origin: top left;
  transform:  translateY(-50%);
}

.room5 .energy-path {
  top: 50%;
  left: 0;
  transform-origin: top left;
  transform: rotate(180deg) translateY(-50%);
}

.room6 .energy-path {
  top: 0;
  left: 100%;
  transform-origin: top left;
  transform: rotate(315deg) translate(0%, -50%);
}

.room8 .energy-path {
  top: 0;
  left: 0;
  transform-origin: top left;
  transform: rotate(225deg) translate(0%, -50%);
}

.room.room-core {
  /* background: black url('../assets/cardcore.png') no-repeat center center; */
  background-size: cover;
  border: 3px solid var(--color-core);
}

.room.has-damage {
  border: 2px solid var(--color-error);
}

.room-label {
  position: absolute;
  font-size: .8rem;
  font-family: var(--font-primary);
  top: 5px;
  left: 12px;
}

.room1 { grid-area: 1 / 1 / 2 / 2; }
.room2 { grid-area: 1 / 2 / 2 / 3; }
.room3 { grid-area: 1 / 3 / 2 / 4; }
.room4 { grid-area: 2 / 1 / 3 / 2; }
.room5 { grid-area: 2 / 3 / 3 / 4; }
.room6 { grid-area: 3 / 1 / 4 / 2; }
.room7 { grid-area: 3 / 2 / 4 / 3; }
.room8 { grid-area: 3 / 3 / 4 / 4; }

@keyframes FadeIn {
  0% {
    opacity: .3;
    transform: scale(.8);
  }

  85% {
    opacity: .9;
    transform: scale(1.05);
  }

  100% {
    transform: scale(1);
  }
}
.energy-path svg {
  animation: FadeIn 1.5s infinite;
  animation-fill-mode: both;
}

.energy-path svg:nth-child(1) {
  animation-delay: .5s
}

.energy-path svg:nth-child(2) {
  animation-delay: 1s
}

.energy-path svg:nth-child(3) {
  animation-delay: 1.5s
}

.energy-core-icon {
  animation-name: rotation;
  animation-iteration-count: infinite;
  animation-direction: linear;
}
.energy-core-icon.energy1 { animation-duration: 8s }
.energy-core-icon.energy2 { animation-duration: 7s }
.energy-core-icon.energy3 { animation-duration: 6s }
.energy-core-icon.energy4 { animation-duration: 5s }
.energy-core-icon.energy5 { animation-duration: 4s }
.energy-core-icon.energy6 { animation-duration: 3s }
.energy-core-icon.energy7 { animation-duration: 1.5s }
.energy-core-icon.energy8 { animation-duration: .7s }

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(359deg);
  }
}
</style>