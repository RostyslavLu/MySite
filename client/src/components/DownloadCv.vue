<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { defineProps } from 'vue'

defineProps({
  titleDownload: {
    type: String,
    required: false
  }
})

const downloadCv = () => {
  const link = document.createElement('a')
  link.href = '@/assets/doc/CV - Rostyslav Luchyshyn.pdf'
  link.download = 'CV.pdf'
  link.click()
}
</script>

<template>
  <!-- Download CV button component -->
  <div class="download-cv-container">
    <button class="download-cv-button" @click="downloadCv">
      <FontAwesomeIcon :icon="faDownload" />
      <p>{{ titleDownload }}</p>
    </button>
  </div>
</template>
