<script setup>
import { defineModel, ref, defineProps } from 'vue'

const model = defineModel({
  type: String,
  required: true
})
const props = defineProps({
  id: { type: String },
  placeholder: { type: String },
  type: { type: String }
})
const input = ref(null)

</script>

<template>
  <!-- Input text template -->
  <input
    class=""
    v-model="model"
    ref="input"
    :placeholder="props.placeholder"
    :type="type"
    :id="id"
  />
</template>
