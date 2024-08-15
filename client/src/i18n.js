import { createI18n } from 'vue-i18n'
import en from './lang/en.json' // Importing the English language file
import fr from './lang/fr.json' // Importing the French language file

const messages = {
  en: en,
  fr: fr
}

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'fr',
  messages
})

export { i18n }
