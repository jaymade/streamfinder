<template>
  <div class="subscriptions-view">
    <h2>My Subscriptions</h2>
    <p class="hint">Toggle the services you subscribe to. Results will show those first.</p>

    <ul class="service-list">
      <li v-for="svc in store.services" :key="svc.id">
        <label>
          <input
            type="checkbox"
            :checked="svc.active"
            @change="store.toggleService(svc.id)"
          />
          {{ svc.name }}
        </label>
        <button class="remove" @click="store.removeService(svc.id)">Remove</button>
      </li>
    </ul>

    <div class="add-service">
      <h3>Add a service</h3>
      <input
        v-model="newService"
        @keyup.enter="handleAdd"
        placeholder="Service name..."
        type="text"
      />
      <button @click="handleAdd">Add</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useSubscriptionStore } from '../stores/subscriptions'

const store = useSubscriptionStore()
const newService = ref('')

function handleAdd() {
  if (!newService.value.trim()) return
  store.addService(newService.value.trim())
  newService.value = ''
}
</script>
