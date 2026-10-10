
<script setup lang="ts">
import SectionTitle from '../layout/SectionTitle.vue'

// ==========================================
// COMPÉTENCES TECHNIQUES
// ==========================================

const technologies = [
  'Vue.js 3',
  'Angular',
  'React',
  'TypeScript',
  'JavaScript',
  'HTML5',
  'CSS3',
  'Node.js',
  'Express.js',
  'API REST',
  'MySQL',
  'Git',
  'GitHub',
]

// ==========================================
// OUTILS UTILISÉS
// ==========================================

const outils = [
  'VS Code',
  'Postman',
  'DBeaver',
  'Vite',
  'Netlify',
  'Render',
  'GitHub',
]

// ==========================================
// PROJETS RÉALISÉS
// ==========================================

const projets = [
  {
    nom: 'Business Dashboard',

    technologie:
      'Vue.js 3 / TypeScript / Node.js / Express',

    description:
      'Application métier fullstack proposant une recherche de produits par EAN/ISBN et un tableau de bord de supervision de serveurs fictifs. Communication avec une API REST et déploiement du frontend et du backend.',

    lien:
      'https://business-dashboardd.netlify.app/',
  },

  {
    nom: 'DjiCitoyen',

    technologie:
      'Vue.js 3 / TypeScript / Express / MySQL',

    description:
      'Plateforme de démarches administratives avec portail citoyen, prise de rendez-vous, suivi des demandes et interfaces dédiées aux agents et administrateurs. Authentification et gestion des rôles.',

    lien:
      'https://djicitoyen.netlify.app/',
  },

  {
    nom: 'Gestionnaire de candidatures',

    technologie:
      'Angular / TypeScript / Signals / RxJS',

    description:
      'Application de suivi des candidatures avec gestion des statuts, statistiques interactives, graphiques, recherche, filtres, tri chronologique, export CSV et sauvegarde locale des données.',

    lien:
      'https://gestionnaire-des-candidatures.netlify.app/',
  },

  {
    nom: 'TravelExplore — Travel Planner',

    technologie:
      'React / TypeScript / Vite / Netlify Functions',

    description:
      'Application de découverte touristique utilisant les API Wikipédia, Wikimedia et Unsplash. Recherche de lieux par ville, géolocalisation, gestion des favoris, planification d’itinéraires, sauvegarde locale et export TXT. Photographies accompagnées de leurs crédits et licences.',

    lien:
      'https://travelexplore-react.netlify.app/',
  },
]
</script>

