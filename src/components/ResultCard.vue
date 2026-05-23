<template>
  <div class="result-card" @click="$emit('select', title)">
    <img v-if="title.poster" :src="title.poster" :alt="title.title" />
    <div v-else class="no-poster">No image</div>
    <div class="info">
      <h3>{{ title.title }}</h3>
      <p class="meta">{{ title.year }} · {{ title.media_type }}</p>
      <p class="overview">{{ title.overview }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({ title: Object })
defineEmits(['select'])
</script>
