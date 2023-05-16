<script setup>
import {useRouter} from 'vue-router'
import { usuariosStore } from '../../stores/usuarios';  

import { contadorStore } from '../../stores/contador';  
const storeContador = contadorStore();

import { sessionStore } from '../../stores/session';  
const storeSession = sessionStore()

const store = usuariosStore()
const router = useRouter()
function navegar(id)
{
    router.push(
        {path : '/usuario/' + id}
    );
}
</script>
<template>
    <h1>Lista de Usuarios {{ storeContador.cantidad }}</h1>
    <h2>{{ storeSession.usuario }}</h2>
    <h3>{{ storeSession.getUserName }}</h3>
    <table>
        <tr>
            <td>1</td>
            <td>Ricky</td>
            <td><button type="button"
                @click="navegar(1)" 
                class="btn btn-danger">Ver</button></td>
        </tr>
        <tr>
            <td>2</td>
            <td>Morty</td>
            <td><button type="button" 
                @click="navegar(2)" 
                class="btn btn-danger">Ver</button></td>
        </tr>
    </table>
</template>
<style scoped>
</style>