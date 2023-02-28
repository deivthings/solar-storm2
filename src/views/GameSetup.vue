<template>
  <article class="flex h-screen items-center">
    <section class="card-event">
      <header class="flex items-center justify-center mb-5">
        <bx-Icon icon="uil:sliders-v-alt" size="xl"/>
        <h1 class="ml-2 text-2xl">GAME SETUP</h1>
      </header>

      <main>
        <section class="mb-7">
          <header class="flex justify-between items-center mb-4">
            <h1> Rooms position</h1>
            <div @click="shuffleRooms" class="cursor-pointer"> 
              <bx-Icon icon="fluent:arrow-sync-circle-24-filled" class="text-fuchsia-500" /> 
            </div>
          </header>
          <ul class="matrix-rooms" v-auto-animate>
            <li v-for="(room, index) in appStore.rooms" :key="room.id" :class="['room', `room${index + 1}`]" >
              <h6 class="room-label">{{ room.name }}</h6>
            </li>
            <li class="room room-core">
              <h6 class="room-label">ENGINE CORE</h6>
            </li>
          </ul>
        </section>

        <button v-wave @click="$router.push('/game')" class="btn-action-green mb-4 my-0 mx-auto block">
          LET'S START
        </button>

        <!-- <section class="mb-7">
          Dificulty
        </section>

        <section>
          Sounds
        </section> -->
      </main>
    </section>
  </article>
</template>

<script setup>
import { useAppStore } from '@/stores/app'
import { useRouter } from 'vue-router'

const appStore = useAppStore()
const router = useRouter()

function shuffleRooms () {
  appStore.shuffleRoomsOrder()
}

</script>

<style scoped>
.matrix-rooms {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
}
.room {
  position: relative;
  background: #000;
  border-radius: 10px;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid var(--color-primary);
  padding: 0.3rem;
}

.room-label {
  /* font-size: .8rem; */
  text-align: center;
  font-size: clamp(.5rem, 2vw, .85rem);
}

.room1 { grid-area: 1 / 1 / 2 / 2; }
.room2 { grid-area: 1 / 2 / 2 / 3; }
.room3 { grid-area: 1 / 3 / 2 / 4; }
.room4 { grid-area: 2 / 1 / 3 / 2; }
.room5 { grid-area: 2 / 3 / 3 / 4; }
.room6 { grid-area: 3 / 1 / 4 / 2; }
.room7 { grid-area: 3 / 2 / 4 / 3; }
.room8 { grid-area: 3 / 3 / 4 / 4; }
</style>