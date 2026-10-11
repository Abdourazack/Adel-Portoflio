
<script setup lang="ts">
import { computed } from 'vue'
import { projects } from '../../data/projects'

// ==========================================
// COMPÉTENCES PRINCIPALES
// ==========================================

const mainSkills = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'TypeScript',
  'Vue.js 3',
  'Angular',
  'React',
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
  'SQL',
  'MySQL',
  'MariaDB',
  'Firebird',
  'MongoDB',
  'Python',
  'Git',
  'GitHub',
  'Postman',
  'Docker — notions',
  'Linux',
]

const highlightedSkills = [
  'Vue.js 3',
  'Angular',
  'React',
  'TypeScript',
  'Node.js',
  'Express.js',
]

// ==========================================
// CV TÉLÉCHARGEABLE
// Le PDF doit être dans le dossier public
// ==========================================

const cvFileName =
  'CV_Adel_Abdourazack_Developpeur_Web.pdf'

const cvUrl = `/${cvFileName}`

// ==========================================
// GESTION DES PROJETS
// ==========================================

function isPlannedProject(project: {
  type: string
  demoUrl: string
}) {
  const type = project.type.toLowerCase()

  return (
    type.includes('venir') ||
    type.includes('prévu') ||
    !project.demoUrl ||
    project.demoUrl === '#'
  )
}

const projectPreviews = computed(() =>
  projects.map((project) => ({
    ...project,
    isPlanned: isPlannedProject(project),
  }))
)

const existingProjectsCount = computed(() =>
  projectPreviews.value.filter(
    (project) => !project.isPlanned
  ).length
)

const plannedProjectsCount = computed(() =>
  projectPreviews.value.filter(
    (project) => project.isPlanned
  ).length
)

// ==========================================
// NAVIGATION
// ==========================================

function scrollToSection(id: string) {
  const section = document.getElementById(id)

  if (!section) return

  const reducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches

  section.scrollIntoView({
    behavior: reducedMotion ? 'auto' : 'smooth',
    block: 'start',
  })
}
</script>

