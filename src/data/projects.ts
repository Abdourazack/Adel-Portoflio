
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
  {
    title: 'Business Dashboard',
    subtitle: 'Application métier fullstack — Produits & Monitoring',
    type: 'Projet portfolio',
    image: '/images/projects/dashboard.png',
    demoUrl: 'https://business-dashboardd.netlify.app/',
    githubUrl: 'https://github.com/Abdourazack/business-dashboard',
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
  {
    title: 'DjiCitoyen',
    subtitle: 'Plateforme SaaS de démarches administratives',
    type: 'Projet personnel',
    image: '/images/projects/djcitoyen.png',
    demoUrl: 'https://djicitoyen.netlify.app/',
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
  {
    title: 'StockFlow — Inventory Management',
    subtitle: 'Gestion des stocks et fournisseurs avec Angular',
    type: 'Projet à venir',
    image: '/images/projects/angular-dashboard.png',
    demoUrl: '#',
    githubUrl: '#',
    description:
      'Future application de gestion des stocks destinée aux petites entreprises. Elle permettra de suivre les produits, les mouvements de stock, les fournisseurs et les alertes de réapprovisionnement. Le projet sera développé avec Angular et TypeScript.',
    stack: [
      'Angular',
      'TypeScript',
      'RxJS',
      'Angular Material',
      'Node.js',
      'REST API',
    ],
    features: [
      'Gestion des produits et catégories — prévue',
      'Entrées et sorties de stock — prévues',
      'Gestion des fournisseurs — prévue',
      'Alertes de stock faible — prévues',
      'Tableau de bord des inventaires — prévu',
      'Formulaires réactifs Angular — prévus',
    ],
  },
  {
    title: 'TravelExplore — Travel Planner',
    subtitle: 'Exploration et planification de voyages avec React',
    type: 'Projet à venir',
    image: '/images/projects/react-project-manager.png',
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
