<script setup>
import { useI18n } from 'vue-i18n'
import ExperienceList from '@/components/ExperienceList.vue'

const { t } = useI18n()
</script>

<template>
  <div class="about-content about-experience">
    <h2 class="about-title">{{ t('resume.experienceTitle') }}</h2>
    <div class="about-text">
      <ExperienceList />
    </div>
  </div>
</template>
