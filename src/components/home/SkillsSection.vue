
export type SkillCategory = {
  title: string
  description: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [

  // ==========================================
  // FRONTEND
  // ==========================================

  {
    title: 'Développement frontend',

    description:
      'Création d’interfaces web responsives et interactives avec plusieurs environnements JavaScript et TypeScript.',

    skills: [
      'Vue.js 3',
      'React',
      'Angular',
      'TypeScript',
      'JavaScript',
      'HTML5',
      'CSS3',
      'Vite',
      'Vue Router',
      'React Router',
      'Angular Signals',
      'RxJS',
      'Reactive Forms',
      'Pinia',
      'Axios',
    ],
  },

  // ==========================================
  // BACKEND ET API
  // ==========================================

  {
    title: 'Backend et intégration API',

    description:
      'Développement d’API REST et communication entre interfaces frontend, services serveur et API externes.',

    skills: [
      'Node.js',
      'Express.js',
      'REST API',
      'HTTP / HTTPS',
      'JSON',
      'Authentification JWT',
      'Middleware',
      'Netlify Functions',
      'Serverless',
      'MediaWiki API',
      'Unsplash API',
      'Postman',
    ],
  },

  // ==========================================
  // BASES DE DONNÉES
  // ==========================================

  {
    title: 'Bases de données et stockage',

    description:
      'Manipulation de données relationnelles et sauvegarde locale des informations dans les applications web.',

    skills: [
      'MySQL',
      'Firebird',
      'SQL',
      'localStorage',
      'DBeaver',
      'HeidiSQL',
    ],
  },

  // ==========================================
  // OUTILS ET DÉPLOIEMENT
  // ==========================================

  {
    title: 'Outils, versionnement et déploiement',

    description:
      'Utilisation d’outils de développement, de gestion de code source et de plateformes de déploiement web.',

    skills: [
      'Git',
      'GitHub',
      'VS Code',
      'npm',
      'Vite Build',
      'Netlify',
      'Render',
      'Variables d’environnement',
      'Responsive Design',
      'Débogage',
    ],
  },

  // ==========================================
  // GESTION D'ÉTAT ET INTERFACES
  // ==========================================

  {
    title: 'Gestion d’état et expérience utilisateur',

    description:
      'Développement de fonctionnalités dynamiques, gestion des interactions et persistance des données côté navigateur.',

    skills: [
      'React Hooks',
      'useState',
      'useEffect',
      'useSyncExternalStore',
      'Angular Signals',
      'Pinia',
      'Formulaires réactifs',
      'SweetAlert2',
      'Recherche et filtres',
      'Export CSV / TXT',
    ],
  },

  // ==========================================
  // MÉTHODES ET QUALITÉ
  // ==========================================

  {
    title: 'Méthodes et bonnes pratiques',

    description:
      'Organisation du code, tests fonctionnels et attention portée à la qualité des applications et à leur publication.',

    skills: [
      'Architecture frontend / backend',
      'Composants réutilisables',
      'Services API',
      'Typage TypeScript',
      'Gestion des erreurs',
      'Tests fonctionnels',
      'Git Workflow',
      'Protection des clés API',
      'Accessibilité web',
      'Crédits et licences des médias',
    ],
  },

]
