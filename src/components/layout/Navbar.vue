
<script setup lang="ts">
import { ref } from 'vue'

// Gestion du menu mobile
const menuOuvert = ref(false)

// Photo de profil
const photoProfil = '/images/PP.jpg'

// Fermer le menu lors du clic sur un lien
const fermerMenu = () => {
  menuOuvert.value = false
}

const liens = [
  { label: 'À propos', href: '#about' },
  { label: 'Compétences', href: '#skills' },
  { label: 'Expérience', href: '#experience' },
  { label: 'Projets', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]
</script>

<template>
  <header class="navbar">
    <div class="navbar-container">

      <!-- IDENTITÉ / PHOTO -->
      <a
        href="/"
        class="navbar-logo"
        aria-label="Retour à l'accueil du portfolio"
        @click="fermerMenu"
      >
        <div class="profile-container">
          <img
            :src="photoProfil"
            alt="Photo de profil d'Adel Abdourazack"
            class="profile-image"
            width="44"
            height="44"
          />

          <span
            class="profile-status"
            aria-hidden="true"
          ></span>
        </div>

        <div class="logo-identity">
          <span class="logo-text">
            Adel Abdourazack
          </span>

          <span class="logo-subtitle">
            Développeur Fullstack Junior
          </span>
        </div>
      </a>

      <!-- NAVIGATION DESKTOP -->
      <nav
        class="navbar-links"
        aria-label="Navigation principale"
      >
        <a
          v-for="lien in liens"
          :key="lien.href"
          :href="lien.href"
        >
          {{ lien.label }}
        </a>
      </nav>

      <!-- BOUTON MENU MOBILE -->
      <button
        type="button"
        class="menu-toggle"
        :aria-expanded="menuOuvert"
        aria-controls="menu-mobile"
        :aria-label="
          menuOuvert
            ? 'Fermer le menu'
            : 'Ouvrir le menu'
        "
        @click="menuOuvert = !menuOuvert"
      >
        <span :class="{ actif: menuOuvert }"></span>
        <span :class="{ actif: menuOuvert }"></span>
        <span :class="{ actif: menuOuvert }"></span>
      </button>

    </div>

    <!-- NAVIGATION MOBILE -->
    <nav
      v-if="menuOuvert"
      id="menu-mobile"
      class="mobile-menu"
      aria-label="Navigation mobile"
    >
      <a
        v-for="lien in liens"
        :key="lien.href"
        :href="lien.href"
        @click="fermerMenu"
      >
        {{ lien.label }}
      </a>
    </nav>

  </header>
</template>

<style scoped>
/* ==========================================
   NAVBAR PRINCIPALE
========================================== */

.navbar {
  position: sticky;
  top: 18px;
  z-index: 100;

  width: min(1180px, calc(100% - 32px));
  margin-inline: auto;
}

/* CONTENEUR */

.navbar-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;

  min-height: 82px;
  padding: 14px 24px;

  border: 1px solid var(--border-color);
  border-radius: 999px;

  background: rgba(15, 23, 42, 0.88);

  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);

  box-shadow:
    0 8px 30px rgba(0, 0, 0, 0.12);
}

/* ==========================================
   IDENTITÉ
========================================== */

