
<script setup lang="ts">
import SectionTitle from '../layout/SectionTitle.vue'

const frameworksFrontend = [
  {
    nom: 'Vue.js 3',
    type: 'Framework frontend',
    projets: 'Business Dashboard et DjiCitoyen',
    outils: 'Composition API, Pinia, Vue Router, TypeScript',
  },
  {
    nom: 'Angular',
    type: 'Framework frontend',
    projets: 'Gestionnaire de candidatures',
    outils: 'Signals, RxJS, formulaires réactifs, TypeScript',
  },
  {
    nom: 'React',
    type: 'Bibliothèque frontend',
    projets: 'TravelExplore',
    outils: 'React Hooks, React Router, Vite, TypeScript',
  },
]

const technologies = [
  'Vue.js 3',
  'Angular',
  'React',
  'TypeScript',
  'JavaScript',
  'HTML5',
  'CSS3',
  'Vite',
  'Pinia',
  'Vue Router',
  'Angular Signals',
  'RxJS',
  'React Hooks',
  'React Router',
  'Node.js',
  'Express.js',
  'API REST',
  'MySQL',
  'Git',
  'GitHub',
]

const outils = [
  'VS Code',
  'Postman',
  'DBeaver',
  'Git Bash',
  'npm',
  'Netlify',
  'Render',
]

const projets = [
  {
    nom: 'Business Dashboard',
    technologie: 'Vue.js 3 · TypeScript · Node.js · Express',
    description:
      'Application métier fullstack avec recherche de produits par EAN/ISBN, supervision de serveurs fictifs et communication avec une API REST.',
    lien: 'https://business-dashboardd.netlify.app/',
  },
  {
    nom: 'DjiCitoyen',
    technologie: 'Vue.js 3 · TypeScript · Express · MySQL',
    description:
      'Plateforme administrative proposant un portail citoyen, des rendez-vous, un suivi des demandes et des interfaces agent et administrateur.',
    lien: 'https://djicitoyen.netlify.app/',
  },
  {
    nom: 'Gestionnaire de candidatures',
    technologie: 'Angular · TypeScript · Signals · RxJS',
    description:
      'Application de suivi des candidatures avec statistiques, graphiques, filtres, formulaires réactifs, export CSV et sauvegarde locale.',
    lien: 'https://gestionnaire-des-candidatures.netlify.app/',
  },
  {
    nom: 'TravelExplore',
    technologie: 'React · TypeScript · Vite · Netlify Functions',
    description:
      'Application de découverte touristique avec les API Wikipédia et Unsplash, favoris, itinéraires personnalisés, sauvegarde locale et export TXT.',
    lien: 'https://travelexplore-react.netlify.app/',
  },
]
</script>

