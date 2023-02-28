<template>
  <main class="wrapper-game">
    <HeaderApp />

    <article>  
      <section class="text-center mb-8" v-if="appStore.round < 0">
        <button v-wave class="btn-action-green" @click="triggerInitialDamage()" :disabled="loadingEvent">
          <bx-Icon icon="ant-design:rocket-outlined" size="xxl" />
          <div> Rooms Initial Damage </div>
        </button>
      </section>

      <section class="text-center mb-8" v-if="appStore.round >= 0 && currentDamageEvent">
        <button v-wave class="btn-action" @click="triggerDamageCard()" :disabled="loadingEvent">
          <bx-Icon icon="ant-design:security-scan-filled" size="xxl" />
          <div> Trigger Next Damage Round </div>
        </button>
      </section>

      <section>
        <Transition mode="out-in">
          <div v-if="loadingEvent">
            <ScanningShip />
          </div>
          <div v-else>
            <div v-if="currentDamageEvent && appStore.round >= 0">
              <BasicDamageEvent :damage="currentDamageEvent" @clickroom="onClickRoom" />
            </div>
            <div v-if="appStore.round > appStore.finalRound">
              <FinalHullBreach />
            </div>
          </div>
        </Transition>
      </section>
    </article>
  </main>
</template>

<script setup>
import { onBeforeMount, ref } from "@vue/runtime-core"
import { useAppStore } from '@/stores/app'
import { useRouter } from 'vue-router'
import { buildDamageEventsDeck } from '@/lib/BuildEventsDeck'
import BasicDamageEvent from '@/components/BasicDamageEvent.vue'
import FinalHullBreach from '@/components/FinalHullBreach.vue'
import ScanningShip from '@/components/ScanningShip.vue'
import HeaderApp from '@/components/HeaderApp.vue'
import { Howl } from 'howler';

//// DATA ////////////////////////
const appStore = useAppStore()
const router = useRouter()
const currentDamageEvent = ref(null)
const loadingEvent = ref(false)
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

/**
 * 
 * @param {Object} { id: 1, name: 'CREW QUARTERS', damagedInTurn: false, fixed: false } 
 */
function onClickRoom (room) {
  appStore.selectedRoom = room
  router.push('/room')
}

//// LIFECYCLE HOOKS ////////////////////////
onBeforeMount(() => buildDamageEventsDeck())
</script>