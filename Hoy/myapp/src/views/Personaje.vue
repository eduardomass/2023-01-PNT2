<script setup>
import { useRoute, useRouter } from 'vue-router'    
const router = useRouter()
const route = useRoute()

const id = route.params.id.toString();
alert(id)
</script>
<template>
    <h1>Estas dentro de personaje!!!</h1>
   
</template>