<template>
  <section
    class="hero section"
    aria-labelledby="hero-title"
  >
    <!-- =====================================
         COLONNE GAUCHE
    ====================================== -->

    <div class="hero-content">

      <!-- DISPONIBILITÉ -->

      <div class="availability-badge">
        <span
          class="availability-dot"
          aria-hidden="true"
        ></span>

        À la recherche d'une opportunité junior
      </div>

      <!-- TITRE -->

      <p class="hero-eyebrow">
        DÉVELOPPEMENT WEB • FRONTEND & BACKEND
      </p>

      <h1
        id="hero-title"
        class="hero-title"
      >
        Développeur Web
        <span>Fullstack Junior</span>
      </h1>

      <!-- PRÉSENTATION -->

      <p class="hero-intro">
        Je transforme des besoins concrets en
        <strong>
          applications web modernes et fonctionnelles.
        </strong>
      </p>

      <p class="hero-description">
        Je développe des applications web,
        des interfaces responsives et des API REST.
        Ma stack principale repose sur Vue.js 3,
        TypeScript, Node.js et Express.js.
        J'ai également réalisé des projets
        avec Angular et React.
      </p>

      <!-- =====================================
           TROIS BOUTONS
      ====================================== -->

      <div class="hero-actions">

        <!-- VOIR MES PROJETS -->

        <button
          type="button"
          class="btn btn-primary"
          @click="scrollToSection('projects')"
        >
          Voir mes projets
          <span aria-hidden="true">↗</span>
        </button>

        <!-- ME CONTACTER -->

        <button
          type="button"
          class="btn btn-secondary"
          @click="scrollToSection('contact')"
        >
          Me contacter
          <span aria-hidden="true">→</span>
        </button>

        <!-- TÉLÉCHARGER MON CV -->

        <a
          :href="cvUrl"
          :download="cvFileName"
          class="btn btn-secondary cv-download"
          aria-label="Télécharger mon CV au format PDF"
        >
          Télécharger mon CV
          <span aria-hidden="true">↓</span>
        </a>

      </div>

      <!-- =====================================
           COMPÉTENCES TECHNIQUES
      ====================================== -->

      <div class="skills-block">
        <div class="block-heading">
          <h2>Mes compétences techniques</h2>
          <span>Langages, frameworks et outils</span>
        </div>

        <div class="hero-stack">
          <span
            v-for="skill in mainSkills"
            :key="skill"
            class="skill-pill"
            :class="{
              'skill-highlight':
                highlightedSkills.includes(skill),
            }"
          >
            {{ skill }}
          </span>
        </div>

        <p class="skills-description">
          Développement frontend et backend,
          intégration d'API REST,
          bases de données et déploiement
          d'applications web.
        </p>
      </div>

      <!-- =====================================
           CHIFFRES CLÉS
      ====================================== -->

      <div class="hero-highlights">

        <div class="highlight-item">
          <strong>300 h</strong>
          <span>Stage professionnel</span>
        </div>

        <div
          class="highlight-divider"
          aria-hidden="true"
        ></div>

        <div class="highlight-item">
          <strong>{{ existingProjectsCount }}</strong>
          <span>Projets présentés</span>
        </div>

        <div
          class="highlight-divider"
          aria-hidden="true"
        ></div>

        <div class="highlight-item">
          <strong>{{ plannedProjectsCount }}</strong>
          <span>Projets à venir</span>
        </div>

      </div>

    </div>

    <!-- =====================================
         COLONNE DROITE — DASHBOARD
    ====================================== -->

    <div class="hero-visual card">

      <!-- EN-TÊTE DU DASHBOARD -->

      <div class="dashboard-header">

        <div
          class="window-dots"
          aria-hidden="true"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <span class="dashboard-title">
          developer-workspace
        </span>

        <span class="dashboard-status">
          <span
            class="status-dot"
            aria-hidden="true"
          ></span>
          Portfolio
        </span>

      </div>

      <!-- INTRODUCTION -->

      <div class="visual-heading">

        <p class="visual-eyebrow">
          PORTFOLIO / DÉVELOPPEMENT WEB
        </p>

        <h2>
          Mon environnement de développement
        </h2>

        <p>
          Des applications fullstack,
          trois technologies frontend
          et des projets variés.
        </p>

      </div>

      <!-- =====================================
           CARTES TECHNIQUES
      ====================================== -->

      <div class="dashboard-grid">

        <div class="dashboard-card">
          <small>Frontend</small>

          <strong>
            Vue.js • Angular • React
          </strong>

          <span>
            JavaScript, TypeScript,
            HTML et CSS
          </span>
        </div>

        <div class="dashboard-card">
          <small>Backend</small>

          <strong>
            Node.js • Express.js
          </strong>

          <span>
            API REST, JWT et logique serveur
          </span>
        </div>

        <div class="dashboard-card">
          <small>Bases de données</small>

          <strong>SQL / NoSQL</strong>

          <span>
            MySQL, MariaDB,
            Firebird et MongoDB
          </span>
        </div>

        <div class="dashboard-card">
          <small>Outils & déploiement</small>

          <strong>
            Git • GitHub • Netlify
          </strong>

          <span>
            Postman, Render
            et Docker — notions
          </span>
        </div>

      </div>

      <!-- =====================================
           PRÉSENTATION DES PROJETS
      ====================================== -->

      <div class="projects-preview">

        <div class="preview-header">
          <span>Mes projets</span>

          <span class="preview-count">
            {{ projectPreviews.length }} projets
          </span>
        </div>

        <div class="fake-table">

          <template
            v-for="project in projectPreviews"
            :key="project.title"
          >

            <!-- PROJET EN LIGNE -->

            <a
              v-if="!project.isPlanned"
              :href="project.demoUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="fake-row project-link"
            >

              <div class="project-info">

                <span
                  class="project-symbol"
                  aria-hidden="true"
                >
                  ◈
                </span>

                <div>
                  <strong>
                    {{ project.title }}
                  </strong>

                  <small>
                    {{ project.subtitle }}
                  </small>
                </div>

              </div>

              <span class="project-status success">
                En ligne ↗
              </span>

            </a>

            <!-- PROJET À VENIR -->

            <div
              v-else
              class="fake-row planned-row"
            >

              <div class="project-info">

                <span
                  class="project-symbol planned-symbol"
                  aria-hidden="true"
                >
                  ◇
                </span>

                <div>
                  <strong>
                    {{ project.title }}
                  </strong>

                  <small>
                    {{ project.subtitle }}
                  </small>
                </div>

              </div>

              <span class="project-status upcoming">
                À venir
              </span>

            </div>

          </template>

        </div>

      </div>

      <!-- PIED DU DASHBOARD -->

      <div class="dashboard-footer">
        <span
          class="footer-dot"
          aria-hidden="true"
        ></span>

        Vue.js • Angular • React • TypeScript • Node.js
      </div>

    </div>

  </section>
