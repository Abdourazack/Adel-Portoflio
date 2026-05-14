<template>
  <section id="experience" class="section experience-section">
    <SectionTitle
      eyebrow="Expérience"
      title="Une première expérience entreprise concrète"
      description="Mon stage m’a permis de travailler sur des outils internes réels, avec des contraintes de confidentialité, de sécurité, d’API et d’interface utilisateur."
    />

    <div class="experience-list">
      <article
        v-for="experience in experiences"
        :key="experience.company"
        class="experience-card card"
      >
        <div class="experience-header">
          <div>
            <h3>{{ experience.role }}</h3>
            <p>{{ experience.company }} — {{ experience.location }}</p>
          </div>

          <span>{{ experience.period }}</span>
        </div>

        <p class="experience-description">
          {{ experience.description }}
        </p>

        <ul class="mission-list">
          <li
            v-for="mission in experience.missions"
            :key="mission"
          >
            {{ mission }}
          </li>
        </ul>

        <div class="experience-stack">
          <span
            v-for="tech in experience.stack"
            :key="tech"
          >
            {{ tech }}
          </span>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionTitle from '../layout/SectionTitle.vue'
import { experiences } from '../../data/experience'
</script>

<style scoped>
.experience-list {
  display: grid;
  gap: 22px;
}

.experience-card {
  padding: 32px;
}

.experience-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 24px;
}

.experience-header h3 {
  font-size: 1.4rem;
  margin-bottom: 8px;
}

.experience-header p {
  color: var(--text-muted);
}

.experience-header span {
  white-space: nowrap;
  color: var(--text-soft);
  border: 1px solid var(--border-color);
  border-radius: 999px;
  padding: 10px 14px;
  background: rgba(15, 23, 42, 0.48);
  font-size: 0.9rem;
}

.experience-description {
  margin-top: 24px;
  color: var(--text-muted);
  line-height: 1.8;
  max-width: 900px;
}

.mission-list {
  margin-top: 24px;
  padding-left: 20px;
  color: var(--text-soft);
  line-height: 1.9;
}

.mission-list li::marker {
  color: var(--primary);
}

.experience-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 28px;
}

.experience-stack span {
  padding: 9px 13px;
  border-radius: 999px;
  border: 1px solid var(--border-color);
  background: rgba(99, 102, 241, 0.09);
  color: var(--text-soft);
  font-size: 0.9rem;
}

@media (max-width: 720px) {
  .experience-header {
    flex-direction: column;
  }

  .experience-header span {
    white-space: normal;
  }
}
</style>