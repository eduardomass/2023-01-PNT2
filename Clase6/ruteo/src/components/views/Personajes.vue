<script setup>
import {useRouter} from 'vue-router'
const router = useRouter()

import { sessionStore } from '../../stores/session';  
const storeSession = sessionStore()

function navegar(id)
{
    router.push(
        {path : '/personaje/' + id}
    );
}
</script>
<template>
    <h1>Lista de Personajes</h1>
    <hr/>
    <div>
        {{ this.storeSession.usuario }}
    </div>
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