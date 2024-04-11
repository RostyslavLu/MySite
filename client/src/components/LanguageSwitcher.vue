<script setup>
import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import enFlag from '@/assets/img/logo/en.png'
import frFlag from '@/assets/img/logo/fr.png'
import uaFlag from '@/assets/img/logo/ua.png'

const i18n = useI18n()
const { locale } = i18n
const availableLocales = ref(['en', 'fr', 'ua'])

const selectedLocale = ref(locale.value)

watch(selectedLocale, (newValue) => {
  i18n.locale.value = newValue
})

const getFlagImage = (locale) => {
  switch (locale) {
    case 'en':
      return enFlag
    case 'fr':
      return frFlag
    case 'ua':
      return uaFlag
    default:
      return enFlag
  }
}

</script>

<template>
  <div class="dropdown">
    <button class="dropbtn">
      <img :src="getFlagImage(selectedLocale)" alt="Flag" height="24px" />
    </button>
    <div class="dropdown-content">
      <a v-for="locale in availableLocales" :key="locale" @click="selectedLocale = locale">
        <img :src="getFlagImage(locale)" alt="Flag" height="24px" />
      </a>
    </div>
  </div>
</template>