</template>

<style scoped>
/* ==========================================
   STRUCTURE PRINCIPALE
========================================== */

.hero {
  display: grid;
  grid-template-columns:
    minmax(0, 1.08fr)
    minmax(0, 0.92fr);
  align-items: center;
  gap: clamp(28px, 5vw, 70px);
  min-height: calc(100vh - 120px);
  padding-top: 65px;
  padding-bottom: 80px;
}

.hero-content {
  min-width: 0;
}

/* ==========================================
   BADGE DISPONIBILITÉ
========================================== */

.availability-badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  max-width: 100%;
  padding: 10px 16px;
  border: 1px solid rgba(74, 222, 128, 0.28);
  border-radius: 999px;
  background: rgba(74, 222, 128, 0.07);
  color: #86efac;
  font-size: 0.85rem;
  font-weight: 600;
}

.availability-dot,
.status-dot,
.footer-dot {
  width: 8px;
  height: 8px;
  flex-shrink: 0;
  border-radius: 50%;
  background: #4ade80;
  box-shadow: 0 0 12px rgba(74, 222, 128, 0.45);
}

/* ==========================================
   TITRES
========================================== */

.hero-eyebrow {
  margin-top: 28px;
  color: #a78bfa;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.1em;
}

.hero-title {
  max-width: 790px;
  margin-top: 16px;
  font-size: clamp(2.8rem, 5vw, 5.4rem);
  line-height: 1.06;
  letter-spacing: -0.055em;
  overflow-wrap: anywhere;
}

.hero-title span {
  display: block;

  background: linear-gradient(
    135deg,
    #ffffff,
    #a5b4fc 45%,
    #a78bfa
  );

  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
}

/* ==========================================
   DESCRIPTION
========================================== */

.hero-intro {
  max-width: 670px;
  margin-top: 26px;
  font-size: clamp(1.1rem, 1.8vw, 1.35rem);
  line-height: 1.65;
}

.hero-intro strong {
  color: #c4b5fd;
}

.hero-description {
  max-width: 690px;
  margin-top: 15px;
  color: var(--text-muted);
  font-size: 1rem;
  line-height: 1.85;
}

/* ==========================================
   BOUTONS
========================================== */

.hero-actions {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 32px;
}

.hero-actions .btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  gap: 12px;
  padding: 12px 22px;
  cursor: pointer;
  text-decoration: none;
  font-family: inherit;
  font-size: 0.9rem;
  font-weight: 700;
  line-height: 1.4;
}

.hero-actions .btn span {
  font-size: 1.1rem;
}

/* ==========================================
   BOUTON TÉLÉCHARGEMENT DU CV
========================================== */

.cv-download {
  border: 1px solid rgba(167, 139, 250, 0.5);
  border-radius: 10px;
  background: rgba(139, 92, 246, 0.12);
  color: #ddd6fe;

  transition:
    background 0.2s ease,
    border-color 0.2s ease,
    transform 0.2s ease;
}

