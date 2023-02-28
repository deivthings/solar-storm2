<template>
  <section class="card-event">
    <bx-Icon icon="eos-icons:patch-fixes" size="xxl"></bx-Icon>
    <h1 class="gametitle mb-1 text-2xl text-blue-500">{{ selectedRoom.name }}</h1>
    <h1 v-if="selectedRoom.fixed" >Room is repaired</h1>
    <h1 v-else class="gametitle mb-8 text-sm">ACTIVATE ALL REPAIR CUBES IN ORDER TO DIVERT POWER TO ENERGY CORE</h1>
      <section class="cubess flex justify-evenly cursor-pointer mb-4">
        <Cube @click="onClickCube(0)" :class="[{ 'is-active': cubes[0] }]"/>
        <Cube @click="onClickCube(1)" :class="[{ 'is-active': cubes[1] }]"/>
        <Cube @click="onClickCube(2)" :class="[{ 'is-active': cubes[2] }]"/>
      </section>
    <button class="block p-5 rounded-3xl my-0 mx-auto | hover:bg-[rgba(0,0,0,0.5)]" @click="$emit('close')">
      DONE
    </button>
  </section>
</template>

<script setup>
import Cube from '@/components/Cube.vue'
import { useAppStore } from '@/stores/app'
import { ref, watch } from 'vue';


//// PROPS /////
const props = defineProps({ selectedRoom: Object })


//// COMPONSABLES /////
const appStore = useAppStore()


watch(() => props.selectedRoom.id,
  (newValue, oldValue) => {
    console.log({cubes})
    cubes.value = [0,0,0]
  },
  { 
    deep: true,
    // immediate: true 
  }
)


//// DATA /////
const cubes = ref([0,0,0])


//// METHODS /////
function onClickCube(n) {
  cubes.value[n]
    ? cubes.value[n] = 0
    : cubes.value[n] = 1
  
  if (cubes.value.every(c => c === 1)) {
    appStore.repairRoom(props.selectedRoom.id)
  } else {
    appStore.crashRoom(props.selectedRoom.id)
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