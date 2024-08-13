<script setup>
import ScrollArrow from '@/components/ScrollArrow.vue'
import ProjectCards from '@/components/ProjectCards.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <main>
    <section class="page-container">
      <h1>{{ t('navigation.projects') }}</h1>
      <ProjectCards />
    </section>
    <ScrollArrow />
  </main>
</template>