.cv-download:hover {
  background: rgba(139, 92, 246, 0.22);
  border-color: #a78bfa;
  transform: translateY(-2px);
}

.cv-download:focus-visible {
  outline: 2px solid #c4b5fd;
  outline-offset: 3px;
}

/* ==========================================
   COMPÉTENCES
========================================== */

.skills-block {
  margin-top: 34px;
}

.block-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 15px;
}

.block-heading h2 {
  font-size: 1rem;
  font-weight: 700;
}

.block-heading > span {
  color: var(--text-muted);
  font-size: 0.76rem;
}

.hero-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.skill-pill {
  padding: 9px 13px;
  border: 1px solid var(--border-color);
  border-radius: 999px;
  background: rgba(15, 23, 42, 0.52);
  color: var(--text-soft);
  font-size: 0.8rem;
  font-weight: 500;

  transition:
    border-color 0.2s ease,
    background 0.2s ease;
}

.skill-pill:hover {
  border-color: rgba(167, 139, 250, 0.5);
  background: rgba(139, 92, 246, 0.12);
}

.skill-highlight {
  border-color: rgba(167, 139, 250, 0.45);
  color: #c4b5fd;
  background: rgba(139, 92, 246, 0.12);
}

.skills-description {
  margin-top: 14px;
  color: var(--text-muted);
  font-size: 0.78rem;
  line-height: 1.7;
}

/* ==========================================
   CHIFFRES CLÉS
========================================== */

.hero-highlights {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 36px;
}

.highlight-item {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.highlight-item strong {
  color: #f8fafc;
  font-size: 1.2rem;
}

.highlight-item span {
  color: var(--text-muted);
  font-size: 0.78rem;
}

.highlight-divider {
  width: 1px;
  height: 35px;
  background: var(--border-color);
}

/* ==========================================
   DASHBOARD
========================================== */

.hero-visual {
  min-width: 0;
  padding: 22px;
  overflow: hidden;
  border: 1px solid rgba(167, 139, 250, 0.22);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
}

.dashboard-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding-bottom: 19px;
  border-bottom: 1px solid var(--border-color);
}

.window-dots {
  display: flex;
  gap: 7px;
}

.window-dots span {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

.window-dots span:nth-child(1) {
  background: #fb7185;
}

.window-dots span:nth-child(2) {
  background: #facc15;
}

.window-dots span:nth-child(3) {
  background: #4ade80;
}

.dashboard-title {
  color: var(--text-muted);
  font-size: 0.75rem;
}

.dashboard-status {
  display: flex;
  align-items: center;
  gap: 7px;
  color: #86efac;
  font-size: 0.75rem;
}

/* ==========================================
   INTRODUCTION DU DASHBOARD
========================================== */

.visual-heading {
  margin: 23px 0;
}

.visual-eyebrow {
  color: #a78bfa;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.1em;
}

.visual-heading h2 {
  margin-top: 10px;
  font-size: 1.3rem;
  line-height: 1.4;
}

.visual-heading > p:last-child {
  margin-top: 8px;
  color: var(--text-muted);
  font-size: 0.85rem;
  line-height: 1.6;
}

/* ==========================================
   CARTES TECHNIQUES
========================================== */

.dashboard-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}

.dashboard-card {
  display: flex;
  flex-direction: column;
  gap: 7px;
  min-width: 0;
  padding: 17px;
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md, 12px);
  background: rgba(15, 23, 42, 0.42);
}

.dashboard-card small {
  color: var(--text-muted);
  font-size: 0.73rem;
}

.dashboard-card strong {
  color: #f8fafc;
  font-size: 1.05rem;
  overflow-wrap: anywhere;
}

.dashboard-card > span {
  color: var(--text-soft);
  font-size: 0.72rem;
  line-height: 1.45;
}

