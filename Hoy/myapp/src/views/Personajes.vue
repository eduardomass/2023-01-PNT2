<script setup>
import { useRoute, useRouter } from 'vue-router'    
const router = useRouter()
function goTo(id)
{
    debugger;
    router.push(
    {
        path : "/personaje/" +id
    } ) ;
}
</script>
<template>
    <h1>Personajes!!!</h1>
    <table>
        <tr><td>Id</td><td>Nombre</td></tr>
        <tr>
            <td><a class="nav-link active" href="/Usuario/1">Active</a></td>
            <td>Pedro</td>
        </tr>
        <tr>
            <td><a class="nav-link active" @click="goTo(6)">Active</a></td>
            <td>Carlos</td>
        </tr>
        <tr><td>3</td><td>Saul</td></tr>
        <tr><td>4</td><td>Cacho</td></tr>
    </table>
</template>