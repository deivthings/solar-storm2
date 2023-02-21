<template>
  <div>
    <DialogExit @cancel="$router.push('/game')" @exit="exitCurrentGame()"/>
  </div>
</template>

<script setup>
import { useAppStore } from '@/stores/app'
import { useRouter } from 'vue-router'
import DialogExit from '@/components/DialogExit.vue'

const appStore = useAppStore()
const router = useRouter()

function exitCurrentGame() {
  // appStore.resetGame()
  // this.currentDamageEvent = null
  // this.exitDialog = false
  // buildDamageEventsDeck()
  console.log('ahout exit')
  router.push('/')
}

</script>

<style scoped>

</style>