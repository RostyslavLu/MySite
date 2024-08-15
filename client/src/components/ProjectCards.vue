<script setup>
import ProjectCard from './ProjectCard.vue'
import { useI18n } from 'vue-i18n'
import videoAppVino from '@/assets/video/app-vino-web.mp4'
import imageAppVino from '@/assets/img/photos/images-app-vino/img5.jpg'
const { t } = useI18n()
</script>

<template>
  <div class="projects-container">
    <ProjectCard
      :title="t('projects.projectItems[0].title')"
      :description="t('projects.projectItems[0].description')"
      :img="imageAppVino"
      :alt="t('projects.projectItems[0].alt')"
      :videoFile="videoAppVino"
      />
  </div>
</template>