<template>
  <section id="about" class="section about-section">

    <!-- =====================================
         TITRE DE SECTION
    ====================================== -->

    <SectionTitle
      eyebrow="À propos de moi"
      title="Développeur Web Fullstack Junior"
      description="Passionné par la création d'applications web utiles et modernes, je développe des interfaces interactives et des solutions métier avec Vue.js, Angular, React, TypeScript et Node.js."
    />

    <!-- =====================================
         INTRODUCTION
    ====================================== -->

    <div class="about-intro">

      <div class="intro-content">

        <span class="intro-label">
          Mon parcours
        </span>

        <h3>
          De la formation aux
          <span>applications concrètes.</span>
        </h3>

        <p>
          Formé en
          <strong>informatique de gestion</strong>,
          je construis progressivement mon expérience
          dans le développement web frontend et backend.

          Je m'intéresse particulièrement aux
          applications métier, aux tableaux de bord
          et aux plateformes qui facilitent
          le quotidien des utilisateurs.
        </p>

        <p>
          Grâce à mon stage professionnel et à mes
          projets personnels, j'ai acquis une expérience
          pratique en développement d'interfaces,
          conception et intégration d'API REST,
          gestion de données, débogage et
          déploiement d'applications web.
        </p>

        <p>
          J'ai notamment développé des applications
          avec
          <strong>Vue.js, Angular et React</strong>,
          en utilisant TypeScript pour structurer
          et fiabiliser mon code.

          Mes projets sont accessibles en ligne
          et plusieurs disposent d'un dépôt
          GitHub public.
        </p>

      </div>

      <!-- INDICATEURS -->

      <div class="intro-highlights">

        <div class="highlight-item">
          <span class="highlight-number">
            300 h
          </span>

          <span class="highlight-label">
            Stage professionnel
          </span>
        </div>

        <div class="highlight-item">
          <span class="highlight-number">
            4
          </span>

          <span class="highlight-label">
            Projets présentés dans mon portfolio
          </span>
        </div>

        <div class="highlight-item">
          <span class="highlight-number">
            3
          </span>

          <span class="highlight-label">
            Frameworks et bibliothèques frontend pratiqués
          </span>
        </div>

      </div>
    </div>

    <!-- =====================================
         TROIS CARTES PRINCIPALES
    ====================================== -->

    <div class="about-grid">

      <!-- ===================================
           CARTE 1 : COMPÉTENCES
      ==================================== -->

      <article class="about-card card">

        <div class="card-top">
          <span class="card-number">
            01
          </span>

          <span class="card-category">
            Développement
          </span>
        </div>

        <h3>
          Mon profil technique
        </h3>

        <p>
          Je développe des applications web
          modernes avec
          <strong>
            Vue.js 3, Angular, React et TypeScript
          </strong>
          pour la partie frontend.
        </p>

        <p>
          J'utilise les composants réutilisables,
          la gestion d'état, les formulaires,
          la navigation et les appels API
          pour créer des interfaces
          interactives et responsives.
        </p>

        <p>
          Pour le backend, je travaille avec
          <strong>Node.js et Express.js</strong>,
          notamment pour concevoir des API REST
          et communiquer avec des bases de données.
        </p>

        <p>
          Mes projets m'ont permis de pratiquer
          différentes approches :
          <strong>Angular Signals</strong>,
          les hooks React, les services API,
          les fonctions serverless Netlify
          et la persistance avec localStorage.
        </p>

        <h4 class="card-subtitle">
          Technologies pratiquées
        </h4>

        <div class="technology-list">
          <span
            v-for="tech in technologies"
            :key="tech"
            class="technology-badge"
          >
            {{ tech }}
          </span>
        </div>

      </article>

      <!-- ===================================
           CARTE 2 : EXPÉRIENCE
      ==================================== -->

      <article class="about-card card">

        <div class="card-top">
          <span class="card-number">
            02
          </span>

          <span class="card-category">
            Expérience
          </span>
        </div>

        <h3>
          Mon expérience professionnelle
        </h3>

        <div class="experience-heading">
          <strong>
            Tite Live SA
          </strong>

          <span>
            Stage professionnel · 300 heures
          </span>
        </div>

        <p>
          J'ai effectué un stage en développement
          d'applications métier chez
          <strong>Tite Live SA à Mouscron</strong>,
          au sein d'un environnement professionnel.
        </p>

        <p>
          Cette expérience m'a permis de travailler
          avec
          <strong>
            Vue.js, TypeScript,
            Node.js et Express.js
          </strong>,
          et d'approfondir ma compréhension
          des API REST et des bases de données
          <strong>MySQL et Firebird</strong>.
        </p>

        <p>
          J'ai également renforcé mes méthodes
          de travail : lecture et compréhension
          du code existant, recherche d'erreurs,
          tests, organisation des fonctionnalités
          et résolution de problèmes techniques.
        </p>

        <h4 class="card-subtitle">
          Outils utilisés et pratiqués
        </h4>

        <div class="technology-list">
          <span
            v-for="outil in outils"
            :key="outil"
            class="technology-badge secondary"
          >
            {{ outil }}
          </span>
        </div>

      </article>

      <!-- ===================================
           CARTE 3 : PROJETS
      ==================================== -->

      <article class="about-card card">

        <div class="card-top">
          <span class="card-number">
            03
          </span>

          <span class="card-category">
            Réalisations
          </span>
        </div>

        <h3>
          Mes projets personnels
        </h3>

        <p>
          Je développe des projets concrets
          pour approfondir mes compétences,
          découvrir différentes architectures
          et enrichir mon portfolio.
        </p>

        <div class="projects-mini-list">

          <a
            v-for="projet in projets"
            :key="projet.nom"
            :href="projet.lien"
            target="_blank"
            rel="noopener noreferrer"
            class="mini-project"
            :aria-label="`Découvrir le projet ${projet.nom}`"
          >

            <div class="mini-project-heading">
              <strong>
                {{ projet.nom }}
              </strong>

              <span
                class="project-arrow"
                aria-hidden="true"
              >
                ↗
              </span>
            </div>

            <span class="mini-project-stack">
              {{ projet.technologie }}
            </span>

            <p>
              {{ projet.description }}
            </p>

          </a>
        </div>

        <p class="privacy-note">
          Les démonstrations présentées
          sont des projets personnels ou de
          démonstration et ne donnent pas
          accès aux données confidentielles
          des environnements professionnels.
        </p>

      </article>

    </div>

    <!-- =====================================
         OBJECTIF PROFESSIONNEL
    ====================================== -->

    <div class="about-objective">

      <div class="objective-content">

        <span class="objective-label">
          Mon objectif professionnel
        </span>

        <h3>
          Rejoindre une équipe de développement
          et continuer à progresser.
        </h3>

        <p>
          Je recherche une opportunité en tant que
          <strong>
            développeur web junior,
            frontend ou fullstack
          </strong>,
          afin de mettre mes compétences en pratique,
          contribuer à des projets concrets
          et évoluer auprès de développeurs expérimentés.
        </p>

        <p>
          Mes réalisations avec
          <strong>
            Vue.js, Angular et React
          </strong>
          illustrent ma capacité à découvrir
          différents environnements techniques,
          intégrer des services externes
          et mener des projets jusqu'à leur
          déploiement en ligne.
        </p>

      </div>

      <a
        href="#contact"
        class="objective-button"
        aria-label="Accéder à la section contact"
      >
        Me contacter

        <span aria-hidden="true">
          ↗
        </span>
      </a>

    </div>

  </section>
