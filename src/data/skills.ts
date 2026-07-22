export type SkillCategoryId =
  | 'frontend'
  | 'backend'
  | 'quality'
  | 'design'
  | 'ai'
  | 'complementary'

export type ExperienceType = 'primary' | 'academic' | 'complementary'

export type Skill = {
  id: string
  mark: string
  translationKey: `education.skills.${string}`
  experience: ExperienceType
}

export type SkillCategory = {
  id: SkillCategoryId
  translationKey: `education.technical.categories.${SkillCategoryId}`
  skillIds: string[]
  evidenceKeys: Array<`education.technical.categories.${SkillCategoryId}.evidence.${string}`>
}

export type EvidenceItem = {
  id: 'erasmusmate' | 'portfolio' | 'orchestrator' | 'academic'
  translationKey: `education.evidence.items.${'erasmusmate' | 'portfolio' | 'orchestrator' | 'academic'}`
  skillIds: string[]
  href?: string
  external?: boolean
}

export type EducationEntry = {
  id: 'degree' | 'erasmus'
  number: '01' | '02'
  translationKey: `education.academic.entries.${'degree' | 'erasmus'}`
  highlightKeys: Array<`education.academic.entries.${'degree' | 'erasmus'}.highlights.${string}`>
  primary?: boolean
  projectHref?: string
}

export type LanguageItem = {
  id: 'spanish' | 'english' | 'portuguese'
  code: 'ES' | 'EN' | 'PT'
  translationKey: `education.languages.items.${'spanish' | 'english' | 'portuguese'}`
}

