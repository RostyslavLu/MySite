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
  <button class="header-btn" @click="action">
    {{ titleBtn }}
  </button>
</template>

<style scoped>
.header-btn {
  padding: var(--space-s) var(--space-lg);
  background-color: var(--main-color-dark);
  color: var(--main-color-light);
  border: none;
  border-radius: var(--space-lg);
  cursor: pointer;
}

</style>
