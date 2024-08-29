<script setup>
import { defineProps } from 'vue'

defineProps({
  titleExperienceItem: {
    type: String,
    required: false
  },
  company: {
    type: String,
    required: false
  },
  date: {
    type: String,
    required: false
  }
})
</script>

<template>
  <!-- Experience list item component -->
  <div class="experience-item">
    <h3 class="experience-title">{{ titleExperienceItem }}&nbsp;|&nbsp;{{ company }}</h3>
    <p>{{ date }}</p>
    <ul class="experience-task-list">
      <slot></slot>
    </ul>
  </div>
</template>
