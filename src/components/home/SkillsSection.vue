
/* ==========================================
   PORTFOLIO — COMPÉTENCES TECHNIQUES
   Développeur Web Fullstack Junior

   Projets :
   - Business Dashboard : Vue.js
   - DjiCitoyen : Vue.js
   - Gestionnaire de candidatures : Angular
   - TravelExplore : React
========================================== */

export type SkillCategory = {
  title: string
  description: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [

  // ==========================================
  // 1. DÉVELOPPEMENT FRONTEND
  // ==========================================

  {
    title: 'Frontend — Vue.js, Angular & React',

    description:
      'Développement d’applications web modernes, responsives et interactives avec Vue.js 3, Angular et React. Ces trois technologies ont été mises en pratique dans mes projets Business Dashboard, DjiCitoyen, Gestionnaire de candidatures et TravelExplore.',

    skills: [
      // Langages fondamentaux
      'HTML5',
      'CSS3',
      'JavaScript ES6+',
      'TypeScript',

      // Frameworks et bibliothèque frontend
      'Vue.js 3',
      'Angular',
      'React',

      // Écosystème Vue.js
      'Vue Composition API',
      'Pinia',
      'Vue Router',
      'Axios',

      // Écosystème Angular
      'Angular Signals',
      'RxJS',
      'Reactive Forms',
      'Angular Components',

      // Écosystème React
      'React Hooks',
      'useState',
      'useEffect',
      'useSyncExternalStore',
      'React Router',

      // Outils et interfaces
      'Vite',
      'Responsive Design',
      'Composants réutilisables',
      'Gestion d’état',
      'Formulaires interactifs',
      'Navigation SPA',
      'UI/UX',
      'SweetAlert2',
    ],
  },

  // ==========================================
  // 2. BACKEND ET API REST
  // ==========================================

  {
    title: 'Backend — Node.js, Express & API REST',

    description:
      'Développement de services backend avec Node.js, Express.js et TypeScript. Création et utilisation d’API REST, authentification JWT, gestion des rôles et intégration de services externes, notamment les API touristiques utilisées dans TravelExplore.',

    skills: [
      // Technologies backend
      'Node.js',
      'Express.js',
      'TypeScript',
      'JavaScript',

      // Communication
      'API REST',
      'HTTP / HTTPS',
      'JSON',
      'GET / POST / PUT / DELETE',
      'CRUD',
      'Fetch API',
      'Axios',

      // Authentification
      'JWT',
      'Authentification',
      'Gestion des rôles',
      'Middleware',
      'CORS',
      'Validation des données',

      // API externes et serverless
      'Netlify Functions',
      'Fonctions serverless',
      'MediaWiki API',
      'Wikimedia Commons',
      'Unsplash API',

      // Programmation asynchrone
      'async / await',
      'Promises',
      'Gestion des erreurs API',
    ],
  },

  // ==========================================
  // 3. BASES DE DONNÉES
  // ==========================================

  {
    title: 'Bases de données & Stockage',

    description:
      'Manipulation de bases de données relationnelles et NoSQL, conception de requêtes SQL et gestion de la persistance des données. Utilisation de MySQL, Firebird, MariaDB et MongoDB ainsi que du stockage local dans mes applications frontend.',

    skills: [
      // Bases de données
      'SQL',
      'MySQL',
      'MariaDB',
      'Firebird',
      'MongoDB',

      // Outils
      'DBeaver',
      'HeidiSQL',

      // SQL
      'Modélisation relationnelle',
      'Jointures SQL',
      'Requêtes SELECT',
      'INSERT / UPDATE / DELETE',
      'Clés primaires et étrangères',

      // Stockage navigateur
      'localStorage',
      'Persistance des données',
      'Sérialisation JSON',
      'IndexedDB — notions',
    ],
  },

  // ==========================================
  // 4. OUTILS ET DÉPLOIEMENT
  // ==========================================

  {
    title: 'Outils de développement & DevOps',

    description:
      'Utilisation d’outils de développement, de test, de gestion de versions et de déploiement. Publication de mes applications sur Netlify et Render à partir de dépôts GitHub.',

    skills: [
      // Environnement de développement
      'Visual Studio Code',
      'Git Bash',
      'npm',
      'Vite',
      'Postman',

      // Gestion de versions
      'Git',
      'GitHub',
      'Git commit',
      'Git push',
      'Branches Git — notions',

      // Hébergement
      'Netlify',
      'Render',
      'Netlify Functions',

      // Configuration et publication
      'Variables d’environnement',
      'Build de production',
      'Déploiement via GitHub',
      'Déploiement continu',
      'Débogage',

      // Connaissances complémentaires
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
      'Compétences théoriques et pratiques étudiées durant ma formation en informatique de gestion. Configuration de réseaux avec Cisco Packet Tracer, adressage IPv4, VLAN, routage, services réseau et utilisation des systèmes Windows et Linux.',

    skills: [
      // Modèles et protocoles
      'Modèle OSI',
      'TCP/IP',
      'IPv4',
      'Subnetting',
      'Masques de sous-réseau',

      // Configuration réseau
      'VLAN',
      'Trunk 802.1Q',
      'Routage inter-VLAN',
      'Routage statique',
      'DHCP',
      'DNS',

      // Outils et équipements
      'Cisco Packet Tracer',
      'Configuration de switches',
      'Configuration de routeurs',
      'Tests de connectivité',
      'Ping',
      'Diagnostic réseau',

      // Systèmes
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
      'Mise en pratique de l’authentification et du contrôle d’accès dans les applications web. Connaissances complémentaires en sécurité applicative, gestion des utilisateurs et administration des environnements Windows et Linux.',

    skills: [
      // Sécurité des applications
      'Authentification JWT',
      'Contrôle d’accès par rôles',
      'Protection des routes API',
      'Middleware d’authentification',
      'Gestion des permissions',
      'Gestion des utilisateurs',

      // Protection des services
      'Variables d’environnement',
      'Protection des clés API',
      'HTTPS',
      'CORS',
      'Validation des données',

      // Connaissances de sécurité
      'Hashage — notions',
      'Sécurité applicative — notions',

      // Administration système
      'Windows Server — notions',
      'Active Directory — notions',
      'GPO — notions',
      'Linux — administration de base',
    ],
  },

  // ==========================================
  // 7. LANGAGES ET TECHNOLOGIES
  //    COMPLÉMENTAIRES
  // ==========================================

  {
    title: 'Langages & Technologies complémentaires',

    description:
      'Langages, frameworks et outils étudiés au cours de ma formation ou utilisés lors de travaux pratiques. Ils complètent mes compétences principales en développement web avec Vue.js, Angular, React et Node.js.',

    skills: [
      // Langages
      'Python',
      'Java',
      'PHP — notions',

      // Frameworks étudiés
      'NestJS — notions',

      // JavaScript
      'JavaScript ES6+',
      'Manipulation du DOM',
      'Fetch API',
      'IndexedDB',

      // Scripting
      'Linux Bash',
      'Scripts Shell — notions',

      // Concepts de programmation
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
      'Compétences développées durant ma formation, mon stage professionnel de 300 heures et la réalisation de quatre projets présentés dans mon portfolio. Organisation du développement, tests, résolution de problèmes et mise en ligne d’applications.',

    skills: [
      // Conception
      'Analyse des besoins',
      'Conception d’applications web',
      'Architecture frontend / backend',
      'Composants réutilisables',
      'Organisation du code',

      // Tests et maintenance
      'Débogage',
      'Tests fonctionnels',
      'Tests API',
      'Gestion des erreurs',
      'Documentation technique',

      // Intégration
      'Intégration d’API externes',
      'Gestion de données',
      'Respect des licences médias',
      'Accessibilité web — notions',

      // Organisation professionnelle
      'Recherche de solutions',
      'Résolution de problèmes',
      'Autonomie',
      'Travail en équipe',
      'Adaptabilité',
      'Apprentissage continu',
    ],
  },

]
