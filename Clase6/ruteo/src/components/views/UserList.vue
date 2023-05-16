<template>
    <div>
      <h2>User List</h2>
      <ul>
        <li v-for="user in users" :key="user.id">
          <router-link :to="`/users/${user.id}`">{{ user.user }}</router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
import { useUserStore } from '../../stores/users';  
import { onMounted, computed } from 'vue'

export default {
  setup() {
    const userStore = useUserStore()

    // Llamar al método fetchUsers al iniciar la vista
    onMounted(() => {
      userStore.currentUser = null
      userStore.fetchUsers()
      
    })

    //const users = userStore.getUsers
    const users = computed(() => userStore.getUsers)

    return {
      users,
    }
  },
}
</script>

  