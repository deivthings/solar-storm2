<template>
  <div class="flex h-screen items-center">
    <DialogExit @cancel="$router.push('/game')" @exit="exitCurrentGame()"/>
  </div>
</template>

<script setup>
import { useAppStore } from '@/stores/app'
import { useRouter } from 'vue-router'
import { buildDamageEventsDeck } from '@/lib/BuildEventsDeck'
import DialogExit from '@/components/DialogExit.vue'

const appStore = useAppStore()
const router = useRouter()

function exitCurrentGame() {
  appStore.resetGame()
  buildDamageEventsDeck()
  router.push('/')
}
</script>
