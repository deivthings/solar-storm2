<template>

  <article class="home-dialog">
    <section class="card-event">
      <bx-Icon icon="mdi:shield-sun-outline" size="xxl"></bx-Icon>
      <h1 class="gametitle mb-8 text-2xl">SOLAR STORM DAMAGE APP</h1>
      <button class="btn-action-green mb-4" @click="$router.push('/gamesetup')">NEW GAME</button>
      <a 
        href="https://boardgamegeek.com/boardgame/274037/solar-storm" 
        class="block hover:bg-[rgba(0,0,0,0.5)] p-5 rounded-3xl" 
        target="_blank">
          SOLAR STORM ON THE BGG
      </a>
    </section>
  </article>
</template>

<script setup>

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
  padding: 2rem;
  width: clamp(300px, 60%, 500px);
  background-color: rgba(0, 0, 0, .5);
  box-shadow: 1px 1px 10px 1px var(--color-primary);
}
</style>