.navbar-logo {
  display: inline-flex;
  align-items: center;
  gap: 14px;

  min-width: 0;
  flex-shrink: 0;

  text-decoration: none;
  color: var(--text-main, #f8fafc);
}

/* CONTENEUR PHOTO */

.profile-container {
  position: relative;
  width: 46px;
  height: 46px;
  flex-shrink: 0;
}

/* PHOTO DE PROFIL */

.profile-image {
  display: block;

  width: 46px;
  height: 46px;

  object-fit: cover;
  object-position: center;

  border-radius: 50%;
  border: 2px solid #8b5cf6;

  background: #312e81;

  box-shadow:
    0 0 0 3px rgba(139, 92, 246, 0.12);

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
}

.navbar-logo:hover .profile-image {
  transform: scale(1.06);

  box-shadow:
    0 0 0 4px rgba(139, 92, 246, 0.2);
}

/* INDICATEUR DE DISPONIBILITÉ */

.profile-status {
  position: absolute;
  right: 0;
  bottom: 0;

  width: 12px;
  height: 12px;

  border-radius: 50%;

  background: #22c55e;
  border: 2px solid #0f172a;
}

/* NOM + MÉTIER */

.logo-identity {
  display: flex;
  flex-direction: column;
  gap: 5px;
  min-width: 0;
}

.logo-text {
  color: var(--text-main, #f8fafc);
  font-size: 0.95rem;
  font-weight: 700;
  line-height: 1.2;
  white-space: nowrap;
}

.logo-subtitle {
  color: #a78bfa;
  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 0.15px;
  white-space: nowrap;
}

/* ==========================================
   NAVIGATION DESKTOP
========================================== */

.navbar-links {
  display: flex;
  align-items: center;
  gap: clamp(14px, 2vw, 28px);
}

.navbar-links a {
  position: relative;
  padding: 10px 0;

  color: var(--text-muted, #94a3b8);
  font-size: 0.92rem;
  font-weight: 500;
  white-space: nowrap;
  text-decoration: none;

  transition: color 0.2s ease;
}

.navbar-links a:hover,
.navbar-links a:focus-visible {
  color: var(--text-main, #f8fafc);
}

.navbar-links a::after {
  content: '';

  position: absolute;
  left: 0;
  bottom: 4px;

  width: 0;
  height: 2px;

  background: #8b5cf6;
  border-radius: 99px;

  transition: width 0.25s ease;
}

.navbar-links a:hover::after,
.navbar-links a:focus-visible::after {
  width: 100%;
}

/* ==========================================
   BOUTON MENU MOBILE
========================================== */

.menu-toggle {
  display: none;

  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5px;

  width: 42px;
  height: 42px;
  flex-shrink: 0;

  padding: 0;

  background: rgba(139, 92, 246, 0.12);
  border: 1px solid rgba(139, 92, 246, 0.3);
  border-radius: 12px;

  cursor: pointer;
}

.menu-toggle span {
  display: block;

  width: 19px;
  height: 2px;

  background: #c4b5fd;
  border-radius: 3px;

  transition:
    transform 0.2s ease,
    opacity 0.2s ease;
}

.menu-toggle span:first-child.actif {
  transform: translateY(7px) rotate(45deg);
}

.menu-toggle span:nth-child(2).actif {
  opacity: 0;
}

.menu-toggle span:last-child.actif {
  transform: translateY(-7px) rotate(-45deg);
}

/* ==========================================
   MENU MOBILE
========================================== */

.mobile-menu {
  display: flex;
  flex-direction: column;
  gap: 4px;

  margin-top: 10px;
  padding: 14px;

  border: 1px solid var(--border-color);
  border-radius: 18px;

  background: rgba(15, 23, 42, 0.97);

  box-shadow:
    0 12px 30px rgba(0, 0, 0, 0.2);
}

.mobile-menu a {
  display: block;

  padding: 13px 14px;

  color: #cbd5e1;
  font-size: 0.92rem;
  font-weight: 500;

  border-radius: 10px;
  text-decoration: none;

  transition:
    background 0.2s ease,
    color 0.2s ease;
}

.mobile-menu a:hover,
.mobile-menu a:focus-visible {
  color: #ffffff;
  background: rgba(139, 92, 246, 0.15);
}

/* ==========================================
   RESPONSIVE TABLETTE
========================================== */

@media (max-width: 1000px) {
  .navbar-links {
    gap: 14px;
  }

  .navbar-container {
    padding-inline: 20px;
  }
}

/* ==========================================
   RESPONSIVE MOBILE
========================================== */

@media (max-width: 900px) {
  .navbar-links {
    display: none;
  }

  .menu-toggle {
    display: flex;
  }
}

@media (max-width: 480px) {
  .navbar {
    top: 10px;
    width: calc(100% - 20px);
  }

  .navbar-container {
    min-height: 68px;
    gap: 10px;
    padding: 10px 14px;
  }

  .navbar-logo {
    gap: 10px;
  }

  .profile-container,
  .profile-image {
    width: 40px;
    height: 40px;
  }

  .logo-text {
    font-size: 0.82rem;
  }

  .logo-subtitle {
    font-size: 0.63rem;
  }

  .menu-toggle {
    width: 38px;
    height: 38px;
  }
}

/* ==========================================
   ACCESSIBILITÉ
========================================== */

@media (prefers-reduced-motion: reduce) {
  .profile-image,
  .navbar-links a,
  .navbar-links a::after,
  .menu-toggle span,
  .mobile-menu a {
    transition: none;
  }

  .navbar-logo:hover .profile-image {
    transform: none;
  }
}
</style>
