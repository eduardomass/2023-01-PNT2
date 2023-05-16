import { defineStore } from 'pinia'
import axios from 'axios'
import { promises } from 'dns'

export const useUserStore = defineStore('user', {
  state: () => ({
    users: [],
    currentUser: null,
  }),

  getters: {
    getUsers() {
      return this.users
    },

    getUserById() {
      return (id) => this.users.find((user) => user.id === id)
    }
  }, 

  actions: {
    async fetchUsers() {
      try {
        const response = await axios.get('https://6448719ce7eb3378ca2eb11b.mockapi.io/users')
        this.users = response.data
      } catch (error) {
        console.error('Error fetching users:', error)
      }
    },

    async fetchUserById(id) {
      try {
        const response = await axios.get(`https://6448719ce7eb3378ca2eb11b.mockapi.io/users/${id}`)
        this.currentUser = response.data
      } catch (error) {
        console.error(`Error fetching user with id ${id}:`, error)
      }
    },

    async createUser(newUser) {
      try {
        const response = await axios.post('https://6448719ce7eb3378ca2eb11b.mockapi.io/users', newUser)
        this.users.push(response.data)
      } catch (error) {
        console.error('Error creating user:', error)
      }
    },

    async updateUser(updatedUser) {
      try {
        const response = await axios.put(`https://6448719ce7eb3378ca2eb11b.mockapi.io/users/${updatedUser.id}`, updatedUser)
        const index = this.users.findIndex((user) => user.id === updatedUser.id)
        this.users[index] = response.data
      } catch (error) {
        console.error(`Error updating user with id ${updatedUser.id}:`, error)
      }
    },

    async deleteUser(id) {
      try {
        await axios.delete(`https://6448719ce7eb3378ca2eb11b.mockapi.io/users/${id}`)
        this.users = this.users.filter((user) => user.id !== id)
      } catch (error) {
        console.error(`Error deleting user with id ${id}:`, error)
      }
    },
  },
})
