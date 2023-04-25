<script setup>
</script>

<template>
 <p>
    <!-- use the router-link component for navigation. -->
    <!-- specify the link by passing the `to` prop. -->
    <!-- `<router-link>` will render an `<a>` tag with the correct `href` attribute -->
    <router-link to="/">Go to Home</router-link>
    <router-link to="/personajes">Go to Personajes</router-link>
  </p>
  <RouterView/>

</template>

<style scoped>
</style>
