import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    message: {
      title: 'My portfolio',
      slogan: 'My name is Rostyslav Luchyshyn and I\'m a web developer'
    },
    navigation: {
      home: 'Home',
      cv: 'CV',
      projects: 'Projects',
      photogallery: 'Photo Gallery',
      contact: 'Contact'
    },
    languageNames: {
      en: 'English',
      fr: 'French',
      ua: 'Ukrainian'
    }
  },
  fr: {
    message: {
      title: 'Mon portfolio',
      slogan: 'Je m\'appelle Rostyslav Luchyshyn et je suis un développeur web'
    },
    navigation: {
      home: 'Accueil',
      cv: 'CV',
      projects: 'Projets',
      photogallery: 'Galerie de photos',
      contact: 'Contact'
    },
    languageNames: {
      en: 'Anglais',
      fr: 'Français',
      ua: 'Ukrainien'
    }
  },
  ua: {
    message: {
      title: 'Моє портфоліо',
      slogan: 'Мене звати Ростислав Лучишин, я веб-розробник'
    },
    navigation: {
      home: 'Головна',
      cv: 'Резюме',
      projects: 'Проєкти',
      photogallery: 'Фотогалерея',
      contact: 'Контакти'
    },
    languageNames: {
      en: 'Англійська',
      fr: 'Французька',
      ua: 'Українська'
    }
  }
}

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'fr',
  messages
})

export { i18n }
