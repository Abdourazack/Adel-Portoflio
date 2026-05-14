<template>
  <section id="projects" class="section projects-section">
    <SectionTitle
      eyebrow="Projets"
      title="Des projets pensés comme des outils métiers"
      description="Ces projets publics sont recréés avec des données fictives afin de respecter la confidentialité, tout en montrant les compétences réellement travaillées."
    />

    <div class="projects-grid">
      <article
        v-for="project in projects"
        :key="project.title"
        class="project-card card"
      >
        <div class="project-visual">
          <img
            :src="project.image"
            :alt="project.title"
            class="project-image"
          />
        </div>

        <div class="project-content">
          <span class="project-type">
            {{ project.type }}
          </span>

          <h3>{{ project.title }}</h3>

          <p class="project-subtitle">
            {{ project.subtitle }}
          </p>

          <p class="project-description">
            {{ project.description }}
          </p>

          <ul class="feature-list">
            <li
              v-for="feature in project.features"
              :key="feature"
            >
              {{ feature }}
            </li>
          </ul>

          <div class="project-stack">
            <span
              v-for="tech in project.stack"
              :key="tech"
            >
              {{ tech }}
            </span>
          </div>

          <div class="project-actions">
            <a
              class="btn btn-primary"
              :href="project.demoUrl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Voir la démo
            </a>

            <a
              class="btn btn-secondary"
              :href="project.githubUrl"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionTitle from '../layout/SectionTitle.vue'
import { projects } from '../../data/projects'
</script>

<style scoped>
.projects-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.project-card {
  overflow: hidden;
  cursor: default;
}

.project-visual {
  position: relative;
  height: 240px;
  overflow: hidden;

  border-bottom: 1px solid var(--border-color);

  background:
    radial-gradient(
      circle at top right,
      rgba(139, 92, 246, 0.28),
      transparent 35%
    ),
    linear-gradient(
      135deg,
      rgba(99, 102, 241, 0.18),
      rgba(15, 23, 42, 0.4)
    );
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;

  transition:
    transform 0.35s ease,
    filter 0.35s ease;
}

.project-card:hover .project-image {
  transform: scale(1.04);
  filter: brightness(1.08);
}

.project-content {
  padding: 28px;
}

.project-type {
  color: var(--primary);

  font-size: 0.82rem;
  font-weight: 800;

  text-transform: uppercase;
  letter-spacing: 0.12em;
}

.project-content h3 {
  margin-top: 12px;
  font-size: 1.5rem;
}

.project-subtitle {
  margin-top: 8px;
  color: var(--text-soft);
}

.project-description {
  margin-top: 18px;

  color: var(--text-muted);

  line-height: 1.75;
}

.feature-list {
  margin-top: 20px;
  padding-left: 20px;

  color: var(--text-soft);

  line-height: 1.8;
}

.feature-list li::marker {
  color: var(--primary);
}

.project-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  margin-top: 24px;
}

.project-stack span {
  padding: 8px 12px;

  border-radius: 999px;

  border: 1px solid var(--border-color);

  background:
    rgba(15, 23, 42, 0.48);

  color: var(--text-soft);

  font-size: 0.86rem;
}

.project-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;

  margin-top: 28px;
}

.project-actions .btn {
  padding: 11px 16px;
  font-size: 0.9rem;
}

@media (max-width: 900px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 520px) {
  .project-visual {
    height: 190px;
  }

  .project-content {
    padding: 22px;
  }

  .project-actions {
    flex-direction: column;
  }
}
</style>