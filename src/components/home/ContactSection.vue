<template>
  <section id="contact" class="section contact-section">
    <div class="contact-card card">
      <div>
        <span class="section-eyebrow">Contact</span>

        <h2>Discutons d’une opportunité junior</h2>

        <p>
          Je suis disponible pour un poste de développeur web junior,
          principalement sur Bruxelles, Namur, Tournai, Mouscron ou en hybride.
        </p>
      </div>

      <div class="contact-actions">
        <a class="btn btn-primary" href="mailto:adelhared123@gmail.com">
          Me contacter
        </a>

        <a class="btn btn-secondary" href="#" target="_blank">
          LinkedIn
        </a>

        <a class="btn btn-secondary" href="#" target="_blank">
          GitHub
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-card {
  padding: 42px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
}

.contact-card h2 {
  margin-top: 12px;
  font-size: clamp(2rem, 4vw, 3.2rem);
  line-height: 1.1;
  letter-spacing: -0.04em;
}

.contact-card p {
  max-width: 680px;
  margin-top: 18px;
  color: var(--text-muted);
  line-height: 1.8;
}

.contact-actions {
  display: flex;
  flex-direction: column;
  gap: 14px;
  min-width: 190px;
}

@media (max-width: 820px) {
  .contact-card {
    flex-direction: column;
    align-items: flex-start;
  }

  .contact-actions {
    width: 100%;
  }
}
</style>