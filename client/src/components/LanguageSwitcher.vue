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
      <img :src="getFlagImage(selectedLocale)" alt="Flag" width="36" />
    </button>
    <div class="dropdown-content">
      <a v-for="locale in availableLocales" :key="locale" @click="selectedLocale = locale">
        <img :src="getFlagImage(locale)" alt="Flag" height="36" />
      </a>
    </div>
  </div>
</template>

<style scoped>
  .dropdown {
    position: relative;
    display: inline-block;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: transparent;
    z-index: 1;
  }

  .dropdown-content a {
    color: var(--main-color-dark);
    padding: var(--space-s);
    text-decoration: none;
    display: block;
    cursor: pointer;
  }
  .dropdown-content img {
    filter: grayscale(90%);
  }

  .dropdown-content img:hover {
    filter: grayscale(0%);
    filter: drop-shadow(0 0 4px var(--main-color-light));
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }

  .dropbtn {
    background-color: transparent;
    padding: var(--space-s);
    border: none;
    cursor: pointer;
  }
  .dropbtn img {
    height: 36px;
  }
</style>
