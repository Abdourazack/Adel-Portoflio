
<script setup lang="ts">
import SectionTitle from '../layout/SectionTitle.vue'
</script>

<template>
  <section id="about" class="section about-section">
    <SectionTitle
      eyebrow="À propos de moi"
      title="Développeur Web Fullstack Junior"
      description="Je développe des applications web modernes, des interfaces intuitives et des solutions numériques adaptées aux besoins des utilisateurs et des entreprises."
    />

    <div class="about-grid">

      <!-- CARTE 1 : MON PROFIL -->
      <article class="about-card card">
        <div class="card-number">01</div>

        <h3>Mon profil</h3>

        <p>
          Formé en
          <strong>informatique de gestion</strong>,
          je me spécialise dans le développement
          d'applications web frontend et backend.
        </p>

        <p>
          Ma stack principale repose sur
          <strong>Vue.js 3, TypeScript, Node.js et Express.js</strong>.
          Je l'utilise pour concevoir des interfaces
          responsives, des dashboards interactifs
          et des API REST.
        </p>

        <p>
          Je continue à développer mes compétences
          et souhaite également approfondir
          <strong>Angular et React</strong>
          à travers de nouveaux projets.
        </p>
      </article>

      <!-- CARTE 2 : EXPÉRIENCE PROFESSIONNELLE -->
      <article class="about-card card">
        <div class="card-number">02</div>

        <h3>Mon expérience professionnelle</h3>

        <p>
          J'ai effectué un
          <strong>stage professionnel de 300 heures</strong>
          chez <strong>Tite Live SA</strong>,
          à Mouscron, dans un environnement
          de développement d'applications métier.
        </p>

        <p>
          Cette expérience m'a permis de travailler
          avec des technologies telles que
          <strong>Vue.js, TypeScript, Node.js et Express.js</strong>,
          et de me familiariser avec les API REST
          et les bases de données
          <strong>MySQL et Firebird</strong>.
        </p>

        <p>
          J'ai également utilisé des outils comme
          <strong>Postman et DBeaver</strong>,
          tout en renforçant mes compétences en
          débogage, organisation du code
          et résolution de problèmes.
        </p>
      </article>

      <!-- CARTE 3 : PROJETS ET OBJECTIFS -->
      <article class="about-card card">
        <div class="card-number">03</div>

        <h3>Mes projets et mes objectifs</h3>

        <p>
          Je réalise des projets personnels
          pour consolider mes compétences
          et développer des applications
          répondant à des besoins concrets.
        </p>

        <p>
          <strong>Business Dashboard Suite</strong>
          regroupe une interface de recherche
          de produits et un module de supervision
          de serveurs fictifs.
        </p>

        <p>
          <strong>DjiCitoyen</strong> est une plateforme
          dédiée aux démarches administratives,
          avec un portail citoyen, des rendez-vous
          et des espaces de gestion.
        </p>

        <p>
          Je respecte la confidentialité des
          environnements professionnels :
          mes démonstrations ne contiennent
          aucune donnée privée d'entreprise.
        </p>

        <p>
          Mon objectif est d'intégrer une équipe
          de développement, contribuer à des
          projets concrets et continuer
          à progresser professionnellement.
        </p>
      </article>

    </div>
  </section>
</template>

<style scoped>
.about-section {
  position: relative;
}

/* GRILLE DES CARTES */

.about-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
  align-items: stretch;
}

/* CARTES */

.about-card {
  display: flex;
  flex-direction: column;
  gap: 14px;
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

/* NUMÉROS */

.card-number {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 46px;
  height: 46px;
  margin-bottom: 6px;

  border-radius: 12px;
  background: rgba(139, 92, 246, 0.12);
  border: 1px solid rgba(139, 92, 246, 0.2);

  color: #a78bfa;
  font-size: 0.95rem;
  font-weight: 700;
}

/* TITRES */

.about-card h3 {
  margin: 0;
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 1.4;
}

/* PARAGRAPHES */

.about-card p {
  margin: 0;
  color: var(--text-muted);
  font-size: 0.95rem;
  line-height: 1.8;
}

/* MOTS IMPORTANTS */

.about-card strong {
  color: var(--text-primary, #a78bfa);
  font-weight: 600;
}

/* TABLETTES */

@media (max-width: 1050px) {
  .about-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .about-card:last-child {
    grid-column: 1 / -1;
  }
}

/* SMARTPHONES */

@media (max-width: 680px) {
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
}

/* ACCESSIBILITÉ */

@media (prefers-reduced-motion: reduce) {
  .about-card {
    transition: none;
  }

  .about-card:hover {
    transform: none;
  }
}
</style>
