<script setup>
import { ref, onMounted } from 'vue'

const consentGiven = ref(false)

onMounted(() => {
  const storedConsent = localStorage.getItem('cookieConsent')
  consentGiven.value = storedConsent === 'accepted' || storedConsent === 'declined'
})

const acceptCookies = () => {
  localStorage.setItem('cookieConsent', 'accepted')
  consentGiven.value = true
}

const declineCookies = () => {
  localStorage.setItem('cookieConsent', 'declined')
  consentGiven.value = true
}
</script>

<template>
  <div v-if="!consentGiven" class="cookie-consent-banner">
    <p>We use cookies to ensure you get the best experience on our website.</p>
    <button @click="acceptCookies">Accept</button>
    <button @click="declineCookies">Decline</button>
  </div>
</template>

<style scoped>
.cookie-consent-banner p {
  font-size: var(--text-btn);
}

.cookie-consent-banner {
  position: fixed;
  bottom: var(--space-xs);
  left: 0;
  right: 0;
  background-color: var(--main-color-medium);
  opacity: 0.9;
  color: var(--main-color-light);
  padding: var(--space-s);
  text-align: center;
  z-index: 10;
}

.cookie-consent-banner button {
  margin-left: var(--space-s);
  padding: var(--space-s) var(--space-lg);
  color: var(--main-color-light);
  background-color: var(--accent-color-medium);
  border: none;
  border-radius: var(--space-xs);
  cursor: pointer;
}

.cookie-consent-banner button:hover {
  background-color: var(--accent-color-light);
}
</style>
