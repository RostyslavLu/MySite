<template>
  <button @click="executeCaptcha" :disabled="loading" :class="{ 'checkbox-button': true, 'checked': checked }">
    <span class="checkbox"></span>
    {{ loading ? 'Validating...' : 'reCaptcha' }}
  </button>
</template>

<script setup>
import { ref, defineEmits } from 'vue'
import { useReCaptcha } from 'vue-recaptcha-v3'

const emit = defineEmits(['verified'])

const loading = ref(false)
const checked = ref(false)
const { executeRecaptcha, recaptchaLoaded } = useReCaptcha()

const executeCaptcha = async () => {
  loading.value = true
  await recaptchaLoaded()

  try {
    const token = await executeRecaptcha('action')
    emit('verified', token)
    checked.value = true
  } catch (error) {
    console.error('reCaptcha failed', error)
    checked.value = false
  } finally {
    loading.value = false
  }
}
</script>
