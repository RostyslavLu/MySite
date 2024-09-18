<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGlobe, faVideo, faDatabase } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLaravel, faPhp, faJs, faVuejs, faHtml5, faCss3, faNode, faWordpress, faBootstrap, faFigma, faDebian, faAws } from '@fortawesome/free-brands-svg-icons'
import { defineProps, onBeforeUnmount, onMounted, ref } from 'vue'
import Modal from './Modal.vue'
// modal state
const openModal = ref(false)

const videoRef = ref(null)
const handleOrientationChange = () => {
  if (window.screen.orientation.type.startsWith('landscape')) {
    if (videoRef.value && videoRef.value.requestFullscreen) {
      videoRef.value.requestFullscreen()
    }
  } else {
    if (document.fullscreenElement) {
      document.exitFullscreen()
    }
  }
}
// define props
defineProps({
  siteUrl: {
    type: String,
    required: true
  },
  gitProject: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  videoFile: {
    type: String,
    required: false
  },
  tech: {
    type: Object,
    required: false,
    default: () => ({
      php: false,
      laravel: false,
      js: false,
      vuejs: false,
      html5: false,
      css3: false,
      node: false,
      wordpress: false,
      bootstrap: false,
      figma: false,
      debian: false,
      aws: false,
      database: false
    })
  }
})
// expand description text
const isExpanded = ref(false)

const toggleExpanded = () => {
  isExpanded.value = !isExpanded.value
}
onMounted(() => {
  window.addEventListener('orientationchange', handleOrientationChange)
})
onBeforeUnmount(() => {
  window.removeEventListener('orientationchange', handleOrientationChange)
})
</script>

<template>
  <!-- project card template -->
  <div class="project-card">
    <figure class="project-card-image">
      <img :src="img" :alt="alt" loading="lazy" />
    </figure>
    <div class="project-card-info">
      <h2>{{ title }}</h2>
      <p :class="{'project-card-description': true, 'expanded': isExpanded}">
        {{ description }}
      </p>
      <span class="project-card-read-more" @click="toggleExpanded">
        {{ isExpanded ? 'Show less...' : 'Read more...' }}
      </span>
      <div class="project-card-links">
        <a :href="siteUrl" target="_blank" title="app site">
          <FontAwesomeIcon :icon="faGlobe" />
        </a>
        <a :href="gitProject" target="_blank" title="code GitHub">
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
                ref="videoRef"
                width="100%"
                height="auto"
                controls
                controlslist="nodownload"
                autoplay
                >
                <source
                  :src="videoFile"
                  type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </template>
          </Modal>
        </Teleport>
      </div>
      <div class="project-card-tech">
        <div v-if="tech.php" title="PHP">
          <FontAwesomeIcon :icon="faPhp" />
        </div>
        <div v-if="tech.laravel" title="Laravel">
          <FontAwesomeIcon :icon="faLaravel" />
        </div>
        <div v-if="tech.js" title="JavaScript">
          <FontAwesomeIcon :icon="faJs" />
        </div>
        <div v-if="tech.vuejs" title="Vue.js">
          <FontAwesomeIcon :icon="faVuejs" />
        </div>
        <div v-if="tech.html5" title="HTML5">
          <FontAwesomeIcon :icon="faHtml5" />
        </div>
        <div v-if="tech.css3" title="CSS3">
          <FontAwesomeIcon :icon="faCss3" />
        </div>
        <div v-if="tech.node" title="Node.js">
          <FontAwesomeIcon :icon="faNode" />
        </div>
        <div v-if="tech.wordpress" title="WordPress">
          <FontAwesomeIcon :icon="faWordpress" />
        </div>
        <div v-if="tech.bootstrap" title="Bootstrap">
          <FontAwesomeIcon :icon="faBootstrap" />
        </div>
        <div v-if="tech.figma" title="Figma">
          <FontAwesomeIcon :icon="faFigma" />
        </div>
        <div v-if="tech.debian" title="Debian">
          <FontAwesomeIcon :icon="faDebian" />
        </div>
        <div v-if="tech.aws" title="AWS">
          <FontAwesomeIcon :icon="faAws" />
        </div>
        <div v-if="tech.database" title="Database">
          <FontAwesomeIcon :icon="faDatabase" />
        </div>
      </div>
    </div>
  </div>
</template>
