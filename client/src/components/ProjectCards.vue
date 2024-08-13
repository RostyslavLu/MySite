<script setup>
import ProjectCard from './ProjectCard.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <div class="projects-container">
    <ProjectCard
      :title="t('projects.projectItems[0].title')"
      :description="t('projects.projectItems[0].description')"
      :img="t('projects.projectItems[0].media')"
      :alt="t('projects.projectItems[0].alt')"
      />
  </div>
</template>
