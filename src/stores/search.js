import { defineStore } from 'pinia'
import { searchTitles } from '../services/tmdb'
import { getStreamingAvailability, sortSources } from '../services/watchmode'
import { useSubscriptionStore } from './subscriptions'

export const useSearchStore = defineStore('search', {
  state: () => ({
    query: '',
    results: [],
    selectedTitle: null,
    sources: [],
    loading: false,
    error: null
  }),

  actions: {
    async search(query) {
      this.query = query
      this.results = []
      this.sources = []
      this.selectedTitle = null
      this.loading = true
      this.error = null

      try {
        this.results = await searchTitles(query)
      } catch (e) {
        this.error = 'Search failed. Check your TMDB API key.'
      } finally {
        this.loading = false
      }
    },

    async selectTitle(title) {
      this.selectedTitle = title
      this.sources = []
      this.loading = true
      this.error = null

      try {
        const subStore = useSubscriptionStore()
        const raw = await getStreamingAvailability(title.watchmode_id)
        this.sources = sortSources(raw, subStore.activeIds)
      } catch (e) {
        this.error = 'Could not load streaming sources.'
      } finally {
        this.loading = false
      }
    },

    clear() {
      this.query = ''
      this.results = []
      this.selectedTitle = null
      this.sources = []
      this.error = null
    }
  }
})
