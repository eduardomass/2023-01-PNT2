<script setup>
</script>

<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <router-link class="navbar-brand" to="/">Index</router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
          <li class="nav-item active"><router-link class="nav-link" to="/">Index</router-link></li>
          <li class="nav-item"><router-link class="nav-link"  to="/login">Login</router-link></li>
          <li class="nav-item"><router-link class="nav-link"  to="/usuarios">Usuarios</router-link></li>
          <li class="nav-item"><router-link class="nav-link"  to="/doctores">Doctores</router-link></li>
    </ul>
  </div>
</nav>
  

  <!-- Contenido principal -->
  <div class="container" style="margin-top:70px; margin-bottom:60px;">
    <RouterView></RouterView>
  </div>

  <!-- Footer -->
  <footer class="footer navbar-fixed-bottom">
    <div class="container">
      <p class="text-muted">Derechos reservados © 2023</p>
    </div>
  </footer>


</template>

<style scoped>
</style>
