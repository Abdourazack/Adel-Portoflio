<template>
  <header class="navbar">
    <div class="navbar-container">
      <a href="/" class="navbar-logo">
        <div class="logo-box">
          A
        </div>

        <div class="logo-text">
          Adel Abdourazack
        </div>
      </a>

      <nav class="navbar-links">
        <a href="#about">À propos</a>
        <a href="#skills">Compétences</a>
        <a href="#experience">Expérience</a>
        <a href="#projects">Projets</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.navbar {
  position: sticky;
  top: 18px;

  z-index: 100;

  width: min(1180px, calc(100% - 32px));

  margin-inline: auto;
}

.navbar-container {
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 18px 24px;

  border-radius: 999px;

  border:
    1px solid var(--border-color);

  background:
    rgba(15, 23, 42, 0.72);

  backdrop-filter: blur(18px);
}

.navbar-logo {
  display: flex;
  align-items: center;
  gap: 14px;

  font-weight: 700;
}

.logo-box {
  width: 42px;
  height: 42px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 14px;

  background:
    linear-gradient(
      135deg,
      var(--primary),
      var(--secondary)
    );

  color: white;

  font-weight: 800;
}

.logo-text {
  font-size: 1rem;
}

.navbar-links {
  display: flex;
  align-items: center;
  gap: 28px;

  color: var(--text-muted);
}

.navbar-links a {
  transition: var(--transition);
}

.navbar-links a:hover {
  color: var(--text-main);
}

@media (max-width: 768px) {
  .navbar-links {
    display: none;
  }
}
</style>