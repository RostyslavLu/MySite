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

<style scoped>
[id="main-navigation"] {
  position: sticky;
}
[id="main-navigation"] button {
  display: none;
}
@media screen and (max-width: 968px) {
  [id="main-navigation"] {
    background-color: var(--main-color-dark);
    z-index: 10;
  }
  [id="main-navigation"] button {
    display: flex;
    background-color: var(--main-color-dark);
    color: var(--main-color-light);
    border: none;
    font-size: 1.5rem;
  }
  [id="main-navigation"] .main-navigation-links {
    display: none;
    flex-direction: column;
    position: absolute;
    justify-content: flex-start;
    top: 100px;
    right: 0;
    background-color: var(--main-color-dark);
    opacity: 0.85;
    width: 50%;
    padding: var(--space-lg);
    height: 100dvh;
  }
  [id="main-navigation"] .main-navigation-links.show {
    display: flex;
  }
  [id="main-navigation"] .main-navigation-links a {
    margin: var(--space-s) 0;
  }
  .main-navigation-links.show {
    animation: slideIn 600ms ease-in-out;
  }
  @keyframes slideIn {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }
}
</style>
