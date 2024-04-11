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
    },
    contactForm: {
      title: 'Contact',
      subtitle: 'Send me a message',
      name: 'Your name',
      email: 'Your email',
      message: 'Your message',
      submit: 'Submit',
      messageSuccess: 'Thank you for your message!',
      placeholderName: 'ex. John Doe',
      placeholderEmail: 'ex. john@example.com',
      placeholderMessage: 'Write your message here',
      requiredName: 'Name is required',
      requiredEmail: 'Email is required',
      requiredMessage: 'Message is required',
      requiredSymolsEmail: 'Email must have "@" and "."'
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
    },
    contactForm: {
      title: 'Contact',
      subtitle: 'Envoyez-moi un message',
      name: 'Votre nom',
      email: 'Votre courriel',
      message: 'Votre message',
      submit: 'Envoyer',
      messageSuccess: 'Merci pour votre message!',
      placeholderName: 'ex. Jean Dupont',
      placeholderEmail: 'ex. jean@example.com',
      placeholderMessage: 'Écrivez votre message ici',
      requiredName: 'Nom est requis',
      requiredEmail: 'Courriel est requis',
      requiredMessage: 'Message est requis',
      requiredSymolsEmail: 'Courriel doit avoir "@" et "."'
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
    },
    contactForm: {
      title: 'Контакти',
      subtitle: 'Надішліть мені повідомлення',
      name: 'Ваше ім\'я',
      email: 'Ваша електронна пошта',
      message: 'Ваше повідомлення',
      submit: 'Надіслати',
      messageSuccess: 'Дякую за ваше повідомлення!',
      placeholderName: 'напр. Іван Мороз',
      placeholderEmail: 'напр. ivan@example.com',
      placeholderMessage: 'Напишіть ваше повідомлення тут',
      requiredName: 'Ім\'я обов\'язкове',
      requiredEmail: 'Електронна пошта обов\'язкова',
      requiredMessage: 'Повідомлення обов\'язкове',
      requiredSymolsEmail: 'Електронна пошта повинна містити "@" та "."'
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
