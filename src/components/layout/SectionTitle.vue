<template>
  <div class="section-header">
    <span class="section-eyebrow">
      {{ eyebrow }}
    </span>

    <h2 class="section-title">
      {{ title }}
    </h2>

    <p v-if="description" class="section-description">
      {{ description }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  eyebrow: string
  title: string
  description?: string
}>()
</script>