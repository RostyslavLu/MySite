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
      fr: 'French'
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
          title: 'Web developer intern',
          company: 'Euro Style Design Inc',
          date: '04/2024 - 05/2024',
          taskDescription: [
            'Development and customization of WordPress sites for clients, using plugins such as WooCommerce and Elementor.',
            'Collaboration with the design team to translate client needs into technical features.',
            'Troubleshooting compatibility and performance optimization issues.',
            'Implementation of SEO best practices to improve site visibility.',
            'Training and supporting clients in the use of their sites.'
          ]
        },
        {
          title: 'IT Technician (volunteer)',
          company: 'Projet Immigrant',
          date: '08/2023 - present',
          taskDescription: [
            'Installation and maintenance of computer hardware for new immigrants, ensuring access to necessary resources.',
            'Providing technical assistance and training in basic computer skills and software use.',
            'Coordination with other volunteers to provide efficient service to users.',
            'Management and documentation of technical requests and problem resolution.'
          ]
        }
      ],
      educationTitle: 'Education',
      educationItems: [
        {
          title: 'AEC in WEB site design and programming',
          school: 'Collège de Maisonneuve, Montréal, QC, Canada',
          date: '01/2023 - 05/2024',
          description: 'Developed skills in front-end and back-end web development, including HTML, CSS, JavaScript, PHP, and MySQL. Created responsive websites and web applications using modern frameworks and libraries such as Bootstrap, Vue.js, and Laravel.'
        },
        {
          title: 'University Specialist Diploma in ingeneering geodesy',
          school: 'National Polytechnic University of Lviv, Ukraine',
          date: '07/2003 - 12/2004',
          description: 'Developed skills in geodesy, cartography, and land management. Conducted field surveys and created topographic maps using specialized software.'
        },
        {
          title: 'Bachelor of Science in Geodesy and Land Management',
          school: 'National Polytechnic University of Lviv, Ukraine',
          date: '09/1999 - 06/2003',
          description: 'Developed skills in geodesy, cartography, and land management. Conducted field surveys and created topographic maps using specialized software.'
        }
      ],
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
      fr: 'Français'
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
        },
        {
          title: 'TECHNICIEN IT (BÉNÉVOLE)',
          company: 'Projet Immigrant',
          date: '08/2023 - à ce jour',
          taskDescription: [
            'Installation et maintenance de matériel informatique pour les nouveaux immigrants, assurant l\'accès aux ressources nécessaires.',
            'Fourniture d\'une assistance technique et formation aux compétences de base en informatique et en utilisation de logiciels.',
            'Coordination avec d\'autres bénévoles pour offrir un service efficace aux utilisateurs.',
            'Gestion et documentation des demandes techniques et résolution des problèmes.'
          ]
        }
      ],
      educationTitle: 'Éducation',
      educationItems: [
        {
          title: 'AEC en conception et programmation de sites WEB',
          school: 'Collège de Maisonneuve, Montréal, QC, Canada',
          date: '01/2023 - 05/2024',
          description: 'Développé des compétences en développement web front-end et back-end, y compris HTML, CSS, JavaScript, PHP et MySQL. Créé des sites web et des applications web réactives en utilisant des frameworks et des bibliothèques modernes tels que Bootstrap, Vue.js et Laravel.'
        },
        {
          title: 'Diplôme d\'études universitaires spécialisées en géodésie de l\'ingénieur',
          school: 'Université polytechnique nationale de Lviv, Ukraine',
          date: '07/2003 - 12/2004',
          description: 'Développé des compétences en géodésie, cartographie et aménagement du territoire. Réalisé des levés sur le terrain et créé des cartes topographiques à l\'aide de logiciels spécialisés.'
        },
        {
          title: 'Baccalauréat en géodésie et aménagement du territoire',
          school: 'Université polytechnique nationale de Lviv, Ukraine',
          date: '09/1999 - 06/2003',
          description: 'Développé des compétences en géodésie, cartographie et aménagement du territoire. Réalisé des levés sur le terrain et créé des cartes topographiques à l\'aide de logiciels spécialisés.'
        }
      ],
      skillsTitle: 'Compétences'
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
