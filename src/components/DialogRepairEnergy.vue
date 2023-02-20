<template>
  <section class="card-event">
    <bx-Icon icon="eos-icons:patch-fixes" size="xxl"></bx-Icon>
    <h1 class="gametitle mb-1 text-2xl text-blue-500">ROOM {{ roomNumber }}</h1>
    <h1 class="gametitle mb-8 text-sm">ACTIVATE REPAIR CUBESs FOR DIVERT POWER TO ENERGY CORE</h1>
    <section class="cubess flex justify-evenly cursor-pointer mb-4">
      <Cube @click="onClickCube(0)" :class="[{'is-active': cubes[0]}]"/>
      <Cube @click="onClickCube(1)" :class="[{'is-active': cubes[1]}]"/>
      <Cube @click="onClickCube(2)" :class="[{'is-active': cubes[2]}]"/>
    </section>
    <button class="block hover:bg-[rgba(0,0,0,0.5)] p-5 rounded-3xl my-0 mx-auto" @click="$emit('close')">CLOSE</button>
  </section>
</template>

<script setup>
import Cube from '@/components/Cube.vue'
import { useAppStore } from '@/stores/app'
import { ref, toRefs } from 'vue';

//// PROPS /////
const props = defineProps({ roomNumber: String })
let { roomNumber } = toRefs(props)

//// COMPONSABLES /////
const appStore = useAppStore()

//// DATA /////
const cubes = ref([0,0,0])

//// METHODS /////
function onClickCube(n) {
  cubes.value[n]
    ? cubes.value[n] = 0
    : cubes.value[n] = 1
  
  if (cubes.value.every(c => c === 1)) {
    appStore.reparedRooms.push(roomNumber.value)
  } else {
    if (appStore.reparedRooms.includes(roomNumber.value)) {
      appStore.reparedRooms.splice(appStore.reparedRooms.findIndex(r => r === roomNumber.value), 1)
    }
  }
}

</script>

<style scoped>
.gametitle {
  font-family: var(--font-primary);
}

.home-dialog {
  display: grid;
  place-items: center;
  min-height: 100vh;
}

.card-event {
  margin: 0 auto;
  text-align: center;
  border: 2px solid var(--color-primary);
  border-radius: 20px;
  padding: 1rem;
  width: clamp(300px, 60%, 500px);
  background-color: rgba(0, 0, 0, .5);
  box-shadow: 1px 1px 10px 1px var(--color-primary);
}
</style>