<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHtml5, faCss3, faJs, faVuejs, faPhp, faLaravel, faWordpress, faBootstrap, faGithub, faDebian, faReact, faNode, faFigma } from '@fortawesome/free-brands-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
</script>

<template>
  <!-- list of skills -->
  <div class="skills-container">
    <div class="skills-item">
      <FontAwesomeIcon :icon="faHtml5" />
      <p>HTML5</p>
    </div>
    <div class="skills-item">
      <FontAwesomeIcon :icon="faCss3" />
      <p>CSS3</p>
    </div>
    <div class="skills-item">
      <FontAwesomeIcon :icon="faJs" />
      <p>JavaScript</p>
    </div>
    <div class="skills-item">
      <FontAwesomeIcon :icon="faVuejs" />
      <p>Vue.js</p>
    </div>
    <div class="skills-item">
      <FontAwesomeIcon :icon="faReact" />
      <p>React</p>
    </div>
    <div class="skills-item">
      <FontAwesomeIcon :icon="faNode" />
      <p>Node.js</p>
    </div>
    <div class="skills-item">
      <FontAwesomeIcon :icon="faPhp" />
      <p>PHP</p>
    </div>
    <div class="skills-item">
      <FontAwesomeIcon :icon="faLaravel" />
      <p>Laravel</p>
    </div>
    <div class="skills-item">
      <FontAwesomeIcon :icon="faWordpress" />
      <p>Wordpress</p>
    </div>
    <div class="skills-item">
      <FontAwesomeIcon :icon="faBootstrap" />
      <p>Bootstrap</p>
    </div>
    <div class="skills-item">
      <FontAwesomeIcon :icon="faDatabase" />
      <p>SQL</p>
    </div>
    <div class="skills-item">
      <FontAwesomeIcon :icon="faGithub" />
      <p>GitHub</p>
    </div>
    <div class="skills-item">
      <FontAwesomeIcon :icon="faDebian" />
      <p>Debian</p>
    </div>
    <div class="skills-item">
      <FontAwesomeIcon :icon="faFigma" />
      <p>Figma</p>
    </div>
  </div>
</template>
