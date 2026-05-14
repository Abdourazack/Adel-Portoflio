export type ExperienceItem = {
  role: string
  company: string
  location: string
  period: string
  description: string
  missions: string[]
  stack: string[]
}

export const experiences: ExperienceItem[] = [
  {
    role: 'Développeur Fullstack Junior',
    company: 'Tite Live SA',
    location: 'Mouscron, Belgique',
    period: 'Stage professionnel — 300h',
    description:
      'Participation au développement d’outils internes, de dashboards métiers et de modules d’administration dans un contexte professionnel réel.',
    missions: [
      'Développement d’interfaces en Vue.js 3 et TypeScript',
      'Création et intégration d’APIs REST avec Node.js et Express.js',
      'Travail sur des modules de monitoring, recherche produit et gestion client',
      'Intégration de bases de données MySQL et Firebird',
      'Tests d’API avec Postman et analyse de données avec DBeaver',
      'Création de composants réutilisables et amélioration UI/UX',
    ],
    stack: ['Vue 3', 'TypeScript', 'Node.js', 'Express.js', 'MySQL', 'Firebird', 'Postman'],
  },
]