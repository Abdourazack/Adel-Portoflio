
<script setup lang="ts">
import SectionTitle from '../layout/SectionTitle.vue'
import { skillCategories } from '../../data/skills'
</script>

<template>
  <section
    id="skills"
    class="section skills-section"
  >
    <SectionTitle
      eyebrow="Compétences techniques"
      title="Vue.js, Angular, React & Développement Fullstack"
      description="Je développe des applications web avec Vue.js 3, Angular, React, TypeScript, Node.js et Express.js. Mes compétences couvrent également les bases de données, les API REST, les réseaux, la sécurité et le déploiement."
    />

    <div class="skills-grid">
      <article
        v-for="category in skillCategories"
        :key="category.title"
        class="skill-card card"
      >
        <h3>{{ category.title }}</h3>

        <p>{{ category.description }}</p>

        <div class="skill-list">
          <span
            v-for="skill in category.skills"
            :key="skill"
            class="skill-badge"
          >
            {{ skill }}
          </span>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.skills-section {
  scroll-margin-top: 110px;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 22px;
}

.skill-card {
  min-width: 0;
  padding: 28px;
  transition:
    transform 0.25s ease,
    border-color 0.25s ease;
}

.skill-card:hover {
  transform: translateY(-4px);
  border-color: rgba(139, 92, 246, 0.45);
}

.skill-card h3 {
  margin: 0 0 12px;
  color: var(--text-primary, #f8fafc);
  font-size: 1.2rem;
  line-height: 1.4;
}

.skill-card p {
  margin: 0;
  color: var(--text-muted, #94a3b8);
  font-size: 0.92rem;
  line-height: 1.75;
}

.skill-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 22px;
}

.skill-badge {
  display: inline-flex;
  align-items: center;
  padding: 9px 13px;
  border-radius: 999px;
  border: 1px solid var(--border-color, #334155);
  background: rgba(99, 102, 241, 0.09);
  color: var(--text-soft, #cbd5e1);
  font-size: 0.85rem;
  line-height: 1.4;
}

@media (max-width: 820px) {
  .skills-grid {
    grid-template-columns: 1fr;
  }

  .skill-card {
    padding: 22px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .skill-card {
    transition: none;
  }

  .skill-card:hover {
    transform: none;
  }
}
</style>
