<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <div class="about-content about-profile">
    <h2 class="about-title">{{ t('resume.profilTitle') }}</h2>
    <div class="about-text">
      <p>{{ t('resume.profilText') }}</p>
    </div>
  </div>
</template>
