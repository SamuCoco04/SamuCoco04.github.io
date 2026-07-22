export type ProjectIteration = {
  id: string
  image: string
  repositoryUrl: string
  translationKey: `projects.iterations.${'one' | 'two' | 'three'}`
  technologies: string[]
  isFinal?: boolean
  architectureImage?: string
}

export const erasmusMate = {
  coverImage: '/projects/erasmusmate/cover.png',
  finalImage: '/projects/erasmusmate/iteration-3.png',
  finalRepositoryUrl: 'https://github.com/SamuCoco04/test-ErasmusMate-03',
  report: {
    publicPath: 'documents/TFG-Samuel-Coco-version-publica.pdf',
    downloadName: 'TFG-Samuel-Coco-version-publica.pdf',
    pages: 246,
  },
  technologies: [
    'Next.js',
    'React',
    'TypeScript',
    'Tailwind CSS',
    'Prisma',
    'SQLite',
    'Vitest',
    'Playwright',
  ],
  iterations: [
    {
      id: '01',
      image: '/projects/erasmusmate/iteration-1.png',
      repositoryUrl: 'https://github.com/SamuCoco04/test-ErasmusMate-01',
      translationKey: 'projects.iterations.one',
      technologies: ['Codex', 'Agents.md', 'Figma'],
    },
    {
      id: '02',
      image: '/projects/erasmusmate/iteration-2.png',
      repositoryUrl: 'https://github.com/SamuCoco04/test-ErasmusMate-02',
      translationKey: 'projects.iterations.two',
      technologies: ['Codex', 'Plan.md', 'Decisions.md'],
    },
    {
      id: '03',
      image: '/projects/erasmusmate/iteration-3.png',
      repositoryUrl: 'https://github.com/SamuCoco04/test-ErasmusMate-03',
      translationKey: 'projects.iterations.three',
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'Vitest', 'Playwright'],
      isFinal: true,
      architectureImage: '/projects/erasmusmate/architecture.png',
    },
  ] satisfies ProjectIteration[],
}

export const orchestratorB = {
  repositoryUrl: 'https://github.com/SamuCoco04/orchestrator-b',
}
