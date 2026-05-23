<template>
  <div class="service-badge" :class="badgeClass">
    <span class="name">{{ source.name }}</span>
    <span class="type">{{ label }}</span>
    <a v-if="source.web_url" :href="source.web_url" target="_blank">Watch →</a>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({ source: Object })

const label = computed(() => {
  if (props.source.type === 'sub' && props.source.isActive) return 'Included'
  if (props.source.type === 'sub')   return 'Subscription'
  if (props.source.type === 'free')  return 'Free'
  if (props.source.type === 'rent')  return `Rent $${props.source.price ?? '?'}`
  if (props.source.type === 'buy')   return `Buy $${props.source.price ?? '?'}`
  return props.source.type
})

const badgeClass = computed(() => ({
  'is-active': props.source.isActive,
  'is-free':   props.source.type === 'free',
  'is-rent':   props.source.type === 'rent',
  'is-buy':    props.source.type === 'buy',
}))
</script>
