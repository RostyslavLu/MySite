<script setup>
import { useI18n } from 'vue-i18n'
import { defineProps } from 'vue'
defineProps({
  titleSkills: {
    type: String,
    required: false
  }
})
const { t } = useI18n()
</script>

<template>
  <div class="about-content about-skills">
    <h2 class="about-title">{{ titleSkills }}</h2>
    <div class="about-text">{{ t('resume.skillsText') }}</div>
  </div>
</template>
