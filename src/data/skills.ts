
export type SkillCategory = {
  title: string
  description: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend — Développement Web',
    description:
      'Conception d’interfaces web modernes, responsives et interactives. Développement de dashboards et d’applications métier.',
    skills: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'TypeScript',
      'Vue.js 3',
      'Vite',
      'Pinia',
      'Vue Router',
      'Axios',
      'Responsive Design',
      'UI/UX',
      'Composants réutilisables',
    ],
  },

  {
    title: 'Backend & API REST',
    description:
      'Développement de services backend, création d’API REST et gestion des échanges entre frontend, serveur et base de données.',
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
    ],
  },

  {
    title: 'Bases de données',
    description:
      'Conception, manipulation et interrogation de bases de données relationnelles et NoSQL.',
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
    ],
  },

  {
    title: 'Outils de développement & DevOps',
    description:
      'Outils utilisés pour développer, tester, versionner et déployer des applications web.',
    skills: [
      'Git',
      'GitHub',
      'Visual Studio Code',
      'Postman',
      'Git Bash',
      'npm',
      'Netlify',
      'Render',
      'Docker — notions',
      'GitHub Actions — notions',
    ],
  },

  {
    title: 'Réseaux & Systèmes',
    description:
      'Compétences acquises durant la formation en administration des systèmes, réseaux et infrastructure informatique.',
    skills: [
      'Modèle OSI',
      'TCP/IP',
      'IPv4',
      'Subnetting',
      'VLAN',
      'Trunk 802.1Q',
      'Routage inter-VLAN',
      'DHCP',
      'DNS',
      'Cisco Packet Tracer',
      'Configuration de switches',
      'Configuration de routeurs',
      'Linux',
      'Windows',
      'Virtualisation — notions',
    ],
  },

  {
    title: 'Sécurité & Administration',
    description:
      'Notions de sécurité applicative, gestion des accès et administration des environnements informatiques.',
    skills: [
      'Authentification JWT',
      'Contrôle d’accès par rôles',
      'Protection des routes API',
      'Gestion des variables d’environnement',
      'Hashage — notions',
      'HTTPS',
      'Windows Server — notions',
      'Active Directory — notions',
      'GPO — notions',
    ],
  },

  {
    title: 'Langages & Technologies complémentaires',
    description:
      'Langages et frameworks étudiés pendant ma formation ou abordés dans des travaux pratiques. Certains font l’objet de projets à venir.',
    skills: [
      'Python',
      'Java',
      'PHP — notions',
      'React — apprentissage',
      'Angular — apprentissage',
      'RxJS — notions',
      'NestJS — notions',
      'IndexedDB',
      'Linux Bash',
    ],
  },

  {
    title: 'Méthodes & Compétences professionnelles',
    description:
      'Pratiques de développement et compétences mobilisées pendant les projets académiques, personnels et le stage professionnel.',
    skills: [
      'Analyse des besoins',
      'Conception d’applications web',
      'Architecture frontend / backend',
      'Débogage',
      'Tests API',
      'Documentation technique',
      'Recherche de solutions',
      'Autonomie',
      'Travail en équipe',
      'Résolution de problèmes',
    ],
  },
]
