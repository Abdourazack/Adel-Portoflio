<template>
  <footer class="footer">
    <p>
      © {{ currentYear }} Adel Abdourazack — Portfolio développeur fullstack junior.
    </p>

    <p>
      Construit avec Vue 3, TypeScript et Vite.
    </p>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<style scoped>
.footer {
  width: min(1180px, calc(100% - 32px));
  margin: 0 auto;
  padding: 36px 0 44px;
  border-top: 1px solid var(--border-color);
  color: var(--text-muted);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  font-size: 0.95rem;
}

@media (max-width: 720px) {
  .footer {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>