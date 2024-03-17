<script setup>
import { defineModel, ref } from 'vue'

const model = defineModel({
  type: String,
  required: true
})
const textarea = ref(null)

</script>

<template>
  <textarea
    class=""
    v-model="model"
    ref="textarea"
  />
</template>
