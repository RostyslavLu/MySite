<script setup>
import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import enFlag from '@/assets/img/logo/en.png'
import frFlag from '@/assets/img/logo/fr.png'

const i18n = useI18n()
const { locale } = i18n
const availableLocales = ref(['en', 'fr'])

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
    default:
      return enFlag
  }
}

</script>

<template>
  <div class="dropdown">
    <button class="dropbtn">
      <img :src="getFlagImage(selectedLocale)" alt="Flag" width="36px" height="24px" loading="lazy" />
    </button>
    <div class="dropdown-content">
      <a v-for="locale in availableLocales" :key="locale" @click="selectedLocale = locale">
        <img :src="getFlagImage(locale)" alt="Flag" width="36px" height="24px" loading="lazy" />
      </a>
    </div>
  </div>
</template>
