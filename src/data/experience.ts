
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
    role: 'Développeur Web Fullstack — Stagiaire',
    company: 'Tite Live SA',
    location: 'Mouscron, Belgique',
    period: 'Stage professionnel — 300 heures',

    description:
      'Stage professionnel réalisé au sein de Tite Live SA, dans un environnement de développement informatique orienté applications métier. Participation au développement et à l’amélioration d’interfaces web, à l’intégration de services backend et à la manipulation de données. Cette expérience m’a permis de renforcer mes compétences techniques et de découvrir les exigences du développement en entreprise.',

    missions: [
      'Développement et amélioration d’interfaces web avec Vue.js 3 et TypeScript',

      'Participation à la conception de composants réutilisables pour des applications métier',

      'Intégration de données provenant d’API REST développées avec Node.js et Express.js',

      'Travail sur des fonctionnalités liées à la recherche de produits et à la présentation de données métier',

      'Participation à des travaux autour de modules de supervision et de gestion de données',

      'Exploration et interrogation de bases de données MySQL et Firebird',

      'Utilisation de Postman pour tester des requêtes HTTP et des endpoints API',

      'Utilisation de DBeaver pour explorer et analyser les données',

      'Débogage, correction d’anomalies et amélioration de l’ergonomie des interfaces',

      'Familiarisation avec l’organisation et les méthodes de travail d’une équipe de développement professionnelle',
    ],

    stack: [
      'Vue.js 3',
      'TypeScript',
      'JavaScript',
      'Node.js',
      'Express.js',
      'REST API',
      'MySQL',
      'Firebird',
      'Postman',
      'DBeaver',
      'Git',
    ],
  },
]
