import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    message: {
      name: 'My portfolio',
      slogan: 'My name is Rostyslav Luchyshyn and I\'m a web developer'
    }
  },
  fr: {
    message: {
      name: 'Mon portfolio',
      slogan: 'Je m\'appelle Rostyslav Luchyshyn et je suis un développeur web'
    }
  },
  ua: {
    message: {
      name: 'Мій портфоліо',
      slogan: 'Мене звати Ростислав Лучишин і я веб-розробник'
    }
  }
}

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'fr',
  messages
})

export { i18n }
