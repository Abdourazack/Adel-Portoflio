<template>
  <section id="skills" class="section skills-section">
    <SectionTitle
      eyebrow="Compétences"
      title="Une stack claire, moderne et cohérente"
      description="Mon profil est principalement orienté Vue.js, TypeScript, Node.js et Express.js, avec des connaissances complémentaires utiles pour m’adapter."
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

<script setup lang="ts">
import SectionTitle from '../layout/SectionTitle.vue'
import { skillCategories } from '../../data/skills'
</script>

<style scoped>
.skills-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 22px;
}

.skill-card {
  padding: 28px;
}

.skill-card h3 {
  margin-bottom: 12px;
  font-size: 1.25rem;
}

.skill-card p {
  color: var(--text-muted);
  line-height: 1.7;
}

.skill-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 22px;
}

.skill-badge {
  padding: 9px 13px;
  border-radius: 999px;
  border: 1px solid var(--border-color);
  background: rgba(99, 102, 241, 0.09);
  color: var(--text-soft);
  font-size: 0.9rem;
}

@media (max-width: 820px) {
  .skills-grid {
    grid-template-columns: 1fr;
  }
}
</style>