/* ==========================================
   LISTE DES PROJETS
========================================== */

.projects-preview {
  margin-top: 24px;
}

.preview-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
  font-size: 0.88rem;
  font-weight: 700;
}

.preview-count {
  color: var(--text-muted);
  font-size: 0.75rem;
  font-weight: 400;
}

.fake-table {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.fake-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  min-width: 0;
  padding: 13px;
  border: 1px solid var(--border-color);
  border-radius: var(--radius-sm, 8px);
  background: rgba(15, 23, 42, 0.55);
}

.project-link {
  color: inherit;
  text-decoration: none;

  transition:
    border-color 0.2s ease,
    background 0.2s ease;
}

.project-link:hover {
  border-color: rgba(167, 139, 250, 0.6);
  background: rgba(139, 92, 246, 0.1);
}

.project-link:focus-visible {
  outline: 2px solid #a78bfa;
  outline-offset: 3px;
}

.project-info {
  display: flex;
  align-items: center;
  gap: 11px;
  min-width: 0;
}

.project-symbol {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  border-radius: 9px;
  background: rgba(139, 92, 246, 0.13);
  color: #c4b5fd;
  font-size: 1.2rem;
}

.planned-symbol {
  color: #93c5fd;
}

.project-info > div {
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
}

.project-info strong {
  color: #f8fafc;
  font-size: 0.8rem;
  overflow-wrap: anywhere;
}

.project-info small {
  color: var(--text-muted);
  font-size: 0.7rem;
  line-height: 1.4;
}

.project-status {
  flex-shrink: 0;
  padding: 6px 9px;
  border-radius: 999px;
  font-size: 0.68rem;
  font-weight: 700;
}

.project-status.success {
  background: rgba(74, 222, 128, 0.1);
  color: #86efac;
}

.project-status.upcoming {
  background: rgba(167, 139, 250, 0.12);
  color: #c4b5fd;
}

/* ==========================================
   PIED DU DASHBOARD
========================================== */

.dashboard-footer {
  display: flex;
  align-items: center;
  gap: 9px;
  margin-top: 20px;
  padding-top: 15px;
  border-top: 1px solid var(--border-color);
  color: var(--text-muted);
  font-size: 0.72rem;
}

/* ==========================================
   RESPONSIVE TABLETTE
========================================== */

@media (max-width: 1100px) {
  .hero {
    grid-template-columns: 1fr;
    min-height: auto;
  }

  .hero-visual {
    width: 100%;
    max-width: 740px;
  }
}

/* ==========================================
   RESPONSIVE MOBILE
========================================== */

@media (max-width: 640px) {
  .hero {
    gap: 28px;
    padding-top: 35px;
    padding-bottom: 50px;
  }

  .hero-title {
    font-size: clamp(2.5rem, 10vw, 3.5rem);
  }

  .hero-description {
    font-size: 0.94rem;
  }

  .hero-actions {
    flex-direction: column;
    align-items: stretch;
  }

  .hero-actions .btn {
    width: 100%;
  }

  .hero-highlights {
    gap: 12px;
  }

  .highlight-divider {
    display: none;
  }

  .highlight-item {
    flex: 1 1 110px;
  }

  .hero-visual {
    padding: 16px;
  }

  .dashboard-grid {
    gap: 9px;
  }

  .dashboard-card {
    padding: 12px;
  }

  .dashboard-title {
    display: none;
  }

  .fake-row {
    align-items: flex-start;
  }

  .project-status {
    font-size: 0.62rem;
  }
}

@media (max-width: 380px) {
  .dashboard-grid {
    grid-template-columns: 1fr;
  }

  .hero-title {
    font-size: 2.35rem;
  }
}

/* ==========================================
   ACCESSIBILITÉ
========================================== */

@media (prefers-reduced-motion: reduce) {
  .skill-pill,
  .project-link,
  .cv-download {
    transition: none;
  }

  .cv-download:hover {
    transform: none;
  }
}
</style>
