import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import GameSetup from '@/views/GameSetup.vue'
import Game from '@/views/Game.vue'
import ExitGame from '@/views/ExitGame.vue'
import RepairRoomEnergy from '@/views/RepairRoomEnergy.vue'


export const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_PUBLIC_BASE_PATH),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { requiresAuth: true },
    },

    {
      path: '/gamesetup',
      name: 'gamesetup',
      component: GameSetup,
      meta: { requiresAuth: true },
    },

    {
      path: '/game',
      name: 'game',
      component: Game,
      meta: { requiresAuth: true },
    },

    {
      path: '/exit',
      name: 'gamexit',
      component: ExitGame,
      meta: { requiresAuth: true },
    },

    {
      path: '/room',
      name: 'room',
      component: RepairRoomEnergy,
      meta: { requiresAuth: true },
    },

    /**
     * Instead of 404, we redirect to Home when route is not found
     * { path: '*', name: '404', component: NotFound }
     * EN VUE-ROUTER 4 - EL * YA NO SE PUEDE HACER Y DA ERROR PARA
     * QUE METAS UNA REGEX
     * https://router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes
     */
    /* {
      path: '*',
      redirect: { name: 'home' }
    } */
  ],
})