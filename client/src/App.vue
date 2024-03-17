<script setup>
import { ref } from 'vue'

const toggleMenu = ref(false)
</script>

<template>
  <nav id="main-navigation">
    <div class="main-navigation-static">
      <router-link to="/">Rostyslav</router-link>
      <svg width="36" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
        <path fill-rule="evenodd"
          d="M12 2c-2.4 0-4.7.9-6.5 2.4a10.5 10.5 0 0 0-2 13.1A10 10 0 0 0 8.7 22c.5 0 .7-.2.7-.5v-2c-2.8.7-3.4-1.1-3.4-1.1-.1-.6-.5-1.2-1-1.5-1-.7 0-.7 0-.7a2 2 0 0 1 1.5 1.1 2.2 2.2 0 0 0 1.3 1 2 2 0 0 0 1.6-.1c0-.6.3-1 .7-1.4-2.2-.3-4.6-1.2-4.6-5 0-1.1.4-2 1-2.8a4 4 0 0 1 .2-2.7s.8-.3 2.7 1c1.6-.5 3.4-.5 5 0 2-1.3 2.8-1 2.8-1 .3.8.4 1.8 0 2.7a4 4 0 0 1 1 2.7c0 4-2.3 4.8-4.5 5a2.5 2.5 0 0 1 .7 2v2.8c0 .3.2.6.7.5a10 10 0 0 0 5.4-4.4 10.5 10.5 0 0 0-2.1-13.2A9.8 9.8 0 0 0 12 2Z"
          clip-rule="evenodd" />
      </svg>
      <svg width="36" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
        <path fill-rule="evenodd"
          d="M12.5 8.8v1.7a3.7 3.7 0 0 1 3.3-1.7c3.5 0 4.2 2.2 4.2 5v5.7h-3.2v-5c0-1.3-.2-2.8-2.1-2.8-1.9 0-2.2 1.3-2.2 2.6v5.2H9.3V8.8h3.2ZM7.2 6.1a1.6 1.6 0 0 1-2 1.6 1.6 1.6 0 0 1-1-2.2A1.6 1.6 0 0 1 6.6 5c.3.3.5.7.5 1.1Z"
          clip-rule="evenodd" />
        <path d="M7.2 8.8H4v10.7h3.2V8.8Z" />
      </svg>
    </div>
    <Transition name="main-nav">
      <div v-if="toggleMenu" class="main-navigation-links">
        <router-link to="/education">Education</router-link>
        <router-link to="/skill">Skills</router-link>
        <router-link to="/resume">Resume</router-link>
        <router-link to="/contact">Contact</router-link>
      </div>
    </Transition>
    <button v-if="toggleMenu" @click="toggleMenu = !toggleMenu" class="toggle-button" aria-label="close menu">
      <svg id="Calque_2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 100.4 102.47">
        <g id="Calque_1-2">
          <line x1="96.4" y1="6.6" x2="4" y2="98.47"
            style="fill:transparent; stroke:var(--main-color-light); stroke-linecap:round; stroke-miterlimit:10; stroke-width:8px;" />
          <line x1="96.4" y1="98.47" x2="4" y2="4"
            style="fill:transparent; stroke:var(--main-color-light); stroke-linecap:round; stroke-miterlimit:10; stroke-width:8px;" />
        </g>
      </svg>
    </button>
    <button v-if="!toggleMenu" @click="toggleMenu = !toggleMenu" class="toggle-button" aria-label="open menu">
      <svg id="Calque_2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 104.53 102.47">
        <g id="Calque_1-2">
          <line x1="6.06" y1="51.23" x2="100.53" y2="51.23"
            style="fill:transparent; stroke:var(--main-color-light); stroke-linecap:round; stroke-miterlimit:10; stroke-width:8px;" />
          <line x1="4" y1="98.47" x2="98.47" y2="98.47"
            style="fill:transparent; stroke:var(--main-color-light); stroke-linecap:round; stroke-miterlimit:10; stroke-width:8px;" />
          <line x1="6.06" y1="4" x2="100.53" y2="4"
            style="fill:transparent; stroke:var(--main-color-light); stroke-linecap:round; stroke-miterlimit:10; stroke-width:8px;" />
        </g>
      </svg>
    </button>
  </nav>
  <router-view />
</template>
