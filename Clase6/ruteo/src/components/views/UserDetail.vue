<template>
    <div>
      <h2>User Detail</h2>
      <div v-if="user">
        <input type="text" v-model="user.user">
        <!-- <p>User: {{ user.user }}</p> -->
        <p>Password: {{ user.password }}</p>
        <button @click="deleteUser">Delete</button>
        <button @click="updateUser">Update</button>
      </div>
    </div>
  </template>
  
  <script>
  import { useUserStore } from '../../stores/users';  
  import { useRouter } from 'vue-router'
  import {useRoute} from 'vue-router'
  import {onMounted, computed} from 'vue'
  
  
  export default {
    setup() {
      const userStore = useUserStore()
      const router = useRouter()
      const route = useRoute()
      const userId = route.params.id.toString()
      
      userStore.fetchUserById(userId)
      // const user = userStore.currentUser

      const user = computed(() => userStore.currentUser)

      const updateUser = async () => {
        await userStore.updateUser(userStore.currentUser)
        // router.push('/users')
      }

    const deleteUser = async () => {
        await userStore.deleteUser(userId)
        router.push('/users')
      }

      
  
      return {
        user,
        deleteUser,
        updateUser
      }
    },
  }
  </script>
  