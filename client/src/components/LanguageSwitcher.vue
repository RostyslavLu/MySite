<script setup>
import { ref, watch, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import enFlag from '@/assets/img/logo/en.png'
import frFlag from '@/assets/img/logo/fr.png'

const i18n = useI18n()
const { locale } = i18n
const availableLocales = ref(['en', 'fr'])

const selectedLocale = ref(locale.value)
const dropdownOpen = ref(false)
watch(selectedLocale, (newValue) => {
  i18n.locale.value = newValue
  dropdownOpen.value = false
})
// Add a function to get the flag image
const getFlagImage = (locale) => {
  switch (locale) {
    case 'en':
      return enFlag
    case 'fr':
      return frFlag
    default:
      return enFlag
  }
}
// Add a function to get the alt text for the flag
const getAltText = (locale) => {
  switch (locale) {
    case 'en':
      return 'English'
    case 'fr':
      return 'Français'
    default:
      return 'Flag'
  }
}
const isMobile = ref(window.innerWidth < 976)
console.log(isMobile.value)

const filteredLocales = computed(() => {
  return availableLocales.value.filter(l => l !== selectedLocale.value)
})
// dropdown menu for changing the language
const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value
  setTimeout(() => {
    dropdownOpen.value = false
  }, 5000)
}
window.addEventListener('resize', () => {
  isMobile.value = window.innerWidth < 976
})

</script>

<template>
  <!-- Language switcher component changes the language of the website -->
   <!-- desktop version -->
  <div v-if="!isMobile" :class="['dropdown', { open: dropdownOpen }]" >
    <button class="dropbtn" @click="toggleDropdown">
      <img
        :src="getFlagImage(selectedLocale)"
        :alt="getAltText(selectedLocale)"
        width="36px"
        height="24px"
        loading="lazy"
      />
    </button>
    <div class="dropdown-content">
      <a
        v-for="locale in filteredLocales"
        :key="locale"
        @click="selectedLocale = locale"
      >
        <img
          :src="getFlagImage(locale)"
          :alt="getAltText(locale)"
          width="36px"
          height="24px"
          loading="lazy"
        />
      </a>
    </div>
  </div>
  <!-- mobile version -->
  <div v-else class="language-switcher-mobile">
    <button v-for="locale in availableLocales" :key="locale" @click="selectedLocale = locale">
      <img :class="[selectedLocale === locale ? 'selectedLocale' : 'secondaryLocale']"
        :src="getFlagImage(locale)"
        :alt="getAltText(locale)"
        width="36px"
        height="24px"
        loading="lazy"
      />
    </button>
  </div>
</template>
