export type ProjectIteration = {
  id: string
  image: ProjectImage
  repositoryUrl: string
  translationKey: `projects.iterations.${'one' | 'two' | 'three'}`
  technologies: string[]
  isFinal?: boolean
  architectureImage?: ProjectImage
}

export type ProjectImage = {
  path: string
  width: number
  height: number
}

export const erasmusMate = {
  coverImage: {
    path: 'projects/erasmusmate/cover.webp',
    width: 1702,
    height: 924,
  },
  finalImage: {
    path: 'projects/erasmusmate/iteration-3.webp',
    width: 1672,
    height: 941,
  },
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
      image: {
        path: 'projects/erasmusmate/iteration-1.webp',
        width: 1882,
        height: 737,
      },
      repositoryUrl: 'https://github.com/SamuCoco04/test-ErasmusMate-01',
      translationKey: 'projects.iterations.one',
      technologies: ['Codex', 'Agents.md', 'Figma'],
    },
    {
      id: '02',
      image: {
        path: 'projects/erasmusmate/iteration-2.webp',
        width: 1896,
        height: 857,
      },
      repositoryUrl: 'https://github.com/SamuCoco04/test-ErasmusMate-02',
      translationKey: 'projects.iterations.two',
      technologies: ['Codex', 'Plan.md', 'Decisions.md'],
    },
    {
      id: '03',
      image: {
        path: 'projects/erasmusmate/iteration-3.webp',
        width: 1672,
        height: 941,
      },
      repositoryUrl: 'https://github.com/SamuCoco04/test-ErasmusMate-03',
      translationKey: 'projects.iterations.three',
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'Vitest', 'Playwright'],
      isFinal: true,
      architectureImage: {
        path: 'projects/erasmusmate/architecture.webp',
        width: 1672,
        height: 941,
      },
    },
  ] satisfies ProjectIteration[],
}

export const orchestratorB = {
  repositoryUrl: 'https://github.com/SamuCoco04/orchestrator-b',
}
