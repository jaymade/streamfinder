<template>
  <div class="search-view">
    <div class="search-bar">
      <input
        v-model="query"
        @keyup.enter="handleSearch"
        placeholder="Search for a movie or show..."
        type="text"
      />
      <button @click="handleSearch" :disabled="store.loading">
        {{ store.loading ? 'Searching...' : 'Search' }}
      </button>
    </div>

    <p v-if="store.error" class="error">{{ store.error }}</p>

    <div v-if="store.results.length && !store.selectedTitle" class="results">
      <ResultCard
        v-for="title in store.results"
        :key="title.id"
        :title="title"
        @select="handleSelect"
      />
    </div>

    <div v-if="store.selectedTitle" class="detail">
      <button class="back" @click="store.clear()">← Back to results</button>

      <div class="title-header">
        <img v-if="store.selectedTitle.poster" :src="store.selectedTitle.poster" />
        <div>
          <h2>{{ store.selectedTitle.title }}</h2>
          <p class="year">{{ store.selectedTitle.year }} · {{ store.selectedTitle.media_type }}</p>
          <p class="overview">{{ store.selectedTitle.overview }}</p>
        </div>
      </div>

      <div v-if="store.loading" class="loading">Loading sources...</div>

      <div v-if="store.sources.length" class="sources">
        <h3>Where to watch</h3>
        <ServiceBadge
          v-for="source in store.sources"
          :key="source.source_id"
          :source="source"
        />
      </div>

      <p v-if="!store.loading && !store.sources.length" class="no-sources">
        No streaming sources found for this title.
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useSearchStore } from '../stores/search'
import ResultCard from '../components/ResultCard.vue'
import ServiceBadge from '../components/ServiceBadge.vue'

const store = useSearchStore()
const query = ref('')

async function handleSearch() {
  if (!query.value.trim()) return
  await store.search(query.value.trim())
}

async function handleSelect(title) {
  // Use watchmode_id from mock data directly, no lookup needed
  await store.selectTitle(title)
}
</script>
