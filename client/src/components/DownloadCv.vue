<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

</script>

<template>
  <div class="download-cv-container">
    <button class="download-cv-button" @click="downloadCv">
      <FontAwesomeIcon :icon="faDownload" />
      <p>Download CV</p>
    </button>
  </div>
</template>
