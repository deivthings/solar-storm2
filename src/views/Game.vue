<template>
  <main class="wrapper-game">

    <header class="game-header mb-8 red">
      <div class="flex items-center">
        <div class="text-center bg-error mr-3 rounded-lg p-1 cursor-pointer select-none hover:bg-errordark"
          @click="$router.push('/exit')">
          <bx-Icon icon="mdi:close-octagon-outline" class="text-light-50" size="xl" />
          <h6 class="text-xs" style="margin-top: -.5rem">exit</h6>
        </div>
        <!-- <h1>SOLAR STORM DAMAGE APP</h1> -->
      </div>
      <h1 v-if="appStore.round >= 0">
        <span class="mr-3">ROUND</span>
        <span class="badge">{{ appStore.round }}</span>
      </h1>
    </header>

    <section>
      <!-- <section v-if="exitDialog">
        <DialogExit @cancel="exitDialog = false" @exit="exitCurrentGame()"/>
      </section> -->

      <!-- <section v-else-if="repairRoomEnergy">
        <DialogRepairEnergy  @close="repairRoomEnergy = false" :roomNumber="activeRoom"/>
      </section> -->
  
      <article>
        <section class="text-center mb-8" v-if="appStore.round < 0">
          <button class="btn-action-green" @click="triggerInitialDamage()" :disabled="loadingEvent">
            <bx-Icon icon="ant-design:rocket-outlined" size="xxl" />
            <div> Rooms Initial Damage </div>
          </button>
        </section>
  
        <section class="text-center mb-8" v-if="appStore.round >= 0 && currentDamageEvent">
          <button class="btn-action" @click="triggerDamageCard()" :disabled="loadingEvent">
            <bx-Icon icon="ant-design:security-scan-filled" size="xxl" />
            <div> Trigger Next Damage Round </div>
          </button>
        </section>
  
        <section>
          <div v-if="loadingEvent">
            <scanning-ship></scanning-ship>
          </div>
          <div v-else>
            <div v-if="currentDamageEvent">
              <BasicDamageEvent :damage="currentDamageEvent" @clickroom="onClickRoom" />
            </div>
            <div v-if="appStore.round > appStore.finalRound">
              <FinalHullBreach />
            </div>
          </div>
        </section>
      </article>
    </section>

  </main>
</template>

<script setup>
import { onBeforeMount, ref } from "@vue/runtime-core"
import { useAppStore } from '@/stores/app'
import { useRouter } from 'vue-router'
import { buildDamageEventsDeck } from '@/lib/BuildEventsDeck'
import BasicDamageEvent from '@/components/BasicDamageEvent.vue'
import FinalHullBreach from '@/components/FinalHullBreach.vue'
import DialogExit from '@/components/DialogExit.vue'
import DialogRepairEnergy from '@/components/DialogRepairEnergy.vue'
import { Howl } from 'howler';

//// DATA ////////////////////////
const appStore = useAppStore()
const router = useRouter()
const currentDamageEvent = ref(null)
const loadingEvent = ref(false)
const exitDialog = ref(false)
const repairRoomEnergy = ref(false)
const activeRoom = ref(0)
const LOADING_EVENT_DELAY = 2000
const soundClick = new Howl({ src: ['src/assets/sounds/ui-btn-click.mp3'] })
const soundErr2 = new Howl({ src: ['src/assets/sounds/error2.mp3'] })


//// METHODS ////////////////////////
/**
 * before starting, we must add 6 damage to rooms
 */
function triggerInitialDamage() {
  soundClick.play()
  loadingEvent.value = true

  setTimeout(() => {
    currentDamageEvent.value = appStore.initialDamage
    loadingEvent.value = false
    appStore.incrementRound()
    soundErr2.play()
  }, LOADING_EVENT_DELAY)
}

/**
 * On click trigger damage event button
 */
const triggerDamageCard = () => {
  appStore.incrementRound()
  soundClick.play()
  loadingEvent.value = true

  setTimeout(() => {
    currentDamageEvent.value = appStore.getRoundDamageCard
    loadingEvent.value = false
    soundErr2.play()
  }, LOADING_EVENT_DELAY)
}

function exitCurrentGame () {
  appStore.resetGame()
  this.currentDamageEvent = null
  this.exitDialog = false
  buildDamageEventsDeck()
  router.push('/')
}

function onClickRoom (roomNumber) {
  repairRoomEnergy.value = true
  activeRoom.value = roomNumber
}

//// LIFECYCLE HOOKS ////////////////////////
onBeforeMount(() => buildDamageEventsDeck())

</script>

<style lang="css" scoped>
.wrapper-game {
  min-height: 100vh;
}

.game-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: .8rem;
  background-color: rgba(0, 0, 0, .5);
  box-shadow: 1px 1px 10px 1px var(--color-primary);
}

h2,
h1 {
  font-family: 'Kdam Thmor Pro', sans-serif;
}

.badge {
  background-color: var(--color-primary);
  padding: .3rem .8rem;
  border-radius: 20px;
  font-size: 1.3rem;
}
</style>
