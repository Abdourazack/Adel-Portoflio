
<script setup lang="ts">
import { ref } from 'vue'

// ==========================================
// COORDONNÉES PROFESSIONNELLES
// ==========================================

const email = 'adelhared123@gmail.com'

const telephone = '+32 466 45 29 99'

const telephoneLien = 'tel:+32466452999'

const localisation = 'Tournai, Belgique'

const githubUrl = 'https://github.com/Abdourazack'

// Ajoute ton lien LinkedIn quand tu le souhaites
const linkedinUrl = ''

// ==========================================
// COPIE DE L'EMAIL
// ==========================================

const emailCopie = ref(false)

async function copierEmail() {
  try {
    await navigator.clipboard.writeText(email)
    emailCopie.value = true

    window.setTimeout(() => {
      emailCopie.value = false
    }, 2500)
  } catch (erreur) {
    console.error(
      "Impossible de copier l'adresse e-mail",
      erreur
    )
  }
}
</script>

<template>
  <section
    id="contact"
    class="section contact-section"
  >
    <div class="contact-card card">

      <!-- =====================================
           PRÉSENTATION
      ====================================== -->

      <div class="contact-intro">

        <span class="section-eyebrow">
          Contact
        </span>

        <h2>
          Échangeons autour de votre
          <span class="text-gradient">
            prochain projet.
          </span>
        </h2>

        <p class="contact-description">
          Je recherche une opportunité en tant que
          <strong>
            développeur web junior, frontend ou fullstack
          </strong>,
          principalement à Bruxelles, Namur,
          Tournai ou Mouscron, avec une ouverture
          au travail hybride.
        </p>

        <p class="contact-description">
          Une opportunité professionnelle,
          une question sur mes réalisations
          ou simplement envie d'échanger ?
          N'hésitez pas à me contacter.
        </p>

        <div class="availability">
          <span
            class="availability-dot"
            aria-hidden="true"
          ></span>

          Ouvert aux opportunités professionnelles
        </div>

      </div>

      <!-- =====================================
           COORDONNÉES
      ====================================== -->

      <div class="contact-details">

        <h3>Mes coordonnées</h3>

        <!-- LOCALISATION -->

        <div class="contact-info">

          <span
            class="info-icon"
            aria-hidden="true"
          >
            📍
          </span>

          <div class="info-content">

            <span class="info-label">
              Localisation
            </span>

            <span class="info-value">
              {{ localisation }}
            </span>

          </div>

        </div>

        <!-- EMAIL -->

        <div class="contact-info">

          <span
            class="info-icon"
            aria-hidden="true"
          >
            ✉
          </span>

          <div class="info-content">

            <span class="info-label">
              Adresse e-mail
            </span>

            <a
              :href="`mailto:${email}`"
              class="info-link"
            >
              {{ email }}
            </a>

          </div>

          <button
            type="button"
            class="copy-button"
            :aria-label="
              emailCopie
                ? 'Adresse e-mail copiée'
                : 'Copier l’adresse e-mail'
            "
            @click="copierEmail"
          >
            {{ emailCopie ? '✓' : '⧉' }}
          </button>

        </div>

        <!-- TÉLÉPHONE -->

        <div class="contact-info">

          <span
            class="info-icon"
            aria-hidden="true"
          >
            ☎
          </span>

          <div class="info-content">

            <span class="info-label">
              Numéro de téléphone
            </span>

            <a
              :href="telephoneLien"
              class="info-link"
            >
              {{ telephone }}
            </a>

          </div>

        </div>

        <!-- =====================================
             BOUTONS DE CONTACT
        ====================================== -->

        <div class="contact-socials">

          <a
            :href="`mailto:${email}`"
            class="btn btn-primary contact-btn"
          >
            Envoyer un e-mail
            <span aria-hidden="true">↗</span>
          </a>

          <a
            :href="telephoneLien"
            class="btn btn-secondary contact-btn"
          >
            M'appeler
            <span aria-hidden="true">↗</span>
          </a>

          <a
            :href="githubUrl"
            class="btn btn-secondary contact-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
            <span aria-hidden="true">↗</span>
          </a>

          <a
            v-if="linkedinUrl"
            :href="linkedinUrl"
            class="btn btn-secondary contact-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
            <span aria-hidden="true">↗</span>
          </a>

        </div>

      </div>

    </div>
  </section>
</template>

<style scoped>
/* ==========================================
   SECTION CONTACT
========================================== */

.contact-section {
  position: relative;
  scroll-margin-top: 120px;
}

/* ==========================================
   CONTENEUR PRINCIPAL
========================================== */

.contact-card {
  display: grid;

  grid-template-columns:
    minmax(0, 1.2fr)
    minmax(300px, 0.9fr);

  align-items: center;
  gap: 48px;

  padding: 42px;
  border-radius: 22px;
}

