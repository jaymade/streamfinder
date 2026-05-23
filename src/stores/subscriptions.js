import { defineStore } from 'pinia'

const DEFAULT_SERVICES = [
  { id: 'netflix',   name: 'Netflix',     active: false },
  { id: 'disney',    name: 'Disney+',     active: false },
  { id: 'appletv',   name: 'Apple TV+',   active: false },
  { id: 'peacock',   name: 'Peacock',     active: false },
  { id: 'hulu',      name: 'Hulu',        active: false },
  { id: 'max',       name: 'Max',         active: false },
  { id: 'prime',     name: 'Prime Video', active: false },
  { id: 'paramount', name: 'Paramount+',  active: false },
]

export const useSubscriptionStore = defineStore('subscriptions', {
  state: () => ({
    services: JSON.parse(localStorage.getItem('sf_services')) ?? DEFAULT_SERVICES
  }),
  getters: {
    activeServices: (s) => s.services.filter(svc => svc.active),
    activeIds: (s) => s.services.filter(svc => svc.active).map(svc => svc.id)
  },
  actions: {
    toggleService(id) {
      const svc = this.services.find(s => s.id === id)
      if (svc) { svc.active = !svc.active; this._save() }
    },
    removeService(id) {
      this.services = this.services.filter(s => s.id !== id)
      this._save()
    },
    addService(name) {
      const id = name.toLowerCase().replace(/\s+/g, '_')
      this.services.push({ id, name, active: true })
      this._save()
    },
    _save() {
      localStorage.setItem('sf_services', JSON.stringify(this.services))
    }
  }
})
