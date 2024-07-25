<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <div class="education-container">
    <div class="education-item">
      <h3 class="education-title">{{ t('resume.educationItems[0].title') }}</h3>
      <p>{{ t('resume.educationItems[0].school') }}</p>
      <p>{{ t('resume.educationItems[0].date') }}</p>
    </div>
    <div class="education-item">
      <h3 class="education-title">{{ t('resume.educationItems[1].title') }}</h3>
      <p>{{ t('resume.educationItems[1].school') }}</p>
      <p>{{ t('resume.educationItems[1].date') }}</p>
    </div>
    <div class="education-item">
      <h3 class="education-title">{{ t('resume.educationItems[2].title') }}</h3>
      <p>{{ t('resume.educationItems[2].school') }}</p>
      <p>{{ t('resume.educationItems[2].date') }}</p>
    </div>
  </div>
</template>