<template>
  <section
    id="about"
    class="section about-section"
  >
    <!-- EN-TÊTE -->

    <SectionTitle
      eyebrow="À propos de moi"
      title="Développeur Web Fullstack Junior"
      description="Développeur web junior formé aux technologies Vue.js 3, Angular, React, TypeScript, Node.js et Express.js. Je réalise des applications concrètes, des interfaces interactives et des solutions métier."
    />

    <!-- INTRODUCTION -->

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
          Actuellement en
          <strong>
            phase de finalisation de mon
            bachelier en informatique de gestion
          </strong>,
          je développe mes compétences
          dans la conception d'applications web,
          aussi bien en frontend qu'en backend.
        </p>

        <p>
          Mon cursus reste en cours de validation,
          avec le travail de fin d'études
          et les dernières obligations académiques
          à finaliser.
          J'ai néanmoins déjà effectué
          mon stage professionnel
          de 300 heures chez Tite Live SA.
        </p>

        <p>
          Mes projets personnels m'ont permis
          de travailler avec
          <strong>Vue.js 3, Angular et React</strong>,
          ainsi que TypeScript, Node.js,
          Express.js et les API REST.
        </p>

        <p>
          Je recherche actuellement une première
          opportunité professionnelle en tant que
          développeur web junior,
          frontend ou fullstack.
        </p>
      </div>

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
            {{ projets.length }}
          </span>
          <span class="highlight-label">
            Projets web présentés
          </span>
        </div>

        <div class="highlight-item">
          <span class="highlight-number">
            {{ frameworksFrontend.length }}
          </span>
          <span class="highlight-label">
            Technologies frontend principales
          </span>
        </div>
      </div>
    </div>

    <!-- FORMATION -->

    <div class="education-panel">
      <div>
        <span class="intro-label">
          Formation académique
        </span>

        <h3>
          Bachelier en informatique de gestion
        </h3>

        <p>
          Formation suivie à Mouscron.
          Compétences acquises en développement web,
          programmation, bases de données,
          réseaux et systèmes.
        </p>
      </div>

      <span class="education-status">
        En cours de finalisation
      </span>
    </div>

    <!-- TROIS TECHNOLOGIES FRONTEND -->

    <div class="frontend-section">
      <div class="frontend-heading">
        <span class="intro-label">
          Développement frontend
        </span>

        <h3>
          Trois technologies,
          <span>quatre projets concrets.</span>
        </h3>

        <p>
          J'ai pratiqué Vue.js, Angular et React
          dans différents projets web,
          avec TypeScript comme langage commun.
        </p>
      </div>

      <div class="frontend-frameworks">
        <article
          v-for="(framework, index) in frameworksFrontend"
          :key="framework.nom"
          class="framework-card"
        >
          <div class="framework-top">
            <span class="framework-number">
              {{ String(index + 1).padStart(2, '0') }}
            </span>

            <span class="framework-type">
              {{ framework.type }}
            </span>
          </div>

          <h4>{{ framework.nom }}</h4>

          <p class="framework-project">
            {{ framework.projets }}
          </p>

          <p>{{ framework.outils }}</p>
        </article>
      </div>
    </div>

    <!-- CARTES PRINCIPALES -->

    <div class="about-grid">

      <!-- PROFIL TECHNIQUE -->

      <article class="about-card card">
        <div class="card-top">
          <span class="card-number">01</span>
          <span class="card-category">
            Développement
          </span>
        </div>

        <h3>Mon profil technique</h3>

        <p>
          Je conçois des interfaces web
          modernes et responsives avec
          <strong>
            Vue.js 3, Angular, React
            et TypeScript.
          </strong>
        </p>

        <p>
          J'utilise notamment Pinia,
          Angular Signals, RxJS,
          les React Hooks et les systèmes
          de navigation propres à chaque framework.
        </p>

        <p>
          En backend, je travaille
          avec <strong>Node.js et Express.js</strong>
          pour créer des API REST et communiquer
          avec des bases de données.
        </p>

        <p>
          J'ai aussi intégré des API externes
          avec des fonctions serverless Netlify
          pour mon projet TravelExplore.
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

      <!-- EXPÉRIENCE -->

      <article class="about-card card">
        <div class="card-top">
          <span class="card-number">02</span>
          <span class="card-category">
            Expérience
          </span>
        </div>

        <h3>Mon expérience professionnelle</h3>

        <div class="experience-heading">
          <strong>Tite Live SA</strong>
          <span>
            Stage professionnel · 300 heures
          </span>
        </div>

        <p>
          J'ai effectué un stage en développement
          d'applications métier chez
          <strong>Tite Live SA à Mouscron</strong>.
        </p>

        <p>
          Cette expérience m'a permis de travailler
          avec Vue.js, TypeScript, Node.js,
          Express.js, des API REST et des bases
          de données MySQL et Firebird.
        </p>

        <p>
          J'ai participé à la compréhension
          du code existant, aux tests,
          au débogage et à l'amélioration
          de fonctionnalités d'applications métier.
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

      <!-- PROJETS -->

      <article class="about-card card">
        <div class="card-top">
          <span class="card-number">03</span>
          <span class="card-category">
            Réalisations
          </span>
        </div>

        <h3>Mes projets personnels</h3>

        <p>
          Quatre applications web développées
          pour approfondir mes compétences
          et présenter mon travail aux recruteurs.
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
              <strong>{{ projet.nom }}</strong>
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

            <p>{{ projet.description }}</p>
          </a>
        </div>

        <p class="privacy-note">
          Ces réalisations sont des projets
          personnels ou de démonstration.
          Elles n'exposent pas de données
          confidentielles d'entreprise.
        </p>
      </article>
    </div>

    <!-- OBJECTIF PROFESSIONNEL -->

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
          Je recherche un poste de
          <strong>
            développeur web junior,
            frontend ou fullstack
          </strong>,
          tout en poursuivant
          la finalisation de mon cursus.
        </p>

        <p>
          Mes projets en Vue.js, Angular et React
          démontrent ma capacité à apprendre,
          à intégrer des API et à déployer
          des applications fonctionnelles.
        </p>
      </div>

      <a
        href="#contact"
        class="objective-button"
        aria-label="Accéder à la section contact"
      >
        Me contacter
        <span aria-hidden="true">↗</span>
      </a>
    </div>
  </section>
