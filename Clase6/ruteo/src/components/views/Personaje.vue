<script setup>
import {useRoute} from 'vue-router'
const route = useRoute()
const id = route.params.id.toString()
</script>
<template>
    <h1>
        {{ id }}
        Este es mi personaje y me 
        falta el nombre o que se yo</h1>
    
        <router-link class="btn btn-primary" to="/personajes">Volver</router-link>
        
</template>
<style scoped>
</style>