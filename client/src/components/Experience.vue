<script setup>
import { defineProps } from 'vue'
import ExperienceList from '@/components/ExperienceList.vue'
defineProps({
  titleExperience: {
    type: String,
    required: false
  }
})
</script>

<template>
  <div class="about-content about-experience">
    <h2 class="about-title">{{ titleExperience }}</h2>
    <div class="about-text">
      <ExperienceList />
    </div>
  </div>
</template>
