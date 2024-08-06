<script setup>
import ScrollArrow from '@/components/ScrollArrow.vue'

</script>

<template>
  <main>
    <section class="page-container">
      <h1>Projects</h1>
      <div class="projects-container">
        <div class="project-card">
          <figure class="project-card-image">
            <img src="https://via.placeholder.com/600" alt="Project Title" />
          </figure>
          <div class="project-card-info">
            <h2>Project Title</h2>
            <p>Project Description</p>
            <a href="#">View Project</a>
          </div>
        </div>
        <div class="project-card">
          <figure class="project-card-image">
            <img src="https://via.placeholder.com/600" alt="Project Title" />
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