</template>

<style scoped>
/* ==========================================
   SECTION ABOUT
========================================== */

.about-section {
  position: relative;
}

/* ==========================================
   INTRODUCTION
========================================== */

.about-intro {
  display: grid;
  grid-template-columns:
    minmax(0, 1.5fr)
    minmax(260px, 1fr);
  align-items: center;
  gap: 36px;

  margin-bottom: 28px;
  padding: 32px;

  border: 1px solid var(--border-color, #334155);
  border-radius: 20px;

  background: linear-gradient(
    135deg,
    rgba(139, 92, 246, 0.09),
    rgba(139, 92, 246, 0.02)
  );
}

.intro-content {
  min-width: 0;
}

.intro-label,
.objective-label {
  display: inline-block;
  margin-bottom: 12px;

  color: #a78bfa;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 1.2px;
  text-transform: uppercase;
}

.intro-content h3 {
  margin: 0 0 20px;
  color: var(--text-primary, #f8fafc);
  font-size: clamp(1.4rem, 2.5vw, 2rem);
  line-height: 1.35;
}

.intro-content h3 span {
  color: #a78bfa;
}

.intro-content p {
  margin: 0 0 14px;
  color: var(--text-muted, #94a3b8);
  font-size: 0.95rem;
  line-height: 1.85;
}

.intro-content p:last-child {
  margin-bottom: 0;
}

.intro-content strong {
  color: var(--text-primary, #f8fafc);
  font-weight: 600;
}

/* ==========================================
   INDICATEURS
========================================== */

.intro-highlights {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
}

.highlight-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;

  min-height: 120px;
  padding: 18px;

  background: rgba(15, 23, 42, 0.55);
  border: 1px solid rgba(139, 92, 246, 0.18);
  border-radius: 14px;
}

.highlight-item:first-child {
  grid-column: 1 / -1;
}

.highlight-number {
  color: #c4b5fd;
  font-size: 2rem;
  font-weight: 800;
  line-height: 1.1;
}

.highlight-label {
  color: var(--text-muted, #94a3b8);
  font-size: 0.82rem;
  line-height: 1.5;
}

/* ==========================================
   GRILLE PRINCIPALE
========================================== */

.about-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  align-items: stretch;
  gap: 22px;
}

/* ==========================================
   CARTES
========================================== */

.about-card {
  display: flex;
  flex-direction: column;
  gap: 16px;

  min-width: 0;
  height: 100%;
  padding: 28px;

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    border-color 0.25s ease;
}

.about-card:hover {
  transform: translateY(-5px);
  border-color: rgba(139, 92, 246, 0.4);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
}

/* ==========================================
   EN-TÊTE DES CARTES
========================================== */

.card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 4px;
}

.card-number {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 46px;
  height: 46px;

  border-radius: 12px;
  background: rgba(139, 92, 246, 0.12);
  border: 1px solid rgba(139, 92, 246, 0.2);

  color: #a78bfa;
  font-size: 0.95rem;
  font-weight: 700;
}

.card-category {
  padding: 7px 12px;

  border-radius: 999px;
  background: rgba(139, 92, 246, 0.08);
  border: 1px solid rgba(139, 92, 246, 0.17);

  color: #c4b5fd;
  font-size: 0.72rem;
  font-weight: 600;
}

/* ==========================================
   TITRES ET TEXTES
========================================== */

.about-card h3 {
  margin: 0;
  color: var(--text-primary, #f8fafc);
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 1.4;
}

.about-card h4 {
  margin: 6px 0 0;
}

.card-subtitle {
  color: var(--text-primary, #f8fafc);
  font-size: 0.86rem;
  font-weight: 700;
}

.about-card p {
  margin: 0;
  color: var(--text-muted, #94a3b8);
  font-size: 0.93rem;
  line-height: 1.8;
}

.about-card strong {
  color: var(--text-primary, #f8fafc);
  font-weight: 600;
}

/* ==========================================
   BADGES TECHNOLOGIES
========================================== */

.technology-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 2px;
}

.technology-badge {
  display: inline-flex;
  align-items: center;
  padding: 7px 11px;

  background: rgba(139, 92, 246, 0.1);
  border: 1px solid rgba(139, 92, 246, 0.22);
  border-radius: 8px;

  color: #c4b5fd;
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 1.35;
}

.technology-badge.secondary {
  background: rgba(56, 189, 248, 0.07);
  border-color: rgba(56, 189, 248, 0.18);
  color: #7dd3fc;
}

/* ==========================================
   EXPÉRIENCE PROFESSIONNELLE
========================================== */

.experience-heading {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 14px 16px;

  background: rgba(139, 92, 246, 0.07);
  border-left: 3px solid #8b5cf6;
  border-radius: 0 10px 10px 0;
}

.experience-heading strong {
  color: var(--text-primary, #f8fafc);
  font-size: 0.94rem;
}

.experience-heading span {
  color: var(--text-muted, #94a3b8);
  font-size: 0.8rem;
}

/* ==========================================
   MINI-CARTES PROJETS
========================================== */

.projects-mini-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.mini-project {
  display: flex;
  flex-direction: column;
  gap: 7px;
  padding: 15px;

  border: 1px solid rgba(139, 92, 246, 0.2);
  border-radius: 12px;
  background: rgba(139, 92, 246, 0.055);

  text-decoration: none;

  transition:
    background 0.2s ease,
    border-color 0.2s ease,
    transform 0.2s ease;
}

.mini-project:hover {
  background: rgba(139, 92, 246, 0.12);
  border-color: rgba(139, 92, 246, 0.45);
  transform: translateY(-2px);
}

.mini-project:focus-visible {
  outline: 2px solid #a78bfa;
  outline-offset: 3px;
}

.mini-project-heading {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
}

.mini-project-heading strong {
  font-size: 0.88rem;
}

.project-arrow {
  flex-shrink: 0;
  color: #a78bfa;
  font-size: 1.1rem;
  font-weight: 700;
}

.mini-project-stack {
  color: #a78bfa;
  font-size: 0.73rem;
  font-weight: 600;
}

.mini-project p {
  margin: 0;
  color: var(--text-muted, #94a3b8);
  font-size: 0.82rem;
  line-height: 1.65;
}

.privacy-note {
  margin-top: auto !important;
  padding-top: 14px;
  border-top: 1px solid rgba(148, 163, 184, 0.15);
  font-size: 0.8rem !important;
  font-style: italic;
}

/* ==========================================
   OBJECTIF PROFESSIONNEL
========================================== */

.about-objective {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;

  margin-top: 28px;
  padding: 30px 32px;

  background: linear-gradient(
    135deg,
    rgba(139, 92, 246, 0.13),
    rgba(15, 23, 42, 0.25)
  );

  border: 1px solid rgba(139, 92, 246, 0.25);
  border-radius: 18px;
}

.objective-content {
  max-width: 750px;
}

.objective-content h3 {
  margin: 0 0 14px;
  color: var(--text-primary, #f8fafc);
  font-size: clamp(1.25rem, 2.5vw, 1.65rem);
  line-height: 1.4;
}

.objective-content p {
  margin: 0 0 12px;
  color: var(--text-muted, #94a3b8);
  font-size: 0.92rem;
  line-height: 1.8;
}

.objective-content p:last-child {
  margin-bottom: 0;
}

.objective-content strong {
  color: var(--text-primary, #f8fafc);
  font-weight: 600;
}

/* ==========================================
   BOUTON CONTACT
========================================== */

.objective-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  flex-shrink: 0;

  padding: 13px 20px;
  color: #ffffff;
  background: #7c3aed;

  border: 1px solid #8b5cf6;
  border-radius: 10px;

  font-size: 0.88rem;
  font-weight: 700;
  text-decoration: none;
  white-space: nowrap;

  transition:
    background 0.2s ease,
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.objective-button:hover {
  background: #8b5cf6;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(124, 58, 237, 0.22);
}

.objective-button:focus-visible {
  outline: 2px solid #c4b5fd;
  outline-offset: 3px;
}

/* ==========================================
   RESPONSIVE TABLETTE
========================================== */

@media (max-width: 1050px) {
  .about-intro {
    grid-template-columns: 1fr;
  }

  .intro-highlights {
    grid-template-columns:
      repeat(3, minmax(0, 1fr));
  }

  .highlight-item:first-child {
    grid-column: auto;
  }

  .about-grid {
    grid-template-columns:
      repeat(2, minmax(0, 1fr));
  }

  .about-card:last-child {
    grid-column: 1 / -1;
  }
}

/* ==========================================
   RESPONSIVE SMARTPHONE
========================================== */

@media (max-width: 680px) {
  .about-intro {
    padding: 22px;
    gap: 24px;
  }

  .intro-highlights {
    grid-template-columns: 1fr;
  }

  .highlight-item {
    min-height: 90px;
  }

  .about-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .about-card {
    padding: 22px;
  }

  .about-card:last-child {
    grid-column: auto;
  }

  .about-card h3 {
    font-size: 1.1rem;
  }

  .about-card p {
    font-size: 0.92rem;
    line-height: 1.75;
  }

  .about-objective {
    flex-direction: column;
    align-items: flex-start;
    gap: 22px;
    padding: 24px 22px;
  }

  .objective-button {
    width: 100%;
  }
}

/* ==========================================
   ACCESSIBILITÉ
========================================== */

@media (prefers-reduced-motion: reduce) {
  .about-card,
  .mini-project,
  .objective-button {
    transition: none;
  }

  .about-card:hover,
  .mini-project:hover,
  .objective-button:hover {
    transform: none;
  }
}
</style>
