const en = {
  navigation: {
    home: 'Home',
    about: 'About me',
    projects: 'Projects',
    education: 'Education',
    contact: 'Contact',
  },
  hero: {
    status: 'Open to new opportunities',
    greeting: "Hello, I'm",
    name: 'Samuel Coco',
    role: 'Computer Science Graduate · Software, Data & AI',
    description:
      'Computer Science graduate specialized in Software Engineering, interested in application development, data analysis and AI-assisted engineering.',
    availability:
      'Based in Spain · Remote, hybrid or on-site · Open to international relocation',
    viewProjects: 'View projects',
    contact: 'Contact me',
    github: 'GitHub',
    linkedin: 'LinkedIn',
  },
  about: {
  kicker: 'More than generating code',
  title: 'Understand, decide and build.',
  paragraphOne:
    'I am a Computer Engineering graduate specialised in Software Engineering at the University of Seville. I enjoy contributing to complete projects, from problem definition to implementation, testing and final validation.',
  paragraphTwo:
    'My Final Degree Project allowed me to experiment with artificial intelligence throughout the software lifecycle and confirmed that generation speed only provides value when supported by technical judgement, traceability and critical review.',
  capabilities: {
    lifecycle: {
      title: 'End-to-end perspective',
      description:
        'Requirements, design, architecture, implementation, testing and documentation.',
    },
    critical: {
      title: 'Critical validation',
      description:
        'Not accepting a solution simply because it looks correct: test, review and integrate it.',
    },
    adaptability: {
      title: 'Adaptability and learning',
      description:
        'International experience, autonomy and willingness to face new environments.',
    },
  },
  tfg: {
    label: 'Featured project · Final Degree Project',
    grade: '9.5',
    title: 'The changing paradigm of software development',
    subtitle:
      'A practical analysis of AI-assisted development through ErasmusMate and three complete prototype iterations.',
    conclusion:
      'When generation becomes fast, validation becomes the real bottleneck.',
    action: 'Explore the project and its iterations',
  },
  sports: {
    label: 'Beyond software',
    title: 'Technology, data and sport',
    description:
      'I am also interested in applying software and data analysis to sport, particularly football, as a potential future area of specialisation.',
  },
},
  projects: {
    kicker: 'Main case study',
    title:
      'ErasmusMate: three iterations to study a new way of developing software.',
    introduction:
      'A single case study built incrementally to observe how generative AI transforms the software engineering process, from problem definition to testing and validation.',
    relation:
      'ErasmusMate was the practical case for the Final Degree Project “The changing paradigm of software development: the role of the software engineer in AI-assisted development”.',
    integrityNote:
      'The repositories remain in the state used during the development and evaluation of the Final Degree Project. This section provides context on the evolution, decisions and lessons learned from each iteration.',
    technologiesLabel: 'Relevant technologies and artefacts',
    cover: {
      alt: 'Conceptual cover about choosing between traditional software development and AI agent-assisted development',
      caption:
        'Conceptual cover for the paradigm shift; the following screenshot shows the implemented software product.',
      caseStudy: 'Final Degree Project · Implemented case study',
      tfgTitle: 'The changing paradigm of software development',
      subtitle: 'The role of the software engineer in AI-assisted development',
      description:
        'A platform that centralises Erasmus mobility management and uses a complex domain to study what AI accelerates and which decisions still require human judgement, control and validation.',
      iterationsLabel: 'Three iterations of the same product',
      repositoryAction: 'View the final version repository',
      finalAlt:
        'Screenshot of the final ErasmusMate prototype showing a student institutional mobility workspace',
      finalLabel: 'Implemented product',
      finalCaption:
        'The third iteration consolidated the institutional core, roles, social layer and case-study validation.',
    },
    summary: {
      kicker: 'The product and the experiment',
      title: 'A domain broad enough to test the complete process.',
      institutional:
        'ErasmusMate centralises procedures, documents, submissions, reviews, statuses, deadlines, notifications, exceptions and the Learning Agreement for students, coordinators and administrators.',
      social:
        'On top of this institutional core, it adds a secondary social layer for discovering students, making connections, exchanging messages, accessing content and recommendations, and using moderation and map features.',
      relevance:
        'Combining rules, workflows, roles and distinct experiences made it possible to study AI not only when generating interfaces, but also across requirements, architecture, implementation, testing, documentation, auditing and traceability.',
      indicators: {
        iterations: { value: '3', label: 'connected iterations' },
        lifecycle: { value: 'Complete', label: 'development lifecycle studied' },
        validation: { value: 'Critical', label: 'validation and traceability' },
        roles: { value: '3 roles', label: 'student, coordinator and administrator' },
      },
    },
    evolution: {
      kicker: '01 → 02 → 03',
      title: 'The interface changed because the way the AI was directed changed first.',
      description:
        'Each prototype applied the lessons from the previous one. The result shows both the evolution of the product and that of the working method, its decisions and its limits.',
      finalVersion: 'Final version',
      labels: {
        objective: 'Objective',
        result: 'Result',
        limitation: 'Limitation identified',
        learning: 'Lesson applied',
      },
      repositoryAction: 'View the original iteration {{iteration}} repository',
    },
    iterations: {
      one: {
        name: 'Prototype 1',
        phase: 'Exploration with greater autonomy',
        imageAlt:
          'Screenshot of the first ErasmusMate iteration showing the student institutional dashboard',
        objective:
          'Test the Codex planning mode and give it freedom to implement from an initial plan, intervening mainly in the preparation of that plan.',
        result:
          'It started from Agents.md, DOCX artefacts and Figma screenshots. The outcome was mainly visual, but only minimally functional.',
        limitation:
          'By making too many decisions independently, Codex produced impractical visual choices, focused on the frontend and failed to connect correctly to the backend added later.',
        learning:
          'The process needed more guidance, lighter documentation, recorded decisions and coordinated backend and frontend development from the outset.',
      },
      two: {
        name: 'Prototype 2',
        phase: 'Structured guidance and documentation',
        imageAlt:
          'Screenshot of the second ErasmusMate iteration showing institutional mobility management',
        objective:
          'Apply the lessons from the first prototype and test whether more structured guidance improved the result.',
        result:
          'Lighter documents were used, Plan.md was added and Decisions.md was to be maintained. This iteration produced a presentable product and a functional backend.',
        limitation:
          'The frontend remained visually simple, some buttons had robotic labels and the principle of reducing the clicks needed to complete actions was not always respected.',
        learning:
          'Each prompt needed to explicitly require updating Decisions.md, strengthen user experience and introduce tests, a test matrix and styles from the beginning of the next iteration.',
      },
      three: {
        name: 'Prototype 3',
        phase: 'Consolidation, testing and validation',
        imageAlt:
          'Screenshot of the third and final ErasmusMate iteration showing the official mobility workspace',
        objective:
          'Test whether all the lessons learned could produce a stronger final prototype with better aesthetics, styling, tests and greater control over decisions.',
        result:
          'Styles, decision reminders, tests and improvements over the previous iteration were incorporated. The prototype was complete enough to demonstrate and use as the main evidence for the case study.',
        limitation:
          'Because of time constraints, it was neither deployed to production nor tested with beta users, although it was considered sufficiently robust for the academic objective of the project.',
        learning:
          'The working method had matured: AI proved more useful when guided by constraints, tests, documentation and explicit control over decisions.',
      },
    },
    architecture: {
      action: 'View the final prototype architecture',
      alt: 'Diagram of the general architecture of the final ErasmusMate prototype',
      caption:
        'Local full-stack architecture with an institutional core, social layer, persistence, testing and traceability.',
    },
    report: {
      kicker: 'Final Degree Project report',
      title: 'Read the complete work',
      description:
        'The report documents the research process, the evolution of ErasmusMate, the comparison between automation and manual orchestration, the architecture, implementation, testing and the conclusions obtained about the changing role of the software engineer.',
      metadata: 'PDF · 246 pages · Spanish',
      publicNote:
        'This public version preserves the complete academic and technical content of the submitted and evaluated report. Only the national identity number fields have been omitted, and the university email address has been replaced with the professional email address.',
      openAction: 'Open in browser',
      downloadAction: 'Download PDF',
      auxiliary:
        'Public version of the report submitted at the University of Seville.',
      visual: {
        publicVersion: 'Public version',
        shortTitle: 'The changing paradigm of software development',
        university: 'University of Seville',
        degree: 'Degree in Computer Engineering · Software Engineering',
        session: 'July 2026 examination session',
        gradeLabel: 'Grade',
        pagesLabel: 'pages',
      },
    },
    orchestrator: {
      kicker: 'Related technical project',
      description:
        'An experimental pipeline for generating software-engineering artefacts through turns between AI models, cross-review, JSON contracts, structural validation and quality gates.',
      comparison:
        'It was used to explore greater automation and compare it with manually orchestrated AI-assisted work. Its limitations contributed evidence to the project conclusions on context, non-determinism and human validation.',
      points: {
        models: 'Turns between models and cross-review',
        contracts: 'JSON contracts and structural validation',
        quality: 'Quality gates applied to artefacts',
        evidence: 'Logging of responses, evidence and traceability',
      },
      repositoryAction: 'Explore the orchestrator-b repository',
    },
  },
  language: {
    spanish: 'Spanish',
    english: 'English',
  },
}

export default en
