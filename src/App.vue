<template>
  <nav>
    <RouterLink to="/">Search</RouterLink>
    <RouterLink to="/subscriptions">Subscriptions</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>

<script setup>
import { RouterView, RouterLink } from 'vue-router'
</script>
