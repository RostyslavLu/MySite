<script setup>
import { useI18n } from 'vue-i18n'
import ExperienceList from '@/components/ExperienceList.vue'

const { t } = useI18n()
</script>

<template>
  <main>
    <section class="about-section">
      <h1 class="section-title">{{ t('navigation.cv') }}</h1>
      <div class="about-container">
        <div class="about-content about-profile">
          <h2 class="about-title">{{ t('resume.profilTitle') }}</h2>
          <div class="about-text"><p>{{ t('resume.profilText') }}</p></div>
        </div>
        <div class="about-content about-experience">
          <h2 class="about-title">{{ t('resume.experienceTitle') }}</h2>
          <div class="about-text">
            <ExperienceList />
          </div>
        </div>
        <div class="about-content about-education">
          <h2 class="about-title">{{ t('resume.educationTitle') }}</h2>
          <p class="about-text">{{ t('resume.educationText') }}</p>
        </div>
        <div class="about-content about-skills">
          <h2 class="about-title">{{ t('resume.skillsTitle') }}</h2>
          <div class="about-text">{{ t('resume.skillsText') }}</div>
        </div>
      </div>
    </section>
  </main>
</template>
