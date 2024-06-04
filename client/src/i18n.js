import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    message: {
      title: 'My portfolio',
      slogan: 'My name is Rostyslav Luchyshyn and I\'m a web developer'
    },
    navigation: {
      home: 'Home',
      cv: 'About',
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
      subtitle: 'Contact me through social media or email',
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
    },
    resume: {
      profilTitle: 'Profile',
      profilText: 'I am passionate about creating websites and interactive applications. My goal is to contribute to innovative projects, continuously learn, and grow within a dynamic team. I want to apply my front-end and back-end development skills to create exceptional user experiences.',
      experienceTitle: 'Experience',
      experienceItems: [
        {
          title: 'WEB DEVELOPER INTERN',
          company: 'Euro Style Design Inc',
          date: '04/2024 - 05/2024',
          taskDescription: [
            'Development and customization of WordPress sites for clients, using plugins such as WooCommerce and Elementor.',
            'Collaboration with the design team to translate client needs into technical features.',
            'Troubleshooting compatibility and performance optimization issues.',
            'Implementation of SEO best practices to improve site visibility.',
            'Training and supporting clients in the use of their sites.'
          ]
        }
      ],
      educationTitle: 'Education',
      skillsTitle: 'Skills'
    }
  },
  fr: {
    message: {
      title: 'Mon portfolio',
      slogan: 'Je m\'appelle Rostyslav Luchyshyn et je suis un développeur web'
    },
    navigation: {
      home: 'Accueil',
      cv: 'À propos',
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
      subtitle: 'Contactez-moi par courriel ou réseaux sociaux',
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
    },
    resume: {
      profilTitle: 'Profil',
      profilText: 'Je suis passionné par la création de sites web et d\'applications interactives. Mon objectif est de contribuer à des projets innovants, d\'apprendre continuellement et de grandir au sein d\'une équipe dynamique. Je souhaite mettre en pratique mes compétences en développement front-end et back-end pour créer des expériences utilisateur exceptionnelles',
      experienceTitle: 'Expérience',
      experienceItems: [
        {
          title: 'DÉVELOPPEUR WEB STAGIAIRE',
          company: 'Euro Style Design Inc',
          date: '04/2024 - 05/2024',
          taskDescription: [
            'Développement et personnalisation de sites WordPress pour des clients, en utilisant des plugins tels que WooCommerce et Elementor.',
            'Collaboration avec l\'équipe de design pour traduire les besoins des clients en fonctionnalités techniques.',
            'Résolution de problèmes de compatibilité et optimisation des performances.',
            'Mise en œuvre des meilleures pratiques SEO pour améliorer la visibilité du site.',
            'Formation et soutien des clients dans l\'utilisation de leurs sites.'
          ]
        }
      ],
      educationTitle: 'Éducation',
      skillsTitle: 'Compétences'
    }
  },
  ua: {
    message: {
      title: 'Моє портфоліо',
      slogan: 'Мене звати Ростислав Лучишин, я веб-розробник'
    },
    navigation: {
      home: 'Головна',
      cv: 'Про мене',
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
      subtitle: 'Зв\'яжіться зі мною через соціальні мережі або електронну пошту',
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
    },
    resume: {
      profilTitle: 'Профіль',
      profilText: 'Я захоплююся створенням веб-сайтів та інтерактивних додатків. Моя мета - сприяти інноваційним проєктам, постійно вчитися та рости в динамічній команді. Я хочу застосувати свої навички розробки фронтенду та бекенду для створення виняткових користувацьких досвідів',
      experienceTitle: 'Досвід',
      experienceItems: [
        {
          title: 'ІНТЕРН-РОЗРОБНИК ВЕБ-САЙТІВ',
          company: 'Euro Style Design Inc',
          date: '04/2024 - 05/2024',
          taskDescription: [
            'Розробка та налаштування сайтів WordPress для клієнтів, використовуючи плагіни, такі як WooCommerce та Elementor.',
            'Співпраця з дизайнерською командою для перетворення потреб клієнтів на технічні функції.',
            'Вирішення проблем сумісності та оптимізація продуктивності.',
            'Впровадження найкращих практик SEO для покращення видимості сайту.',
            'Навчання та підтримка клієнтів у використанні їх сайтів.'
          ]
        }
      ],
      educationTitle: 'Освіта',
      skillsTitle: 'Навички'
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
