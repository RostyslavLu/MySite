<script setup>
import { defineProps } from 'vue'

defineProps({
  taskDescriptionItem: {
    type: String,
    required: false
  }
})
</script>

<template>
  <li class="experience-task-list-item">{{ taskDescriptionItem }}</li>
</template>
