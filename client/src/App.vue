<script setup>
import AppLogo from '@/components/AppLogo.vue'
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'
import CookieConsent from './components/CookieConsent.vue'
import { ref } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

const showMenu = ref(false)
const toggleMenu = () => {
  showMenu.value = !showMenu.value
}
const closeMenu = () => {
  showMenu.value = false
}
</script>

<template>
<!-- Navigation -->
  <nav id="main-navigation">
      <router-link to="/" aria-label="Home-link">
        <AppLogo />
      </router-link>
      <button @click="toggleMenu" aria-label="Menu-button">
        <FontAwesomeIcon :icon="showMenu ? faXmark : faBars" />
      </button>
    <div class="main-navigation-links" :class="{ show: showMenu }">
      <router-link to="/projects" @click="closeMenu">{{ $t('navigation.projects') }}</router-link>
      <router-link to="/resume" @click="closeMenu">{{ $t('navigation.cv') }}</router-link>
      <router-link to="/contact" @click="closeMenu">{{ $t('navigation.contact') }}</router-link>
      <LanguageSwitcher />
    </div>
  </nav>
  <router-view />
  <!-- Cookie Consent -->
  <CookieConsent />
</template>
