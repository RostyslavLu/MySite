<script setup>
import { useI18n } from 'vue-i18n'
import EducationList from '@/components/EducationList.vue'

const { t } = useI18n()
</script>

<template>
  <div class="about-content about-education">
    <h2 class="about-title">{{ t('resume.educationTitle') }}</h2>
    <div class="about-text">
      <EducationList />
    </div>
  </div>
</template>
