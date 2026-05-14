<template>
  <div class="page">
    <Navbar />

    <main>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
       <ContactSection />
    </main>
  </div>
</template>

<script setup lang="ts">
import Navbar from '../components/layout/Navbar.vue'
import HeroSection from '../components/home/HeroSection.vue'
import AboutSection from '../components/home/AboutSection.vue'
import SkillsSection from '../components/home/SkillsSection.vue'
import ExperienceSection from '../components/home/ExperienceSection.vue'
import ProjectsSection from '../components/home/ProjectsSection.vue'
import ContactSection from '../components/home/ContactSection.vue'
</script>