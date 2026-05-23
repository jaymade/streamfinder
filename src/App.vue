<template>
  <nav>
    <RouterLink to="/">Search</RouterLink>
    <RouterLink to="/subscriptions">Subscriptions</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
  <footer>
    <span class="built">Built with</span>
    <div class="logos">
      <a href="https://vuejs.org" target="_blank" title="Vue 3">
        <img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg" alt="Vue 3" />
        <span>Vue 3</span>
      </a>
      <a href="https://vitejs.dev" target="_blank" title="Vite">
        <img src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg" alt="Vite" />
        <span>Vite</span>
      </a>
      <a href="https://pinia.vuejs.org" target="_blank" title="Pinia">
        <img src="https://pinia.vuejs.org/logo.svg" alt="Pinia" />
        <span>Pinia</span>
      </a>
      <a href="https://www.javascript.com" target="_blank" title="JavaScript">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="JavaScript" />
        <span>JavaScript</span>
      </a>
      <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" title="CSS3">
        <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" alt="CSS3" />
        <span>CSS3</span>
      </a>
      <a href="https://pages.github.com" target="_blank" title="GitHub Pages">
        <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="GitHub Pages" />
        <span>GitHub Pages</span>
      </a>
      <a href="https://www.watchmode.com" target="_blank" title="Watchmode API">
        <img src="https://www.watchmode.com/favicon.ico" alt="Watchmode" />
        <span>Watchmode</span>
      </a>
      <a href="https://www.omdbapi.com" target="_blank" title="OMDb API">
        <img src="https://www.omdbapi.com/favicon.ico" alt="OMDb" />
        <span>OMDb</span>
      </a>
    </div>
  </footer>
</template>

<script setup>
import { RouterView, RouterLink } from 'vue-router'
</script>
