// language files are stored in the lang folder in the root of the project
import { createI18n } from 'vue-i18n'
import en from './lang/en.json' // Importing the English language file from JSON
import fr from './lang/fr.json' // Importing the French language file from JSON
// The language files are imported as JSON files and stored in the messages object
const messages = {
  en: en,
  fr: fr
}
// The createI18n function is called with the messages object as an argument
const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'fr',
  messages
})

export { i18n }
