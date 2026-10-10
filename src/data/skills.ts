
/* ==========================================
   PORTFOLIO — COMPÉTENCES TECHNIQUES
   Développement Web Fullstack Junior
========================================== */

export type SkillCategory = {
  title: string
  description: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [

  // ==========================================
  // 1. FRONTEND
  // ==========================================

  {
    title: 'Frontend — Développement Web',

    description:
      'Conception et développement d’interfaces web modernes, responsives et interactives. Réalisation d’applications métier, de tableaux de bord et de projets personnels avec Vue.js, Angular et React.',

    skills: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'TypeScript',

      // Vue.js
      'Vue.js 3',
      'Composition API',
      'Pinia',
      'Vue Router',
      'Axios',

      // Angular
      'Angular',
      'Angular Signals',
      'RxJS',
      'Reactive Forms',

      // React
      'React',
      'React Hooks',
      'useState',
      'useEffect',
      'useSyncExternalStore',
      'React Router',

      // Interfaces
      'Vite',
      'Responsive Design',
      'UI/UX',
      'Composants réutilisables',
      'Gestion d’état',
      'SweetAlert2',
    ],
  },

  // ==========================================
  // 2. BACKEND ET API REST
  // ==========================================

  {
    title: 'Backend & API REST',

    description:
      'Développement de services backend avec Node.js et Express.js, conception d’API REST et intégration de services externes. Gestion des échanges entre interfaces frontend, serveurs et bases de données.',

    skills: [
      'Node.js',
      'Express.js',
      'TypeScript',
      'JavaScript',
      'API REST',

      'HTTP / HTTPS',
      'JSON',
      'CRUD',
      'JWT',
      'Authentification',
      'Gestion des rôles',
      'Middleware',
      'CORS',
      'Validation des données',

      // TravelExplore
      'Netlify Functions',
      'Architecture serverless',
      'MediaWiki API',
      'Wikimedia Commons',
      'Unsplash API',

      'Gestion des erreurs API',
      'Appels HTTP asynchrones',
      'async / await',
    ],
  },

  // ==========================================
  // 3. BASES DE DONNÉES
  // ==========================================

  {
    title: 'Bases de données & Stockage',

    description:
      'Conception, manipulation et interrogation de bases de données relationnelles et NoSQL. Utilisation du stockage local du navigateur pour conserver les données des applications frontend.',

    skills: [
      'SQL',
      'MySQL',
      'MariaDB',
      'Firebird',
      'MongoDB',

      'DBeaver',
      'HeidiSQL',

      'Modélisation relationnelle',
      'Jointures SQL',
      'Requêtes SELECT',
      'INSERT / UPDATE / DELETE',

      // Angular et React
      'localStorage',
      'Persistance des données',
      'Sérialisation JSON',
    ],
  },

  // ==========================================
  // 4. OUTILS ET DEVOPS
  // ==========================================

  {
    title: 'Outils de développement & DevOps',

    description:
      'Utilisation d’outils de développement, de test, de versionnement et de déploiement. Publication d’applications web et configuration des variables d’environnement pour les services backend.',

    skills: [
      'Git',
      'GitHub',
      'Git Bash',
      'Visual Studio Code',
      'Postman',
      'npm',
      'Vite',

      // Déploiement
      'Netlify',
      'Render',
      'Netlify Functions',
      'Variables d’environnement',
      'Build de production',

      // Méthodes
      'Git commit',
      'Git push',
      'Déploiement continu',
      'Débogage',

      // Notions
      'Docker — notions',
      'GitHub Actions — notions',
    ],
  },

  // ==========================================
  // 5. RÉSEAUX ET SYSTÈMES
  // ==========================================

  {
    title: 'Réseaux & Systèmes',

    description:
      'Compétences étudiées et mises en pratique durant la formation en informatique de gestion : adressage IP, configuration réseau, services informatiques et administration de systèmes.',

    skills: [
      'Modèle OSI',
      'TCP/IP',
      'IPv4',
      'Subnetting',
      'Masques de sous-réseau',

      'VLAN',
      'Trunk 802.1Q',
      'Routage inter-VLAN',
      'Routage statique',

      'DHCP',
      'DNS',
      'Cisco Packet Tracer',

      'Configuration de switches',
      'Configuration de routeurs',
      'Tests de connectivité',
      'Diagnostic réseau',

      'Linux',
      'Windows',
      'Virtualisation — notions',
    ],
  },

  // ==========================================
  // 6. SÉCURITÉ ET ADMINISTRATION
  // ==========================================

  {
    title: 'Sécurité & Administration',

    description:
      'Mise en pratique de mécanismes d’authentification et de contrôle d’accès dans les applications web. Connaissances complémentaires en sécurité informatique et administration des environnements Windows et Linux.',

    skills: [
      'Authentification JWT',
      'Contrôle d’accès par rôles',
      'Protection des routes API',
      'Middleware d’authentification',

      'Variables d’environnement',
      'Protection des clés API',
      'HTTPS',
      'CORS',

      'Hashage — notions',
      'Sécurité applicative — notions',

      'Windows Server — notions',
      'Active Directory — notions',
      'GPO — notions',

      'Gestion des utilisateurs',
      'Gestion des permissions',
    ],
  },

  // ==========================================
  // 7. LANGAGES ET TECHNOLOGIES
  //    COMPLÉMENTAIRES
  // ==========================================

  {
    title: 'Langages & Technologies complémentaires',

    description:
      'Langages, outils et technologies étudiés pendant la formation ou utilisés dans des travaux pratiques. Ces connaissances complètent mes compétences principales en développement web.',

    skills: [
      'Python',
      'Java',
      'PHP — notions',

      'NestJS — notions',
      'IndexedDB',

      'Linux Bash',
      'Scripts Shell',

      'HTML / CSS',
      'JavaScript ES6+',
      'Manipulation du DOM',
      'Fetch API',

      'Programmation orientée objet',
      'Structures de données — notions',
    ],
  },

  // ==========================================
  // 8. MÉTHODES ET COMPÉTENCES
  //    PROFESSIONNELLES
  // ==========================================

  {
    title: 'Méthodes & Compétences professionnelles',

    description:
      'Compétences mobilisées durant ma formation, mon stage professionnel de 300 heures et la réalisation de projets personnels. Organisation du développement, résolution de problèmes et mise en production d’applications web.',

    skills: [
      'Analyse des besoins',
      'Conception d’applications web',

      'Architecture frontend / backend',
      'Organisation du code',
      'Composants réutilisables',

      'Débogage',
      'Tests fonctionnels',
      'Tests API',
      'Documentation technique',

      'Recherche de solutions',
      'Résolution de problèmes',

      'Intégration d’API externes',
      'Gestion des erreurs',
      'Gestion de données',

      'Respect des licences médias',
      'Accessibilité web — notions',

      'Autonomie',
      'Travail en équipe',
      'Adaptabilité',
      'Apprentissage continu',
    ],
  },

]
