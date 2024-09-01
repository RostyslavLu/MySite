<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub, faLinkedin, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
</script>

<template>
  <div class="contact-social">
    <div class="contact-social-element">
      <a href="https://github.com/RostyslavLu" target="_blank" aria-label="github">
        <FontAwesomeIcon :icon="faGithub" />
        <span>GitHub</span>
      </a>
    </div>
    <div class="contact-social-element">
      <a href="https://www.linkedin.com/in/rostyslav-luchyshyn-66350ba5/" target="_blank" aria-label="linkedin">
        <FontAwesomeIcon :icon="faLinkedin" />
        <span>Linkedin</span>
      </a>
    </div>
    <div class="contact-social-element">
      <a href="https://www.facebook.com/rluchyshyn" target="_blank" aria-label="facebook">
        <FontAwesomeIcon :icon="faFacebook" />
        <span>Facebook</span>
      </a>
    </div>
    <div class="contact-social-element">
      <a href="https://www.instagram.com/rostyslav_l/" target="_blank" aria-label="instagram">
        <FontAwesomeIcon :icon="faInstagram" />
        <span>Instagram</span>
      </a>
    </div>
  </div>
</template>
