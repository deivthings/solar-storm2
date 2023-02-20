<template>
  <div class="card-event">
    <h3 class="text-center mb-5">
      Exit from the current game. Are you sure ?
    </h3>
    <div class="flex justify-evenly">
      <button @click="$emit('cancel')"> Cancel </button>
      <button class="ok" @click="$emit('exit')"> Yes </button>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.card-event {
  margin: 0 auto;
  border: 2px solid var(--color-primary);
  border-radius: 20px;
  padding: 3rem;
  width: clamp(300px, 60%, 500px);
  background-color: rgba(0, 0, 0, .5);
  box-shadow: 1px 1px 10px 1px var(--color-primary);
}

button {
  background-color: rgba(35, 167, 207, .2);
  padding: 1rem 1.5rem;
  border-radius: 10px;
}
</style>