export const skills: Skill[] = [
  { id: 'react', mark: 'R', translationKey: 'education.skills.react', experience: 'primary' },
  { id: 'nextjs', mark: 'N', translationKey: 'education.skills.nextjs', experience: 'primary' },
  { id: 'typescript', mark: 'TS', translationKey: 'education.skills.typescript', experience: 'primary' },
  { id: 'javascript', mark: 'JS', translationKey: 'education.skills.javascript', experience: 'primary' },
  { id: 'html', mark: 'H', translationKey: 'education.skills.html', experience: 'primary' },
  { id: 'css', mark: 'C', translationKey: 'education.skills.css', experience: 'primary' },
  { id: 'tailwind', mark: 'TW', translationKey: 'education.skills.tailwind', experience: 'primary' },
  { id: 'vite', mark: 'V', translationKey: 'education.skills.vite', experience: 'primary' },
  { id: 'i18next', mark: 'i18n', translationKey: 'education.skills.i18next', experience: 'primary' },
  { id: 'nodejs', mark: 'JS', translationKey: 'education.skills.nodejs', experience: 'primary' },
  { id: 'java', mark: 'J', translationKey: 'education.skills.java', experience: 'academic' },
  { id: 'spring', mark: 'S', translationKey: 'education.skills.spring', experience: 'academic' },
  { id: 'python', mark: 'Py', translationKey: 'education.skills.python', experience: 'primary' },
  { id: 'kotlin', mark: 'K', translationKey: 'education.skills.kotlin', experience: 'academic' },
  { id: 'rest', mark: 'API', translationKey: 'education.skills.rest', experience: 'academic' },
  { id: 'prisma', mark: 'P', translationKey: 'education.skills.prisma', experience: 'primary' },
  { id: 'sql', mark: 'SQL', translationKey: 'education.skills.sql', experience: 'academic' },
  { id: 'sqlite', mark: 'DB', translationKey: 'education.skills.sqlite', experience: 'primary' },
  { id: 'mysql', mark: 'DB', translationKey: 'education.skills.mysql', experience: 'academic' },
  { id: 'mariadb', mark: 'DB', translationKey: 'education.skills.mariadb', experience: 'academic' },
  { id: 'vitest', mark: 'VT', translationKey: 'education.skills.vitest', experience: 'primary' },
  { id: 'playwright', mark: 'PW', translationKey: 'education.skills.playwright', experience: 'primary' },
  { id: 'unitTesting', mark: 'UT', translationKey: 'education.skills.unitTesting', experience: 'primary' },
  { id: 'e2e', mark: 'E2E', translationKey: 'education.skills.e2e', experience: 'primary' },
  { id: 'git', mark: 'G', translationKey: 'education.skills.git', experience: 'primary' },
  { id: 'github', mark: 'GH', translationKey: 'education.skills.github', experience: 'primary' },
  { id: 'actions', mark: 'CI', translationKey: 'education.skills.actions', experience: 'primary' },
  { id: 'ci', mark: 'CI', translationKey: 'education.skills.ci', experience: 'primary' },
  { id: 'maven', mark: 'M', translationKey: 'education.skills.maven', experience: 'academic' },
  { id: 'tomcat', mark: 'TC', translationKey: 'education.skills.tomcat', experience: 'academic' },
  { id: 'mermaid', mark: 'M', translationKey: 'education.skills.mermaid', experience: 'primary' },
  { id: 'figma', mark: 'F', translationKey: 'education.skills.figma', experience: 'primary' },
  { id: 'balsamiq', mark: 'B', translationKey: 'education.skills.balsamiq', experience: 'academic' },
  { id: 'domain', mark: 'DM', translationKey: 'education.skills.domain', experience: 'primary' },
  { id: 'workflows', mark: 'WF', translationKey: 'education.skills.workflows', experience: 'primary' },
  { id: 'architecture', mark: 'AR', translationKey: 'education.skills.architecture', experience: 'primary' },
  { id: 'businessRules', mark: 'BR', translationKey: 'education.skills.businessRules', experience: 'primary' },
  { id: 'documentation', mark: 'DOC', translationKey: 'education.skills.documentation', experience: 'primary' },
  { id: 'codex', mark: 'CX', translationKey: 'education.skills.codex', experience: 'primary' },
  { id: 'chatgpt', mark: 'AI', translationKey: 'education.skills.chatgpt', experience: 'primary' },
  { id: 'gemini', mark: 'AI', translationKey: 'education.skills.gemini', experience: 'primary' },
  { id: 'notebooklm', mark: 'LM', translationKey: 'education.skills.notebooklm', experience: 'primary' },
  { id: 'modelApis', mark: 'API', translationKey: 'education.skills.modelApis', experience: 'primary' },
  { id: 'json', mark: '{}', translationKey: 'education.skills.json', experience: 'primary' },
  { id: 'validation', mark: 'QA', translationKey: 'education.skills.validation', experience: 'primary' },
  { id: 'qualityGates', mark: 'QG', translationKey: 'education.skills.qualityGates', experience: 'primary' },
  { id: 'linux', mark: 'L', translationKey: 'education.skills.linux', experience: 'complementary' },
  { id: 'gns3', mark: 'G3', translationKey: 'education.skills.gns3', experience: 'complementary' },
  { id: 'wireshark', mark: 'WS', translationKey: 'education.skills.wireshark', experience: 'complementary' },
  { id: 'vscode', mark: 'VS', translationKey: 'education.skills.vscode', experience: 'complementary' },
  { id: 'eclipse', mark: 'E', translationKey: 'education.skills.eclipse', experience: 'complementary' },
  { id: 'networks', mark: 'NW', translationKey: 'education.skills.networks', experience: 'academic' },
]

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    translationKey: 'education.technical.categories.frontend',
    skillIds: ['react', 'nextjs', 'typescript', 'javascript', 'html', 'css', 'tailwind'],
    evidenceKeys: [
      'education.technical.categories.frontend.evidence.portfolio',
      'education.technical.categories.frontend.evidence.erasmusmate',
      'education.technical.categories.frontend.evidence.academic',
    ],
  },
  {
    id: 'backend',
    translationKey: 'education.technical.categories.backend',
    skillIds: ['nodejs', 'java', 'spring', 'python', 'kotlin', 'rest', 'prisma', 'sql', 'sqlite', 'mysql', 'mariadb'],
    evidenceKeys: [
      'education.technical.categories.backend.evidence.erasmusmate',
      'education.technical.categories.backend.evidence.orchestrator',
      'education.technical.categories.backend.evidence.academic',
    ],
  },
  {
    id: 'quality',
    translationKey: 'education.technical.categories.quality',
    skillIds: ['vitest', 'playwright', 'unitTesting', 'e2e', 'git', 'github', 'actions', 'ci', 'maven', 'tomcat'],
    evidenceKeys: [
      'education.technical.categories.quality.evidence.erasmusmate',
      'education.technical.categories.quality.evidence.portfolio',
      'education.technical.categories.quality.evidence.academic',
    ],
  },
  {
    id: 'design',
    translationKey: 'education.technical.categories.design',
    skillIds: ['mermaid', 'figma', 'balsamiq', 'domain', 'workflows', 'architecture', 'businessRules', 'documentation'],
    evidenceKeys: [
      'education.technical.categories.design.evidence.tfg',
      'education.technical.categories.design.evidence.erasmusmate',
      'education.technical.categories.design.evidence.academic',
    ],
  },
  {
    id: 'ai',
    translationKey: 'education.technical.categories.ai',
    skillIds: ['codex', 'chatgpt', 'gemini', 'notebooklm'],
    evidenceKeys: [
      'education.technical.categories.ai.evidence.requirements',
      'education.technical.categories.ai.evidence.engineering',
      'education.technical.categories.ai.evidence.validation',
    ],
  },
  {
    id: 'complementary',
    translationKey: 'education.technical.categories.complementary',
    skillIds: ['linux', 'gns3', 'wireshark', 'git', 'vscode', 'eclipse'],
    evidenceKeys: [
      'education.technical.categories.complementary.evidence.academic',
      'education.technical.categories.complementary.evidence.context',
    ],
  },
]

