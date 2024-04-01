<script setup>
import { ref } from 'vue'
import AppLogo from '@/components/AppLogo.vue'
const toggleMenu = ref(false)
</script>

<template>
  <nav id="main-navigation">
    <div class="main-navigation-static">
      <router-link to="/" aria-label="Home-link">
        <AppLogo />
        </router-link>
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
