<script setup>
import AppLogo from '@/components/AppLogo.vue'
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'
import CookieConsent from './components/CookieConsent.vue'

</script>

<template>
  <nav id="main-navigation">
      <router-link to="/" aria-label="Home-link">
        <AppLogo />
      </router-link>
    <div class="main-navigation-links" :class="{ show: showMenu }">
      <router-link to="/projects">{{ $t('navigation.projects') }}</router-link>
      <router-link to="/resume">{{ $t('navigation.cv') }}</router-link>
      <router-link to="/contact">{{ $t('navigation.contact') }}</router-link>
      <LanguageSwitcher />
    </div>
  </nav>
  <router-view />
  <CookieConsent />
</template>

<style scoped>

</style>
