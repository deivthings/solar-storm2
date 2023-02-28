<template>
  <div class="flex h-screen items-center">
    <DialogRepairEnergy  @close="$router.push('/game')" :selectedRoom="appStore.selectedRoom"/>
  </div>
</template>

<script setup>
import { useAppStore } from '@/stores/app'
import DialogRepairEnergy from '@/components/DialogRepairEnergy.vue'

const appStore = useAppStore()
</script>