import { createApp } from 'vue'

import {createRouter, createWebHistory} from 'vue-router'
import './assets/main.css'

import App from './App.vue'
import Index from './components/views/Index.vue'
import Personajes from './components/views/Personajes.vue'
import Personaje from './components/views/Personaje.vue'
import Dos from './components/views/Dos.vue'

const routes = [
    { path : '/' , component : Index}, 
    { path : '/personajes' , component : Personajes}, 
    { path : '/personaje/:id' , component : Personaje}, 
    { path : '/dos/:uno/:dos' , component : Dos}, 
]

const router = createRouter(
    {
        history : createWebHistory(),
        routes
    }
);

createApp(App).use(router).mount('#app')
