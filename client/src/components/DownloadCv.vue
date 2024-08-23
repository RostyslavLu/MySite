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
  link.download = 'cv.pdf'
  link.click()
}
</script>

<template>
  <div class="download-cv-container">
    <button class="download-cv-button" @click="downloadCv">
      <FontAwesomeIcon :icon="faDownload" />
      <p>{{ titleDownload }}</p>
    </button>
  </div>
</template>

<style scoped>
.download-cv-container {
  display: flex;
  justify-content: center;
  margin-top: var(--space-lg);
}

.download-cv-button {
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: var(--main-color-dark);
  color: var(--main-color-light);
  border: none;
  cursor: pointer;
}

.download-cv-button p {
  margin-left: var(--space-xs);
}
</style>
