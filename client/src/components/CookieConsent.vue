<script setup>
import { ref, onMounted } from 'vue'

const consentGiven = ref(false)

onMounted(() => {
  const storedConsent = localStorage.getItem('cookieConsent')
  consentGiven.value = storedConsent === 'accepted' || storedConsent === 'declined'
})
// Accept cookies
const acceptCookies = () => {
  localStorage.setItem('cookieConsent', 'accepted')
  consentGiven.value = true
}
// Decline cookies
const declineCookies = () => {
  localStorage.setItem('cookieConsent', 'declined')
  consentGiven.value = true
}
</script>

<template>
  <!-- Cookie Consent Banner -->
  <div v-if="!consentGiven" class="cookie-consent-banner">
    <p>We use cookies to ensure you get the best experience on our website.</p>
    <button @click="acceptCookies">Accept</button>
    <button @click="declineCookies">Decline</button>
  </div>
</template>
