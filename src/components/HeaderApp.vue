<template>
  <header class="game-header mb-8 red">
    <div class="flex items-center">
      <div class="text-center bg-error mr-3 rounded-lg p-1 cursor-pointer select-none hover:bg-errordark"
        @click="$router.push('/exit')">
        <bx-Icon icon="mdi:close-octagon-outline" class="text-light-50" size="xl" />
        <h6 class="text-xs" style="margin-top: -.5rem">exit</h6>
      </div>
    </div>
    <h1 v-if="appStore.round >= 0">
      <span class="mr-3">ROUND</span>
      <span class="badge">{{ appStore.round }}</span>
    </h1>
  </header>
</template>

<script setup>
import { useAppStore } from '@/stores/app'
const appStore = useAppStore()
</script>

<style scoped>
.badge {
  background-color: var(--color-primary);
  padding: .3rem .8rem;
  border-radius: 20px;
  font-size: 1.3rem;
}

.game-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: .8rem;
  background-color: rgba(0, 0, 0, .5);
  box-shadow: 1px 1px 10px 1px var(--color-primary);
}
</style>