/* ==========================================
   INTRODUCTION
========================================== */

.contact-intro {
  min-width: 0;
}

.contact-intro h2 {
  margin: 14px 0 22px;

  color: var(--text-main, #f8fafc);

  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 1.16;
  letter-spacing: -0.04em;
}

.text-gradient {
  background: linear-gradient(
    135deg,
    #c4b5fd,
    #818cf8
  );

  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.contact-description {
  max-width: 620px;
  margin: 0 0 16px;

  color: var(--text-muted, #94a3b8);

  font-size: 0.96rem;
  line-height: 1.85;
}

.contact-description strong {
  color: var(--text-main, #f8fafc);
  font-weight: 600;
}

/* ==========================================
   DISPONIBILITÉ
========================================== */

.availability {
  display: inline-flex;
  align-items: center;
  gap: 10px;

  margin-top: 12px;
  padding: 10px 15px;

  border: 1px solid rgba(34, 197, 94, 0.24);
  border-radius: 999px;

  background: rgba(34, 197, 94, 0.08);

  color: #86efac;
  font-size: 0.82rem;
  font-weight: 600;
}

.availability-dot {
  width: 9px;
  height: 9px;

  flex-shrink: 0;

  border-radius: 50%;

  background: #22c55e;

  box-shadow:
    0 0 0 4px rgba(34, 197, 94, 0.12);
}

/* ==========================================
   CARTE COORDONNÉES
========================================== */

.contact-details {
  min-width: 0;
  padding: 28px;

  background: rgba(15, 23, 42, 0.45);

  border: 1px solid var(--border-color, #334155);
  border-radius: 18px;
}

.contact-details h3 {
  margin: 0 0 24px;

  color: var(--text-main, #f8fafc);

  font-size: 1.2rem;
  font-weight: 700;
}

/* ==========================================
   LIGNES DE CONTACT
========================================== */

.contact-info {
  display: flex;
  align-items: center;
  gap: 14px;

  min-width: 0;
  padding: 16px 0;

  border-bottom:
    1px solid rgba(148, 163, 184, 0.13);
}

.info-icon {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 42px;
  height: 42px;

  flex-shrink: 0;

  border-radius: 12px;

  background: rgba(139, 92, 246, 0.11);

  color: #c4b5fd;
  font-size: 1.2rem;
}

.info-content {
  display: flex;
  flex-direction: column;
  gap: 6px;

  flex: 1;
  min-width: 0;
}

.info-label {
  color: var(--text-muted, #94a3b8);
  font-size: 0.78rem;
}

.info-value,
.info-link {
  color: var(--text-main, #f8fafc);

  font-size: 0.94rem;
  font-weight: 600;
  line-height: 1.5;

  overflow-wrap: anywhere;
}

.info-link {
  text-decoration: none;

  transition: color 0.2s ease;
}

.info-link:hover {
  color: #a78bfa;
}

/* ==========================================
   COPIER EMAIL
========================================== */

.copy-button {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 36px;
  height: 36px;

  flex-shrink: 0;
  padding: 0;

  background: rgba(139, 92, 246, 0.1);
  color: #c4b5fd;

  border: 1px solid rgba(139, 92, 246, 0.25);
  border-radius: 9px;

  font-size: 1.1rem;
  cursor: pointer;

  transition:
    background 0.2s ease,
    transform 0.2s ease;
}

.copy-button:hover {
  background: rgba(139, 92, 246, 0.2);
  transform: translateY(-2px);
}

.copy-button:focus-visible,
.info-link:focus-visible {
  outline: 2px solid #a78bfa;
  outline-offset: 3px;
}

/* ==========================================
   BOUTONS DE CONTACT
========================================== */

.contact-socials {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;

  margin-top: 26px;
}

.contact-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 9px;

  min-height: 44px;

  text-align: center;
  text-decoration: none;

  font-size: 0.85rem;
}

/* ==========================================
   RESPONSIVE
========================================== */

@media (max-width: 980px) {

  .contact-card {
    grid-template-columns: 1fr;
    gap: 30px;
  }

}

@media (max-width: 680px) {

  .contact-card {
    padding: 24px 18px;
    gap: 26px;
  }

  .contact-intro h2 {
    font-size: clamp(1.8rem, 7vw, 2.3rem);
  }

  .contact-details {
    padding: 20px 16px;
  }

  .contact-info {
    gap: 10px;
  }

  .info-icon {
    width: 38px;
    height: 38px;
  }

  .contact-socials {
    flex-direction: column;
  }

  .contact-btn {
    width: 100%;
  }

  .availability {
    font-size: 0.75rem;
  }

}

/* ==========================================
   ACCESSIBILITÉ
========================================== */

@media (prefers-reduced-motion: reduce) {

  .copy-button,
  .info-link {
    transition: none;
  }

  .copy-button:hover {
    transform: none;
  }

}
</style>
