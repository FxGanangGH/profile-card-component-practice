import { defineStore } from 'pinia'
import type { Profile } from './interface'

export const useProfileStore = defineStore('data', {
  state: () => ({
    user: {
      profile: {
        basic: {
          firstName: '',
          lastName: '',
          age: 0,
          city: ''
        },
        social: {
          followers: 0,
          likes: 0,
          photos: 0
        }
      }
    } as Profile
  }),
  actions: {
    async fill() {
      try {
        const module = await import('@/stores/data.json')
        const data = module.default as Profile

        this.user = data
      } catch (error) {
        console.error('Failed to load data: ', error)
      }
    }
  }
})
