<script setup>
import { useI18n } from 'vue-i18n'
import Experience from '@/components/Experience.vue'
import Education from '@/components/Education.vue'
import Profil from '@/components/Profil.vue'
import Skills from '@/components/Skills.vue'
import ScrollArrow from '@/components/ScrollArrow.vue'

const { t } = useI18n()
</script>

<template>
  <main>
    <section class="page-container">
      <h1 class="section-title">{{ t('navigation.cv') }}</h1>
      <div class="about-container">
        <Profil />
        <Experience />
        <Education />
        <Skills />
      </div>
    </section>
    <ScrollArrow />
  </main>
</template>
