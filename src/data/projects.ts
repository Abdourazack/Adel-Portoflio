
export type ProjectItem = {
  title: string
  subtitle: string
  description: string
  type: string
  image: string
  demoUrl: string
  githubUrl: string
  stack: string[]
  features: string[]
}

export const projects: ProjectItem[] = [

  // ==========================================
  // PROJET 1 - BUSINESS DASHBOARD
  // ==========================================

  {
    title: 'Business Dashboard',

    subtitle:
      'Application métier fullstack — Produits & Monitoring',

    type: 'Projet portfolio',

    image: '/images/projects/dashboard.png',

    demoUrl:
      'https://business-dashboardd.netlify.app/',

    githubUrl:
      'https://github.com/Abdourazack/business-dashboard',

    description:
      'Application web fullstack regroupant plusieurs modules métier : recherche de produits par EAN/ISBN et supervision de serveurs fictifs. Interface responsive développée avec Vue 3 et TypeScript, connectée à une API REST Express. Un module de gestion des clients est prévu.',

    stack: [
      'Vue 3',
      'TypeScript',
      'Vite',
      'Node.js',
      'Express.js',
      'REST API',
      'Axios',
      'Render',
      'Netlify',
    ],

    features: [
      'Recherche de produits par EAN/ISBN',
      'Consultation des informations produit',
      'Dashboard de supervision des serveurs',
      'Statistiques et indicateurs de disponibilité',
      'Recherche et filtrage des serveurs',
      'Simulation de statuts en environnement local',
      'API REST et architecture frontend/backend',
      'Déploiement sur Netlify et Render',
    ],
  },

  // ==========================================
  // PROJET 2 - DJICITOYEN
  // ==========================================

  {
    title: 'DjiCitoyen',

    subtitle:
      'Plateforme SaaS de démarches administratives',

    type: 'Projet personnel',

    image: '/images/projects/djcitoyen.png',

    demoUrl:
      'https://djicitoyen.netlify.app/',

    githubUrl: '#',

    description:
      'Plateforme web de gestion des démarches administratives, permettant aux citoyens de consulter les services, de demander des rendez-vous et de suivre leurs dossiers. Elle comprend également des interfaces dédiées aux agents et aux administrateurs.',

    stack: [
      'Vue 3',
      'TypeScript',
      'Node.js',
      'Express.js',
      'MySQL',
      'JWT',
      'REST API',
    ],

    features: [
      'Portail citoyen et consultation des services',
      'Prise de rendez-vous administratifs',
      'Suivi des demandes par référence',
      'Authentification et gestion des rôles',
      'Espace agent et tableau de bord administrateur',
      'Architecture frontend/backend/base de données',
    ],
  },

  // ==========================================
  // PROJET 3 - GESTIONNAIRE DE CANDIDATURES
  // ==========================================

  {
    title: 'Gestionnaire de candidatures',

    subtitle:
      'Application Angular de suivi et de gestion des candidatures',

    type: 'Projet portfolio',

    image:
      '/images/projects/gestionnaire-candidature.png',

    demoUrl:
      'https://gestionnaire-des-candidatures.netlify.app/',

    githubUrl:
      'https://github.com/Abdourazack/Gestionnaire-des-candidatures',

    description:
      'Application web de gestion et de suivi des candidatures développée avec Angular et TypeScript. Elle permet d’enregistrer, modifier et supprimer des candidatures, de suivre les différentes étapes du recrutement et de consulter des statistiques actualisées automatiquement. Elle propose une recherche instantanée, des filtres par statut, un tri chronologique, des graphiques de suivi et un export CSV. Les informations sont sauvegardées dans le navigateur avec localStorage. Le projet dispose d’une interface responsive et de notifications SweetAlert2.',

    stack: [
      'Angular',
      'TypeScript',
      'Angular Signals',
      'RxJS',
      'Reactive Forms',
      'HTML5',
      'CSS3',
      'SweetAlert2',
      'localStorage',
      'Git',
      'GitHub',
      'Netlify',
    ],

    features: [
      'Tableau de bord interactif de suivi des candidatures',
      'Ajout de candidatures avec formulaires réactifs Angular',
      'Modification des candidatures avec SweetAlert2',
      'Suppression avec confirmation',
      'Gestion des différents statuts de candidature',
      'Statistiques actualisées automatiquement avec Angular Signals',
      'Graphique de répartition des candidatures par statut',
      'Graphique d’évolution mensuelle des candidatures',
      'Calcul du taux de réponse et du taux d’acceptation',
      'Recherche instantanée par entreprise ou poste',
      'Filtrage des candidatures par statut',
      'Tri par date croissante ou décroissante',
      'Combinaison de la recherche, des filtres et du tri',
      'Export des candidatures au format CSV',
      'Sauvegarde locale des données avec localStorage',
      'Notifications et confirmations avec SweetAlert2',
      'Interface responsive adaptée aux ordinateurs et mobiles',
      'Publication du code source sur GitHub',
      'Déploiement de l’application sur Netlify',
    ],
  },

  // ==========================================
  // PROJET 4 - TRAVELEXPLORE REACT
  // ==========================================

  {
    title: 'TravelExplore — Travel Planner',

    subtitle:
      'Exploration et planification de voyages avec React',

    type: 'Projet à venir',

    image:
      '/images/projects/travel-explore.png',

    demoUrl: '#',

    githubUrl: '#',

    description:
      'Future application interactive permettant de rechercher des destinations, de découvrir des lieux touristiques et de construire des itinéraires personnalisés. Le projet mettra en pratique React, TypeScript et les API de données touristiques.',

    stack: [
      'React',
      'TypeScript',
      'Vite',
      'React Router',
      'Tailwind CSS',
      'REST API',
    ],

    features: [
      'Recherche de destinations — prévue',
      'Découverte des lieux touristiques — prévue',
      'Filtres par pays et catégorie — prévus',
      'Création d’itinéraires personnalisés — prévue',
      'Gestion des favoris — prévue',
      'Interface responsive et interactive — prévue',
    ],
  },

]
