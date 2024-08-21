<script setup>
import { defineProps } from 'vue'
import SkillsItems from './SkillsItems.vue'
defineProps({
  titleSkills: {
    type: String,
    required: false
  }
})
</script>

<template>
  <div class="about-content about-skills">
    <h2 class="about-title">{{ titleSkills }}</h2>
    <div class="about-text">
      <SkillsItems />
    </div>
  </div>
</template>
