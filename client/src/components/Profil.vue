<script setup>
import { defineProps } from 'vue'
import { useI18n } from 'vue-i18n'

defineProps({
  titleProfil: {
    type: String,
    required: false
  }
})
const { t } = useI18n()
</script>

<template>
  <!-- Profil component -->
  <div class="about-content about-profile">
    <h2 class="about-title">{{ titleProfil }}</h2>
    <div class="about-text">
      <p>{{ t('resume.profilText') }}</p>
    </div>
  </div>
</template>
