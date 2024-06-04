<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <div class="experience-container">
    <h3 class="experience-title">{{ t('resume.experienceItems[0].title') }}&nbsp;|&nbsp;{{ t('resume.experienceItems[0].company') }}</h3>
    <p>{{ t('resume.experienceItems[0].date') }}</p>
    <ul class="experience-task-list">
      <li class="experience-task-list-item">{{ t('resume.experienceItems[0].taskDescription[0]') }}</li>
      <li class="experience-task-list-item">{{ t('resume.experienceItems[0].taskDescription[1]') }}</li>
      <li class="experience-task-list-item">{{ t('resume.experienceItems[0].taskDescription[2]') }}</li>
      <li class="experience-task-list-item">{{ t('resume.experienceItems[0].taskDescription[3]') }}</li>
    </ul>
  </div>
</template>
