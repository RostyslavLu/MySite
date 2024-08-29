<script setup>
import { defineProps } from 'vue'

defineProps({
  titleBtn: {
    type: String,
    required: false
  },
  action: {
    type: Function,
    required: false
  }
})
</script>

<template>
  <!-- Header button template -->
  <button class="header-btn" @click="action">
    {{ titleBtn }}
  </button>
</template>
