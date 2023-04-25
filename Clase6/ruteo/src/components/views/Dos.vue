<script setup>
import {useRoute} from 'vue-router'
const route = useRoute()
const uno = route.params.uno.toString()
const dos = route.params.dos.toString()
</script>
<template>
    <h1>
        {{ uno }} / {{ dos }}
        </h1>
        
</template>
<style scoped>
</style>