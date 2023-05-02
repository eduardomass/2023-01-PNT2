
<script setup>
import { contadorStore } from '../../stores/contador';  
import { usuariosStore } from '../../stores/usuarios';  
const store = contadorStore()
usuariosStore().buscar();
store.cantidad = 1234;
</script>

<template>
    <h1>Ejercicio</h1>
    <h2>Cantidad del Store contador : {{ store.cantidad }}</h2>
    <div class="">
        <button value="Incrementar" @click="store.incrementar()">Incrementar</button>
        <button value="Decrementar" @click="store.decrementar()">Decrementar</button>
    </div>
    <ul>
        <li>Realizar un menu que tenga Indice / Personajes</li>
        <li>Crear un indice donde me de la bienvenida y sea lindo con bootstrap o lo que deseen</li>
        <li>Crear una vista de Personajes que muestre en una tabla, cada personaje de la APi de rick and mortye (al menos los primeros 10)</li>
        <li>Poder navegar a ver uno de los peronajes y que muestre todas sus propiedades</li>
        <li>Hacer otro link que sea location donde muetrse todas las locaciones en una tabla</li>
        <li>Poder ver los datos con un link a cada renglon</li>
        <li>Desde el Personaje, poder navegar al detalle de la location!</li>
    </ul>
</template>

<style scoped>
</style>
