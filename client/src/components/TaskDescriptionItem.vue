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
  <!-- Task description item template -->
  <li class="experience-task-list-item">{{ taskDescriptionItem }}</li>
</template>
