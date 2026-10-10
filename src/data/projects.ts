
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

    image:
      '/images/projects/business-dashboard.png',

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

    image:
      '/images/projects/djcitoyen.png',

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
      '/images/projects/gestionnaire-candidatures.png',

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
      'Application React de découverte touristique et de planification de voyages',

    type: 'Projet portfolio',

    image:
      '/images/projects/travelexplore.png',

    demoUrl:
      'https://travelexplore-react.netlify.app/',

    githubUrl:
      'https://github.com/Abdourazack/travelexplore',

    description:
      'Application web interactive de découverte touristique et de planification de voyages, développée avec React, TypeScript et Vite. TravelExplore permet de rechercher une ville, de découvrir les monuments, musées et lieux remarquables à proximité, puis de sélectionner ses destinations favorites et de créer un itinéraire personnalisé. Les informations touristiques proviennent de l’API MediaWiki de Wikipédia, tandis que les photographies d’inspiration sont fournies par Unsplash. Deux fonctions serverless Netlify assurent la communication avec ces services externes. L’application intègre les crédits et licences des photographies Wikimedia, la sauvegarde locale des favoris et itinéraires, ainsi que l’export des voyages au format TXT. Le projet est organisé en composants React, services API, hooks personnalisés et types TypeScript, avec une interface responsive et un déploiement continu via GitHub et Netlify.',

    stack: [
      'React',
      'TypeScript',
      'Vite',
      'React Router',
      'HTML5',
      'CSS3',
      'REST API',
      'MediaWiki API',
      'Wikimedia Commons',
      'Unsplash API',
      'Netlify Functions',
      'Serverless',
      'React Hooks',
      'useSyncExternalStore',
      'localStorage',
      'Git',
      'GitHub',
      'Netlify',
    ],

    features: [
      'Recherche interactive de destinations par nom de ville',

      'Géolocalisation des lieux touristiques à partir des coordonnées Wikipédia',

      'Découverte de monuments historiques, musées, églises et sites culturels',

      'Recherche géographique des attractions dans un rayon autour de la ville sélectionnée',

      'Récupération des descriptions touristiques en français avec l’API MediaWiki',

      'Filtrage des résultats pour privilégier les lieux présentant un intérêt touristique',

      'Affichage de photographies Wikimedia associées aux articles Wikipédia',

      'Récupération et affichage des auteurs, sources et licences des photographies Wikimedia',

      'Photographies d’inspiration fournies par l’API Unsplash',

      'Affichage des crédits photographiques et des liens vers Unsplash',

      'Ajout et suppression de lieux touristiques dans les favoris',

      'Gestion des favoris à l’aide d’un hook React personnalisé',

      'Synchronisation des favoris entre les composants avec useSyncExternalStore',

      'Sauvegarde persistante des favoris dans localStorage',

      'Création d’itinéraires personnalisés à partir des lieux favoris',

      'Personnalisation du voyage avec un titre, une date et des notes',

      'Ajout et suppression d’étapes dans le planificateur',

      'Réorganisation des étapes avec des commandes de déplacement',

      'Sauvegarde automatique des itinéraires dans le navigateur',

      'Export des itinéraires au format TXT',

      'Gestion des états de chargement, des erreurs API et des résultats vides',

      'Communication avec des API externes via des fonctions serverless Netlify',

      'Protection de la clé Unsplash grâce aux variables d’environnement côté serveur',

      'Navigation entre les pages avec React Router',

      'Interface responsive avec une identité visuelle bleu nuit et vert émeraude',

      'Favicon personnalisé pour l’identité visuelle de TravelExplore',

      'Architecture frontend structurée en pages, services, hooks et types TypeScript',

      'Version de production compilée avec Vite et TypeScript',

      'Code source versionné et publié sur GitHub',

      'Déploiement public de l’application sur Netlify',
    ],
  },

]
