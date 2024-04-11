<script setup>
import AppLogo from '@/components/AppLogo.vue'
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'

</script>

<template>
  <nav id="main-navigation">
    <div class="main-navigation-static">
      <router-link to="/" aria-label="Home-link">
        <AppLogo />
      </router-link>
    </div>
    <div class="main-navigation-links">
      <router-link to="/projects">{{ $t('navigation.projects') }}</router-link>
      <router-link to="/resume">{{ $t('navigation.cv') }}</router-link>
      <router-link to="/photogallery">{{ $t('navigation.photogallery') }}</router-link>
      <router-link to="/contact">{{ $t('navigation.contact') }}</router-link>
      <LanguageSwitcher />
    </div>
  </nav>
  <router-view />
</template>
