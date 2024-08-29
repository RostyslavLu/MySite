<script setup>
import { defineProps } from 'vue'

defineProps({
  message: {
    type: String
  }
})
</script>

<template>
  <!-- Input error template -->
  <div v-show="message" class="input-error">
    <p>
      {{ message }}
    </p>
  </div>
</template>
