<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGlobe, faVideo } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLaravel, faPhp, faJs, faVuejs } from '@fortawesome/free-brands-svg-icons'
import { defineProps, ref } from 'vue'
import Modal from './Modal.vue'

const openModal = ref(false)

defineProps({
  img: {
    type: String,
    required: false
  },
  alt: {
    type: String,
    required: false
  },
  title: {
    type: String,
    required: false
  },
  description: {
    type: String,
    required: false
  },
  videoFile: {
    type: String,
    required: false
  }
})
</script>

<template>
  <div class="project-card">
    <figure class="project-card-image">
      <img :src="img" :alt="alt" loading="lazy" />
    </figure>
    <div class="project-card-info">
      <h2>{{ title }}</h2>
      <p> {{ description }}</p>
      <div class="project-card-links">
        <a href="https://app-vino.ca/" target="_blank" title="app site">
          <FontAwesomeIcon :icon="faGlobe" />
        </a>
        <a href="https://github.com/RostyslavLu/app_vino" target="_blank" title="code GitHub">
          <FontAwesomeIcon :icon="faGithub" />
        </a>
        <button class="project-card-links-btn" title="presentation video" @click="openModal=true">
          <FontAwesomeIcon :icon="faVideo" />
        </button>
        <Teleport to="body">
          <Modal :show="openModal" @close="openModal=false">
            <template #header>
              <h3>{{ title }}</h3>
            </template>
            <template #body>
              <video
                width="100%"
                height="auto"
                controls
                controlslist="nodownload nofullscreen noremoteplayback"
                autoplay
                >
                <source :src="videoFile" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </template>
          </Modal>
        </Teleport>
      </div>
      <div class="project-card-tech">
        <div title="PHP">
          <FontAwesomeIcon :icon="faPhp" />
        </div>
        <div title="Laravel">
          <FontAwesomeIcon :icon="faLaravel" />
        </div>
        <div title="JavaScript">
          <FontAwesomeIcon :icon="faJs" />
        </div>
        <div title="VueJS">
          <FontAwesomeIcon :icon="faVuejs" />
        </div>
      </div>
    </div>
  </div>
</template>
