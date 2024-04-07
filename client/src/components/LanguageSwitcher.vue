<script setup>
import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'

const i18n = useI18n()
const { locale, t } = i18n
const availableLocales = ref(['en', 'fr', 'ua'])
const localeDisplayName = (localeCode) => t(`languageNames.${localeCode}`)
const selectedLocale = ref(locale.value)

watch(selectedLocale, (newValue) => {
  i18n.locale.value = newValue
})

</script>

<template>
  <select v-model="selectedLocale">
    <option v-for="locale in availableLocales" :key="locale" :value="locale">
      {{ localeDisplayName(locale) }}
    </option>
  </select>
</template>
