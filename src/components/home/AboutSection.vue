
<script setup lang="ts">
import SectionTitle from '../layout/SectionTitle.vue'

// ==========================================
// COMPÉTENCES FRONTEND
// ==========================================

const frameworksFrontend = [
  {
    nom: 'Vue.js 3',
    description: 'Business Dashboard et DjiCitoyen',
  },
  {
    nom: 'Angular',
    description: 'Gestionnaire de candidatures',
  },
  {
    nom: 'React',
    description: 'TravelExplore',
  },
]

// ==========================================
// TECHNOLOGIES PRATIQUÉES
// ==========================================

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
  'React Router',
  'Angular Signals',
  'RxJS',
  'React Hooks',
  'Node.js',
  'Express.js',
  'API REST',
  'MySQL',
  'Git',
  'GitHub',
]

// ==========================================
// OUTILS
// ==========================================

const outils = [
  'Visual Studio Code',
  'Postman',
  'DBeaver',
  'Git Bash',
  'Netlify',
  'Render',
  'Vite',
  'npm',
]

// ==========================================
// PROJETS RÉALISÉS
// ==========================================

const projets = [
  {
    nom: 'Business Dashboard',
    technologie:
      'Vue.js 3 · TypeScript · Node.js · Express',
    description:
      'Application métier fullstack permettant la recherche de produits par EAN/ISBN et la supervision de serveurs fictifs. Architecture frontend/backend avec API REST.',
    lien:
      'https://business-dashboardd.netlify.app/',
  },
  {
    nom: 'DjiCitoyen',
    technologie:
      'Vue.js 3 · TypeScript · Express · MySQL',
    description:
      'Plateforme de démarches administratives avec portail citoyen, prise de rendez-vous, suivi des demandes, authentification et gestion des rôles agent et administrateur.',
    lien:
      'https://djicitoyen.netlify.app/',
  },
  {
    nom: 'Gestionnaire de candidatures',
    technologie:
      'Angular · TypeScript · Signals · RxJS',
    description:
      'Application de suivi des candidatures avec formulaires réactifs, statistiques, graphiques, recherche, filtres, gestion des statuts, export CSV et sauvegarde locale.',
    lien:
      'https://gestionnaire-des-candidatures.netlify.app/',
  },
  {
    nom: 'TravelExplore',
    technologie:
      'React · TypeScript · Vite · Netlify Functions',
    description:
      'Application touristique exploitant Wikipédia, Wikimedia et Unsplash. Recherche de destinations, gestion des favoris, création d’itinéraires, sauvegarde locale et export TXT.',
    lien:
      'https://travelexplore-react.netlify.app/',
  },
]
</script>

