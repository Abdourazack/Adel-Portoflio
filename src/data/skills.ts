export type SkillCategory = {
  title: string
  description: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend principal',
    description: 'Stack utilisée pour construire des interfaces modernes, dashboards et admin panels.',
    skills: ['Vue 3', 'TypeScript', 'Vite', 'Pinia', 'Vue Router', 'HTML', 'CSS', 'Responsive UI'],
  },
  {
    title: 'Backend & API',
    description: 'Création d’APIs REST, logique serveur et intégration de bases de données.',
    skills: ['Node.js', 'Express.js', 'REST API', 'MySQL', 'Firebird', 'Sécurité SELECT-only'],
  },
  {
    title: 'Outils',
    description: 'Environnement de développement, tests API, versioning et déploiement.',
    skills: ['Git', 'GitHub', 'Postman', 'DBeaver', 'Netlify', 'Docker bases'],
  },
  {
    title: 'Technologies complémentaires',
    description: 'Technologies connues en complément de ma stack principale.',
    skills: ['React', 'Angular', 'Nginx', 'GitHub Actions'],
  },
]