<template>
  <section id="about" class="section about-section">
    <SectionTitle
      eyebrow="À propos"
      title="Un profil junior orienté projets métiers réels"
      description="Je construis des interfaces modernes, des dashboards internes et des outils d’administration pensés pour des besoins concrets d’entreprise."
    />

    <div class="about-grid">
      <div class="about-card card">
        <h3>Mon positionnement</h3>

        <p>
          Je suis développeur fullstack junior, spécialisé en Vue.js,
          TypeScript, Node.js et Express.js. Mon objectif est de créer
          des applications web propres, lisibles et utiles : dashboards,
          interfaces d’administration, APIs REST et outils métiers.
        </p>
      </div>

      <div class="about-card card">
        <h3>Expérience entreprise</h3>

        <p>
          Pendant mon stage chez Tite Live SA, j’ai travaillé sur des modules
          internes liés aux dashboards, aux APIs, au monitoring, aux bases de
          données et à l’interface utilisateur, dans un contexte professionnel
          avec des contraintes réelles.
        </p>
      </div>

      <div class="about-card card">
        <h3>Confidentialité respectée</h3>

        <p>
          Les projets présentés dans ce portfolio sont des démonstrations
          recréées avec des données fictives, inspirées de problématiques
          réelles, sans code privé ni donnée confidentielle.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionTitle from '../layout/SectionTitle.vue'
</script>

<style scoped>
.about-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
}

.about-card {
  padding: 28px;
}

.about-card h3 {
  margin-bottom: 14px;
  font-size: 1.25rem;
}

.about-card p {
  color: var(--text-muted);
  line-height: 1.8;
}

@media (max-width: 900px) {
  .about-grid {
    grid-template-columns: 1fr;
  }
}
</style>