<template>
  <section
    id="about"
    class="section about-section"
  >
    <!-- =====================================
         EN-TÊTE
    ====================================== -->

    <SectionTitle
      eyebrow="À propos de moi"
      title="Développeur Web Fullstack Junior"
      description="Je développe des applications web modernes avec Vue.js, Angular, React, TypeScript, Node.js et Express. Mes réalisations couvrent le frontend, les API REST, la gestion des données et le déploiement."
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
          je développe mes compétences en
          conception d'applications web
          frontend et backend.
        </p>

        <p>
          Je m'intéresse particulièrement
          aux applications métier, aux
          tableaux de bord, aux plateformes
          administratives et aux services
          numériques utiles aux utilisateurs.
        </p>

        <p>
          Grâce à mon stage professionnel
          et à mes projets personnels,
          j'ai acquis une expérience pratique
          dans le développement d'interfaces,
          l'intégration d'API REST,
          la manipulation de données,
          le débogage et le déploiement.
        </p>

        <p>
          J'ai développé des applications
          avec trois technologies frontend :
          <strong>
            Vue.js 3, Angular et React
          </strong>.
          J'utilise principalement
          <strong>TypeScript</strong>
          pour structurer et fiabiliser
          mes applications.
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
            Projets web présentés
          </span>
        </div>

        <div class="highlight-item">
          <span class="highlight-number">
            3
          </span>

          <span class="highlight-label">
            Technologies frontend majeures
          </span>
        </div>
      </div>
    </div>

    <!-- =====================================
         FRAMEWORKS FRONTEND
    ====================================== -->

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
          J'ai mis en pratique Vue.js,
          Angular et React au travers
          d'applications distinctes,
          avec des architectures et
          des fonctionnalités différentes.
        </p>
      </div>

      <div class="frontend-frameworks">
        <article
          v-for="(framework, index) in frameworksFrontend"
          :key="framework.nom"
          class="framework-card"
        >
          <span class="framework-number">
            {{ String(index + 1).padStart(2, '0') }}
          </span>

          <h4>
            {{ framework.nom }}
          </h4>

          <p>
            {{ framework.description }}
          </p>
        </article>
      </div>
    </div>

    <!-- =====================================
         TROIS CARTES PRINCIPALES
    ====================================== -->

    <div class="about-grid">

      <!-- CARTE 1 : PROFIL TECHNIQUE -->

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
          Je conçois des interfaces web
          interactives et responsives
          avec
          <strong>
            Vue.js 3, Angular,
            React et TypeScript
          </strong>.
        </p>

        <p>
          Mes projets utilisent des
          composants réutilisables,
          des systèmes de navigation,
          des formulaires, des services API
          et différentes méthodes
          de gestion d'état.
        </p>

        <p>
          J'ai notamment pratiqué
          <strong>
            Pinia, Angular Signals,
            RxJS et les React Hooks
          </strong>.
        </p>

        <p>
          Pour le backend,
          je travaille avec
          <strong>
            Node.js et Express.js
          </strong>
          afin de créer et utiliser
          des API REST et communiquer
          avec les bases de données.
        </p>

        <p>
          J'ai également utilisé
          les
          <strong>
            fonctions serverless Netlify
          </strong>
          pour intégrer les API Wikipédia,
          Wikimedia et Unsplash
          dans TravelExplore.
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

      <!-- CARTE 2 : EXPÉRIENCE -->

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
          J'ai effectué un stage
          en développement d'applications
          métier chez
          <strong>
            Tite Live SA à Mouscron
          </strong>.
        </p>

        <p>
          Cette expérience m'a permis
          de travailler avec
          <strong>
            Vue.js, TypeScript,
            Node.js et Express.js
          </strong>,
          ainsi qu'avec des API REST
          et des bases de données
          <strong>
            MySQL et Firebird
          </strong>.
        </p>

        <p>
          J'ai travaillé sur la compréhension
          du code existant, la recherche
          d'erreurs, les tests,
          l'organisation des fonctionnalités
          et la résolution de problèmes.
        </p>

        <p>
          Ce stage m'a permis de découvrir
          les exigences du développement
          en environnement professionnel
          et de renforcer mon autonomie.
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

      <!-- CARTE 3 : RÉALISATIONS -->

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
          Je réalise des applications
          complètes pour pratiquer
          différentes technologies,
          découvrir de nouvelles
          architectures et enrichir
          mon portfolio professionnel.
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
          Les démonstrations sont
          des projets personnels
          ou de présentation.
          Elles ne donnent pas accès
          aux données confidentielles
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
          Je recherche une opportunité
          en tant que
          <strong>
            développeur web junior,
            frontend ou fullstack
          </strong>,
          pour mettre mes compétences
          en pratique et contribuer
          à des projets concrets.
        </p>

        <p>
          Mes réalisations avec
          <strong>
            Vue.js, Angular et React
          </strong>
          montrent ma capacité à
          m'adapter à différents
          environnements techniques,
          intégrer des API et mener
          des applications jusqu'à
          leur déploiement.
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

  border: 1px solid
    var(--border-color, #334155);
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
  color:
    var(--text-primary, #f8fafc);
  font-size:
    clamp(1.4rem, 2.5vw, 2rem);
  line-height: 1.35;
}

.intro-content h3 span {
  color: #a78bfa;
}

.intro-content p {
  margin: 0 0 14px;
  color:
    var(--text-muted, #94a3b8);
  font-size: 0.95rem;
  line-height: 1.85;
}

.intro-content p:last-child {
  margin-bottom: 0;
}

.intro-content strong {
  color:
    var(--text-primary, #f8fafc);
  font-weight: 600;
}

/* ==========================================
   INDICATEURS
========================================== */

.intro-highlights {
  display: grid;
  grid-template-columns:
    repeat(2, minmax(0, 1fr));
  gap: 14px;
}

.highlight-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;

  min-height: 120px;
  padding: 18px;

  background:
    rgba(15, 23, 42, 0.55);
  border: 1px solid
    rgba(139, 92, 246, 0.18);
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
  color:
    var(--text-muted, #94a3b8);
  font-size: 0.82rem;
  line-height: 1.5;
}

/* ==========================================
   SECTION FRAMEWORKS FRONTEND
========================================== */

.frontend-section {
  margin-bottom: 28px;
  padding: 30px 32px;

  background: linear-gradient(
    135deg,
    rgba(139, 92, 246, 0.13),
    rgba(15, 23, 42, 0.3)
  );

  border: 1px solid
    rgba(139, 92, 246, 0.25);
  border-radius: 20px;
}

.frontend-heading h3 {
  margin: 0 0 12px;

  color:
    var(--text-primary, #f8fafc);
  font-size:
    clamp(1.35rem, 2.5vw, 1.9rem);
  line-height: 1.35;
}

.frontend-heading h3 span {
  color: #a78bfa;
}

.frontend-heading > p {
  max-width: 750px;
  margin: 0;

  color:
    var(--text-muted, #94a3b8);
  font-size: 0.94rem;
  line-height: 1.8;
}

.frontend-frameworks {
  display: grid;
  grid-template-columns:
    repeat(3, minmax(0, 1fr));
  gap: 16px;

  margin-top: 26px;
}

.framework-card {
  min-width: 0;
  padding: 22px;

  border: 1px solid
    rgba(139, 92, 246, 0.24);
  border-radius: 14px;

  background:
    rgba(15, 23, 42, 0.45);

  transition:
    transform 0.25s ease,
    border-color 0.25s ease;
}

.framework-card:hover {
  transform: translateY(-4px);
  border-color:
    rgba(167, 139, 250, 0.55);
}

.framework-number {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 39px;
  height: 39px;

  margin-bottom: 19px;

  border-radius: 10px;
  background:
    rgba(139, 92, 246, 0.14);

  color: #c4b5fd;
  font-size: 0.85rem;
  font-weight: 800;
}

.framework-card h4 {
  margin: 0 0 9px;

  color:
    var(--text-primary, #f8fafc);
  font-size: 1.18rem;
}

.framework-card p {
  margin: 0;

  color:
    var(--text-muted, #94a3b8);
  font-size: 0.85rem;
  line-height: 1.7;
}

/* ==========================================
   GRILLE PRINCIPALE
========================================== */

.about-grid {
  display: grid;
  grid-template-columns:
    repeat(3, minmax(0, 1fr));
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
  border-color:
    rgba(139, 92, 246, 0.4);
  box-shadow:
    0 12px 30px rgba(0, 0, 0, 0.12);
}

/* ==========================================
   EN-TÊTES DES CARTES
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
  background:
    rgba(139, 92, 246, 0.12);
  border: 1px solid
    rgba(139, 92, 246, 0.2);

  color: #a78bfa;
  font-size: 0.95rem;
  font-weight: 700;
}

.card-category {
  padding: 7px 12px;

  border-radius: 999px;
  background:
    rgba(139, 92, 246, 0.08);
  border: 1px solid
    rgba(139, 92, 246, 0.17);

  color: #c4b5fd;
  font-size: 0.72rem;
  font-weight: 600;
}

/* ==========================================
   TITRES ET TEXTES
========================================== */

.about-card h3 {
  margin: 0;

  color:
    var(--text-primary, #f8fafc);
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 1.4;
}

.about-card h4 {
  margin: 6px 0 0;
}

.card-subtitle {
  color:
    var(--text-primary, #f8fafc);
  font-size: 0.86rem;
  font-weight: 700;
}

.about-card p {
  margin: 0;

  color:
    var(--text-muted, #94a3b8);
  font-size: 0.93rem;
  line-height: 1.8;
}

.about-card strong {
  color:
    var(--text-primary, #f8fafc);
  font-weight: 600;
}

/* ==========================================
   TECHNOLOGIES
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

  background:
    rgba(139, 92, 246, 0.1);
  border: 1px solid
    rgba(139, 92, 246, 0.22);
  border-radius: 8px;

  color: #c4b5fd;
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 1.35;
}

.technology-badge.secondary {
  background:
    rgba(56, 189, 248, 0.07);
  border-color:
    rgba(56, 189, 248, 0.18);
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

  background:
    rgba(139, 92, 246, 0.07);
  border-left:
    3px solid #8b5cf6;
  border-radius:
    0 10px 10px 0;
}

.experience-heading strong {
  color:
    var(--text-primary, #f8fafc);
  font-size: 0.94rem;
}

.experience-heading span {
  color:
    var(--text-muted, #94a3b8);
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

  border: 1px solid
    rgba(139, 92, 246, 0.2);
  border-radius: 12px;

  background:
    rgba(139, 92, 246, 0.055);
  text-decoration: none;

  transition:
    background 0.2s ease,
    border-color 0.2s ease,
    transform 0.2s ease;
}

.mini-project:hover {
  background:
    rgba(139, 92, 246, 0.12);
  border-color:
    rgba(139, 92, 246, 0.45);
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

  color:
    var(--text-muted, #94a3b8);
  font-size: 0.82rem;
  line-height: 1.65;
}

.privacy-note {
  margin-top: auto !important;
  padding-top: 14px;

  border-top: 1px solid
    rgba(148, 163, 184, 0.15);

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

  border: 1px solid
    rgba(139, 92, 246, 0.25);
  border-radius: 18px;
}

.objective-content {
  max-width: 750px;
}

.objective-content h3 {
  margin: 0 0 14px;

  color:
    var(--text-primary, #f8fafc);
  font-size:
    clamp(1.25rem, 2.5vw, 1.65rem);
  line-height: 1.4;
}

.objective-content p {
  margin: 0 0 12px;

  color:
    var(--text-muted, #94a3b8);
  font-size: 0.92rem;
  line-height: 1.8;
}

.objective-content p:last-child {
  margin-bottom: 0;
}

.objective-content strong {
  color:
    var(--text-primary, #f8fafc);
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

  box-shadow:
    0 6px 20px rgba(124, 58, 237, 0.22);
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

  .frontend-frameworks {
    grid-template-columns:
      repeat(2, minmax(0, 1fr));
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

  .frontend-section {
    padding: 23px;
  }

  .frontend-frameworks {
    grid-template-columns: 1fr;
  }

  .framework-card {
    padding: 19px;
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
  .framework-card,
  .objective-button {
    transition: none;
  }

  .about-card:hover,
  .mini-project:hover,
  .framework-card:hover,
  .objective-button:hover {
    transform: none;
  }
}
</style>
