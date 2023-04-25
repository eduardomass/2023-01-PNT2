<script>
export default {
  data() {
    return {
      count: 0
    }
  },
  methods:
  {
    saludar(){
        alert('hola ' + this.count)
    }
  }
}
</script>
<template>
 <button @click="count++">You clicked me {{ count }} times.</button>
 <button @click="saludar">Hola!</button>
</template>
<style scoped>
</style>