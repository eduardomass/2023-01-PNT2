import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router'
import Home from './views/Home.vue'
import Personajes from './views/Personajes.vue'
import Personaje from './views/Personaje.vue'
import './assets/main.css'


const routes = [
    { path: '/', component: Home },
    { path: '/personajes', component: Personajes },
    { path: '/personaje/:id', component: Personaje },
  ]

  const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
  })
 

 createApp(App).use(router).mount('#app')