</template>

<style scoped>
.about-section {
  position: relative;
  scroll-margin-top: 110px;
}

.about-intro {
  display: grid;
  grid-template-columns: minmax(0, 1.5fr) minmax(260px, 1fr);
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

.intro-content h3,
.education-panel h3 {
  margin: 0 0 18px;
  color: var(--text-primary, #f8fafc);
  font-size: clamp(1.4rem, 2.5vw, 2rem);
  line-height: 1.35;
}

.intro-content h3 span {
  color: #a78bfa;
}

.intro-content p,
.education-panel p {
  margin: 0 0 14px;
  color: var(--text-muted, #94a3b8);
  font-size: 0.95rem;
  line-height: 1.85;
}

.intro-content p:last-child,
.education-panel p:last-child {
  margin-bottom: 0;
}

.intro-content strong {
  color: var(--text-primary, #f8fafc);
  font-weight: 600;
}

/* CHIFFRES CLÉS */

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
}

.highlight-label {
  color: var(--text-muted, #94a3b8);
  font-size: 0.82rem;
  line-height: 1.5;
}

/* FORMATION */

.education-panel {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 28px;
  padding: 28px 32px;
  border: 1px solid rgba(139, 92, 246, 0.25);
  border-radius: 18px;
  background: rgba(139, 92, 246, 0.07);
}

.education-panel > div {
  max-width: 730px;
}

.education-panel h3 {
  font-size: 1.25rem;
}

.education-status {
  flex-shrink: 0;
  padding: 10px 14px;
  border: 1px solid rgba(167, 139, 250, 0.35);
  border-radius: 999px;
  background: rgba(139, 92, 246, 0.12);
  color: #ddd6fe;
  font-size: 0.8rem;
  font-weight: 700;
}

/* VUE / ANGULAR / REACT */

.frontend-section {
  margin-bottom: 28px;
  padding: 30px 32px;
  border: 1px solid rgba(139, 92, 246, 0.25);
  border-radius: 20px;
  background: linear-gradient(
    135deg,
    rgba(139, 92, 246, 0.13),
    rgba(15, 23, 42, 0.3)
  );
}

.frontend-heading h3 {
  margin: 0 0 12px;
  color: var(--text-primary, #f8fafc);
  font-size: clamp(1.35rem, 2.5vw, 1.9rem);
  line-height: 1.35;
}

.frontend-heading h3 span {
  color: #a78bfa;
}

.frontend-heading > p {
  max-width: 750px;
  margin: 0;
  color: var(--text-muted, #94a3b8);
  line-height: 1.8;
}

.frontend-frameworks {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
  margin-top: 26px;
}

.framework-card {
  min-width: 0;
  padding: 22px;
  border: 1px solid rgba(139, 92, 246, 0.24);
  border-radius: 14px;
  background: rgba(15, 23, 42, 0.45);
  transition: transform 0.25s ease, border-color 0.25s ease;
}

.framework-card:hover {
  transform: translateY(-4px);
  border-color: rgba(167, 139, 250, 0.55);
}

.framework-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 18px;
}

.framework-number {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 39px;
  height: 39px;
  border-radius: 10px;
  background: rgba(139, 92, 246, 0.14);
  color: #c4b5fd;
  font-size: 0.85rem;
  font-weight: 800;
}

.framework-type {
  color: #a78bfa;
  font-size: 0.7rem;
  font-weight: 600;
}

.framework-card h4 {
  margin: 0 0 10px;
  color: var(--text-primary, #f8fafc);
  font-size: 1.2rem;
}

.framework-project {
  margin: 0 0 10px;
  color: #c4b5fd;
  font-size: 0.9rem;
  font-weight: 600;
}

.framework-card p:last-child {
  margin: 0;
  color: var(--text-muted, #94a3b8);
  font-size: 0.84rem;
  line-height: 1.7;
}

/* CARTES PRINCIPALES */

.about-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
}

.about-card {
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-width: 0;
  height: 100%;
  padding: 28px;
  transition: transform 0.25s ease, border-color 0.25s ease;
}

.about-card:hover {
  transform: translateY(-5px);
  border-color: rgba(139, 92, 246, 0.4);
}

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
  border: 1px solid rgba(139, 92, 246, 0.2);
  border-radius: 12px;
  background: rgba(139, 92, 246, 0.12);
  color: #a78bfa;
  font-weight: 700;
}

.card-category {
  padding: 7px 12px;
  border: 1px solid rgba(139, 92, 246, 0.17);
  border-radius: 999px;
  background: rgba(139, 92, 246, 0.08);
  color: #c4b5fd;
  font-size: 0.72rem;
  font-weight: 600;
}

.about-card h3 {
  margin: 0;
  color: var(--text-primary, #f8fafc);
  font-size: 1.2rem;
}

.card-subtitle {
  margin: 6px 0 0;
  color: var(--text-primary, #f8fafc);
  font-size: 0.86rem;
}

.about-card p {
  margin: 0;
  color: var(--text-muted, #94a3b8);
  font-size: 0.93rem;
  line-height: 1.8;
}

.about-card strong {
  color: var(--text-primary, #f8fafc);
}

/* BADGES */

.technology-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.technology-badge {
  display: inline-flex;
  align-items: center;
  padding: 7px 11px;
  border: 1px solid rgba(139, 92, 246, 0.22);
  border-radius: 8px;
  background: rgba(139, 92, 246, 0.1);
  color: #c4b5fd;
  font-size: 0.75rem;
  font-weight: 600;
}

.technology-badge.secondary {
  border-color: rgba(56, 189, 248, 0.18);
  background: rgba(56, 189, 248, 0.07);
  color: #7dd3fc;
}

.experience-heading {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 14px 16px;
  border-left: 3px solid #8b5cf6;
  border-radius: 0 10px 10px 0;
  background: rgba(139, 92, 246, 0.07);
}

.experience-heading span {
  color: var(--text-muted, #94a3b8);
  font-size: 0.8rem;
}

/* PROJETS */

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
  transition: background 0.2s ease, transform 0.2s ease;
}

.mini-project:hover {
  background: rgba(139, 92, 246, 0.12);
  transform: translateY(-2px);
}

.mini-project:focus-visible {
  outline: 2px solid #a78bfa;
  outline-offset: 3px;
}

.mini-project-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

.mini-project-heading strong {
  font-size: 0.88rem;
}

.project-arrow,
.mini-project-stack {
  color: #a78bfa;
}

.mini-project-stack {
  font-size: 0.73rem;
  font-weight: 600;
}

.mini-project p {
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

/* OBJECTIF PROFESSIONNEL */

.about-objective {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  margin-top: 28px;
  padding: 30px 32px;
  border: 1px solid rgba(139, 92, 246, 0.25);
  border-radius: 18px;
  background: linear-gradient(
    135deg,
    rgba(139, 92, 246, 0.13),
    rgba(15, 23, 42, 0.25)
  );
}

.objective-content {
  max-width: 750px;
}

.objective-content h3 {
  margin: 0 0 14px;
  color: var(--text-primary, #f8fafc);
  font-size: clamp(1.25rem, 2.5vw, 1.65rem);
}

.objective-content p {
  margin: 0 0 12px;
  color: var(--text-muted, #94a3b8);
  line-height: 1.8;
}

.objective-content strong {
  color: var(--text-primary, #f8fafc);
}

.objective-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  flex-shrink: 0;
  padding: 13px 20px;
  border: 1px solid #8b5cf6;
  border-radius: 10px;
  background: #7c3aed;
  color: white;
  font-size: 0.88rem;
  font-weight: 700;
  text-decoration: none;
  transition: background 0.2s ease, transform 0.2s ease;
}

.objective-button:hover {
  background: #8b5cf6;
  transform: translateY(-2px);
}

/* RESPONSIVE */

@media (max-width: 1050px) {
  .about-intro {
    grid-template-columns: 1fr;
  }

  .intro-highlights {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .highlight-item:first-child {
    grid-column: auto;
  }

  .about-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .about-card:last-child {
    grid-column: 1 / -1;
  }
}

@media (max-width: 680px) {
  .about-intro,
  .frontend-section,
  .education-panel {
    padding: 22px;
  }

  .intro-highlights,
  .frontend-frameworks,
  .about-grid {
    grid-template-columns: 1fr;
  }

  .education-panel,
  .about-objective {
    flex-direction: column;
    align-items: flex-start;
  }

  .education-status {
    white-space: normal;
  }

  .about-card {
    padding: 22px;
  }

  .about-card:last-child {
    grid-column: auto;
  }

  .about-objective {
    padding: 24px 22px;
  }

  .objective-button {
    width: 100%;
  }
}

@media (prefers-reduced-motion: reduce) {
  .about-card,
  .framework-card,
  .mini-project,
  .objective-button {
    transition: none;
  }

  .about-card:hover,
  .framework-card:hover,
  .mini-project:hover,
  .objective-button:hover {
    transform: none;
  }
}
</style>
