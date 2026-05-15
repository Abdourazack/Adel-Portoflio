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
    title: 'Monitoring Dashboard Demo',
    subtitle: 'Inspiré du module HAProxy LoadBalancer',
    type: 'Démo portfolio',
    image: '/images/projects/monitoring-demo.png',
    demoUrl: '#',
    githubUrl: '#',
    description:
      'Dashboard de monitoring recréé avec des données fictives pour visualiser des serveurs, leurs statuts et leur disponibilité.',
    stack: ['Vue 3', 'TypeScript', 'Node.js', 'Express.js', 'HAProxy CSV'],
    features: [
      'Normalisation des statuts serveur',
      'Badges UP, DOWN, MAINT, DRAIN, NO_CHECK',
      'Vue dashboard orientée supervision',
      'API backend structurée',
    ],
  },
  {
    title: 'Product Dashboard Demo',
    subtitle: 'Inspiré du module Datafactory',
    type: 'Démo portfolio',
    image: '/images/projects/product-dashboard-demo.png',
    demoUrl: 'https://product-dashboard-demo1.netlify.app/',
    githubUrl: '#',
    description:
      'Interface de recherche produit par EAN/ISBN avec affichage de données détaillées, tableaux dynamiques et résumé produit.',
    stack: ['Vue 3', 'TypeScript', 'Pinia', 'REST API'],
    features: [
      'Recherche par EAN/ISBN',
      'Tables de détails produit',
      'Gestion des états loading/error/empty',
      'UI pensée pour données métier',
    ],
  },
  {
    title: 'Customer Database Demo',
    subtitle: 'Inspiré du module Medialog',
    type: 'Démo portfolio',
    image: '/images/projects/customer-database-demo.png',
    demoUrl: '#',
    githubUrl: '#',
    description:
      'Démo de recherche client avec autocomplete, affichage des informations client et logique inspirée d’une base entreprise.',
    stack: ['Vue 3', 'TypeScript', 'Node.js', 'Express.js', 'Firebird'],
    features: [
      'Autocomplete client',
      'Connexion backend sécurisée',
      'Approche lecture seule',
      'Affichage structuré des données',
    ],
  },
  {
    title: 'DjiCitoyen',
    subtitle: 'Prototype SaaS administratif',
    type: 'Projet personnel',
    image: '/images/projects/djcitoyen.png',
    demoUrl: 'https://djicitoyen.netlify.app/',
    githubUrl: '#',
    description:
      'Plateforme SaaS pour la gestion de rendez-vous administratifs : portail citoyen, espace agent et dashboard admin.',
    stack: ['Vue 3', 'TypeScript', 'Node.js', 'Express.js', 'MySQL'],
    features: [
      'Prise de rendez-vous',
      'Suivi par référence',
      'Dashboard admin',
      'Architecture fullstack MVP',
    ],
  },
]