<template>
  <section class="hero section">
    <div class="hero-content">
      <div class="badge">
        Disponible pour un poste junior
      </div>

      <h1 class="hero-title">
        Développeur
        <span>Fullstack Junior</span>
        orienté dashboards & outils métiers
      </h1>

      <p class="hero-description">
        Je développe des dashboards modernes,
        des interfaces d’administration
        et des APIs REST avec Vue.js,
        TypeScript, Node.js et Express.js.
      </p>

      <div class="hero-actions">
        <button class="btn btn-primary">
          Voir mes projets
        </button>

        <button class="btn btn-secondary">
          Télécharger CV
        </button>
      </div>

      <div class="hero-stack">
        <span>Vue 3</span>
        <span>TypeScript</span>
        <span>Node.js</span>
        <span>Express.js</span>
        <span>MySQL</span>
        <span>Firebird</span>
      </div>
    </div>

    <div class="hero-visual card">
      <div class="dashboard-header">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div class="dashboard-grid">
        <div class="dashboard-card">
          <small>Monitoring</small>
          <strong>HAProxy</strong>
        </div>

        <div class="dashboard-card">
          <small>Backend</small>
          <strong>REST API</strong>
        </div>

        <div class="dashboard-card">
          <small>Database</small>
          <strong>Firebird</strong>
        </div>

        <div class="dashboard-card">
          <small>Frontend</small>
          <strong>Vue 3</strong>
        </div>
      </div>

      <div class="fake-table">
        <div class="fake-row">
          <span>Monitoring Dashboard</span>
          <strong class="success">
            UP
          </strong>
        </div>

        <div class="fake-row">
          <span>Datafactory API</span>
          <strong class="warning">
            READY
          </strong>
        </div>

        <div class="fake-row">
          <span>Customer Database</span>
          <strong class="info">
            ONLINE
          </strong>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: calc(100vh - 120px);

  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  align-items: center;

  gap: 48px;
}

.hero-title {
  margin-top: 28px;

  font-size: clamp(3rem, 7vw, 6rem);

  line-height: 0.95;

  letter-spacing: -0.06em;

  max-width: 760px;
}

.hero-title span {
  display: block;

  background:
    linear-gradient(
      135deg,
      white,
      #a5b4fc,
      #c4b5fd
    );

  -webkit-background-clip: text;

  color: transparent;
}

.hero-description {
  margin-top: 28px;

  max-width: 700px;

  color: var(--text-muted);

  font-size: 1.1rem;

  line-height: 1.9;
}

.hero-actions {
  display: flex;
  align-items: center;
  gap: 18px;

  margin-top: 36px;
}

.hero-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;

  margin-top: 42px;
}

.hero-stack span {
  padding: 10px 16px;

  border-radius: 999px;

  border:
    1px solid var(--border-color);

  background:
    rgba(15, 23, 42, 0.52);

  color: var(--text-soft);

  font-size: 0.92rem;
}

.hero-visual {
  padding: 24px;
}

.dashboard-header {
  display: flex;
  gap: 10px;

  margin-bottom: 28px;
}

.dashboard-header span {
  width: 12px;
  height: 12px;

  border-radius: 999px;

  background:
    rgba(148, 163, 184, 0.4);
}

.dashboard-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  gap: 16px;
}

.dashboard-card {
  padding: 22px;

  border-radius: var(--radius-md);

  border:
    1px solid var(--border-color);

  background:
    rgba(15, 23, 42, 0.42);
}

.dashboard-card small {
  display: block;

  margin-bottom: 8px;

  color: var(--text-muted);
}

.dashboard-card strong {
  font-size: 1.2rem;
}

.fake-table {
  margin-top: 24px;

  display: flex;
  flex-direction: column;
  gap: 12px;
}

.fake-row {
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 16px 18px;

  border-radius: var(--radius-sm);

  background:
    rgba(15, 23, 42, 0.55);

  border:
    1px solid var(--border-color);
}

.success {
  color: #4ade80;
}

.warning {
  color: #facc15;
}

.info {
  color: #60a5fa;
}

@media (max-width: 1024px) {
  .hero {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .hero-title {
    font-size: 3rem;
  }

  .hero-actions {
    flex-direction: column;
    align-items: stretch;
  }

  .dashboard-grid {
    grid-template-columns: 1fr;
  }
}
</style>