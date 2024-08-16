<script setup>
import { defineProps } from 'vue'

defineProps({
  titleEducationItem: {
    type: String,
    required: false
  },
  school: {
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
  <div class="education-item">
    <h3 class="education-title">{{ titleEducationItem }}</h3>
    <p>{{ school }}</p>
    <p>{{ date }}</p>
  </div>
</template>
