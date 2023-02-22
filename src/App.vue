<template>
  <section name="app-wrapper" style="min-height: 100vh;">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <router-view v-slot="{ Component }">
      <transition mode="out-in">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </transition>
    </router-view>
  </section>
</template>

<script setup>

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Kdam+Thmor+Pro&display=swap');

:root {
--color-primary: rgb(35, 167, 207);
--color-primary-dark: #1b90b4;
--color-secondary: #f7f7f7;
--color-error: #ff5252;
--color-core: rgba(217, 70, 239);

--font-primary: 'Kdam Thmor Pro', sans-serif;
}

* {
  box-sizing: border-box;
}
html,body {
  height: 100%;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

body {
  background-color: #27272A;
  background-color: black;
  /*background: black url("./assets/back-stars-4.jpg") no-repeat center center fixed;*/
  background-size: cover;

  min-height: 100vh;
}
#app {
  color: antiquewhite;
  min-height: 100%;
/*   font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}

.btn-action,
.btn-action-green {
  background-color: var(--color-primary);
  color: white;
  border: none;
  border-radius: 20px;
  padding: 1rem;
  font-size: 1.2em;
  font-family: 'Kdam Thmor Pro', sans-serif;
  font-weight: bold;
  cursor: pointer;
}

.card-event {
  margin: 0 auto;
  border: 2px solid var(--color-primary);
  border-radius: 20px;
  padding: 3rem;
  width: clamp(300px, 60%, 500px);
  background-color: rgba(0, 0, 0, .5);
  box-shadow: 1px 1px 10px 1px var(--color-primary);
}

.btn-action-green {
  background-color: rgb(16, 185, 129);
}

.btn-action:hover {
  background-color: var(--color-primary-dark);
}

h1 {
  font-size: 1.5rem;
}

h2 {
  font-size: 1.2rem;
}

.wrapper-game {
  min-height: 100vh;
}

h2,
h1 {
  font-family: 'Kdam Thmor Pro', sans-serif;
}
</style>
