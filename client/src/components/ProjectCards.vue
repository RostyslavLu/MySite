<script setup>
import ProjectCard from './ProjectCard.vue'
import { useI18n } from 'vue-i18n'
import videoAppVino from '@/assets/video/app_vino_web.mp4' // import video file for the project App Vino
import videoPortfolio from '@/assets/video/portfolio_web.mp4' // import video file for the project Portfolio
import imageAppVino from '@/assets/img/photos/images-app-vino/img5.jpg' // import image file for the project App Vino
import imagePortfolio from '@/assets/img/photos/images-portfolio/img1.jpg' // import image file for the project Portfolio

const { t } = useI18n()
// Define the URLs and GitHub repositories for the projects
// - App Vino
const vinoUrl = 'https://app-vino.ca/'
const gitVino = 'https://github.com/RostyslavLu/app_vino.git'
// - Portfolio
const porfolioUrl = 'https://rostyslav.ca/'
const gitPortfolio = 'https://github.com/RostyslavLu/MySite.git'
</script>

<template>
  <!-- list of projects -->
  <div class="projects-container">
    <ProjectCard
      :siteUrl="vinoUrl"
      :gitProject="gitVino"
      :title="t('projects.projectItems[0].title')"
      :description="t('projects.projectItems[0].description')"
      :img="imageAppVino"
      :alt="t('projects.projectItems[0].alt')"
      :videoFile="videoAppVino"
      :tech="{ php: true, laravel: true, js: true, vuejs: true, html5: true, css3: true }"
    />
    <ProjectCard
      :siteUrl="porfolioUrl"
      :gitProject="gitPortfolio"
      :title="t('projects.projectItems[1].title')"
      :description="t('projects.projectItems[1].description')"
      :img="imagePortfolio"
      :alt="t('projects.projectItems[1].alt')"
      :videoFile="videoPortfolio"
      :tech="{ node: true, js: true, vuejs: true, html5: true, css3: true }"
    />
  </div>
</template>
