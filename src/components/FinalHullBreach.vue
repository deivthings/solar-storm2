<template>
  <h1 class="text-center font-bold text-error">HULL BREACH</h1>
  <h2 class="w-2/3 mx-auto my-0 mb-6 text-center text">On player turn phase three, roll a dice and discard resource cards</h2>
  <div class="card-event">
    <img class="animate__animated animate__pulse animate__infinite" src="../assets/hullbreach.png" alt="hullbreach">
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
</style>