export const educationEntries: EducationEntry[] = [
  {
    id: 'degree',
    number: '01',
    translationKey: 'education.academic.entries.degree',
    primary: true,
    projectHref: '#projects',
    highlightKeys: [
      'education.academic.entries.degree.highlights.engineering',
      'education.academic.entries.degree.highlights.development',
      'education.academic.entries.degree.highlights.quality',
      'education.academic.entries.degree.highlights.systems',
    ],
  },
  {
    id: 'erasmus',
    number: '02',
    translationKey: 'education.academic.entries.erasmus',
    highlightKeys: [
      'education.academic.entries.erasmus.highlights.international',
      'education.academic.entries.erasmus.highlights.adaptability',
      'education.academic.entries.erasmus.highlights.languages',
      'education.academic.entries.erasmus.highlights.technical',
    ],
  },
]

export const evidenceItems: EvidenceItem[] = [
  {
    id: 'erasmusmate',
    translationKey: 'education.evidence.items.erasmusmate',
    skillIds: ['nextjs', 'react', 'typescript', 'prisma', 'sqlite', 'vitest', 'playwright'],
    href: '#projects',
  },
  {
    id: 'portfolio',
    translationKey: 'education.evidence.items.portfolio',
    skillIds: ['react', 'typescript', 'vite', 'i18next', 'css', 'actions'],
    href: 'https://github.com/SamuCoco04/SamuCoco04.github.io',
    external: true,
  },
  {
    id: 'orchestrator',
    translationKey: 'education.evidence.items.orchestrator',
    skillIds: ['python', 'json', 'modelApis', 'validation', 'qualityGates'],
    href: 'https://github.com/SamuCoco04/orchestrator-b',
    external: true,
  },
  {
    id: 'academic',
    translationKey: 'education.evidence.items.academic',
    skillIds: ['java', 'spring', 'kotlin', 'sql', 'mysql', 'mariadb', 'maven', 'tomcat', 'linux', 'networks'],
  },
]

export const languages: LanguageItem[] = [
  { id: 'spanish', code: 'ES', translationKey: 'education.languages.items.spanish' },
  { id: 'english', code: 'EN', translationKey: 'education.languages.items.english' },
  { id: 'portuguese', code: 'PT', translationKey: 'education.languages.items.portuguese' },
]
