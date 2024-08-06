<script setup>
import ScrollArrow from '@/components/ScrollArrow.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLaravel, faPhp, faJs, faVuejs } from '@fortawesome/free-brands-svg-icons'

</script>

<template>
  <main>
    <section class="page-container">
      <h1>Projects</h1>
      <div class="projects-container">
        <div class="project-card">
          <figure class="project-card-image">
            <img src="../assets/img/photos/images-app-vino/img5.jpg" alt="Project Title" loading="lazy" />
          </figure>
          <div class="project-card-info">
            <h2>Project Title</h2>
            <p>Project Description</p>
            <div class="project-card-links">
              <a href="https://app-vino.ca/" target="_blank">
                <FontAwesomeIcon :icon="faGlobe" />
              </a>
              <a href="https://github.com/RostyslavLu/app_vino" target="_blank">
                <FontAwesomeIcon :icon="faGithub" />
              </a>
            </div>
            <div class="product-card-tech">
              <span>
                <FontAwesomeIcon :icon="faPhp" />
              </span>
              <span>
                <FontAwesomeIcon :icon="faLaravel" />
              </span>
              <span>
                <FontAwesomeIcon :icon="faJs" />
              </span>
              <span>
                <FontAwesomeIcon :icon="faVuejs" />
              </span>
            </div>
          </div>
        </div>
        <div class="project-card">
          <figure class="project-card-image">
            <img src="https://via.placeholder.com/1200" alt="Project Title" loading="lazy"/>
          </figure>
          <div class="project-card-info">
            <h2>Project Title</h2>
            <p>Project Description</p>
            <a href="#">View Project</a>
          </div>
        </div>
        <div class="project-card">
          <figure class="project-card-image">
            <img src="https://via.placeholder.com/1200" alt="Project Title" loading="lazy"/>
          </figure>
          <div class="project-card-info">
            <h2>Project Title</h2>
            <p>Project Description</p>
            <a href="#">View Project</a>
          </div>
        </div>
      </div>
    </section>
    <ScrollArrow />
  </main>
</template>
