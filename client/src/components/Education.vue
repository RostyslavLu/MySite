<script setup>
import { defineProps } from 'vue'
import EducationList from '@/components/EducationList.vue'

defineProps({
  titleEducation: {
    type: String,
    required: false
  }
})
</script>

<template>
  <div class="about-content about-education">
    <h2 class="about-title">{{ titleEducation }}</h2>
    <div class="about-text">
      <EducationList />
    </div>
  </div>
</template>
