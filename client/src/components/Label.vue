<script setup>
import { ref, defineProps } from 'vue'

defineProps({
  label: {
    type: String,
    required: true
  }
})

const name = ref('')

</script>

<template>
  <label :for="name">{{ label }}</label>
</template>
