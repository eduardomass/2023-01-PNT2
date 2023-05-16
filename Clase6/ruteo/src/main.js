import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from 'axios'
import {createRouter, createWebHistory} from 'vue-router'

import './assets/main.css'

import App from './App.vue'

import Index from './components/views/Index.vue'
import Usuarios from './components/views/usuarios.vue'
import UserList from './components/views/UserList.vue'
import UserDetail from './components/views/UserDetail.vue'
import Personaje from './components/views/Personaje.vue'
import Login from './components/views/login.vue'


axios.defaults.baseURL = 'https://6448719ce7eb3378ca2eb11b.mockapi.io'

const routes = [
    { path : '/' , component : Index}, 
    // { path : '/usuarios' , component : Usuarios}, 
    { path: '/users', component: UserList },
    { path: '/users/:id', component: UserDetail },
    { path : '/login' , component : Login}, 
    { path : '/personaje/:id' , component : Personaje}, 
]

const router = createRouter(
    {
        history : createWebHistory(),
        routes
    }
);
const pinia = createPinia()

createApp(App).use(pinia).use(router).mount('#app')
