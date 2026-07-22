const es = {
  navigation: {
    home: 'Inicio',
    about: 'Sobre mí',
    projects: 'Proyectos',
    education: 'Formación',
    contact: 'Contacto',
  },
  hero: {
    status: 'Disponible para nuevas oportunidades',
    greeting: 'Hola, soy',
    name: 'Samuel Coco',
    role: 'Ingeniero Informático · Software, Datos e IA',
    description:
      'Graduado en Ingeniería Informática especializado en Ingeniería del Software, interesado en el desarrollo de aplicaciones, el análisis de datos y la inteligencia artificial aplicada a la ingeniería.',
    availability:
      'España · Remoto, híbrido o presencial · Abierto a reubicación internacional',
    viewProjects: 'Ver proyectos',
    contact: 'Contactar',
    github: 'GitHub',
    linkedin: 'LinkedIn',
  },
  about: {
  kicker: 'Más que generar código',
  title: 'Comprender, decidir y construir.',
  paragraphOne:
    'Soy graduado en Ingeniería Informática, especializado en Ingeniería del Software por la Universidad de Sevilla. Me interesa participar en proyectos completos, desde la definición del problema hasta la implementación, las pruebas y la validación del resultado.',
  paragraphTwo:
    'Mi Trabajo Fin de Grado me permitió experimentar con inteligencia artificial durante todo el ciclo de desarrollo y confirmar que la velocidad de generación solo aporta valor cuando está acompañada de criterio técnico, trazabilidad y revisión crítica.',
  capabilities: {
    lifecycle: {
      title: 'Visión de ciclo completo',
      description:
        'Requisitos, diseño, arquitectura, implementación, pruebas y documentación.',
    },
    critical: {
      title: 'Validación crítica',
      description:
        'No aceptar una solución solo porque parece correcta: probarla, revisarla e integrarla.',
    },
    adaptability: {
      title: 'Adaptación y aprendizaje',
      description:
        'Experiencia internacional, autonomía y disposición para afrontar nuevos entornos.',
    },
  },
  tfg: {
    label: 'Proyecto destacado · TFG',
    grade: '9,5',
    title: 'El cambio del paradigma del desarrollo software',
    subtitle:
      'Análisis práctico del desarrollo asistido por IA mediante la creación de ErasmusMate y tres iteraciones completas del prototipo.',
    conclusion:
      'Cuando generar se vuelve rápido, validar se convierte en el verdadero cuello de botella.',
    action: 'Explorar el proyecto y sus iteraciones',
  },
  sports: {
    label: 'Más allá del software',
    title: 'Tecnología, datos y deporte',
    description:
      'También me interesa la aplicación del software y el análisis de datos al deporte, especialmente al fútbol, como posible línea de especialización futura.',
  },
},
  projects: {
    kicker: 'Caso de estudio principal',
    title:
      'ErasmusMate: tres iteraciones para estudiar una nueva forma de desarrollar software.',
    introduction:
      'Un único caso de estudio construido de forma incremental para observar cómo la inteligencia artificial generativa transforma el proceso de ingeniería software, desde la definición del problema hasta las pruebas y la validación.',
    relation:
      'ErasmusMate fue el caso práctico del TFG «El cambio del paradigma del desarrollo software: rol del ingeniero software en el desarrollo asistido por IA».',
    integrityNote:
      'Los repositorios se mantienen en el estado utilizado durante el desarrollo y evaluación del TFG. Esta sección añade contexto sobre la evolución, las decisiones y los aprendizajes de cada iteración.',
    technologiesLabel: 'Tecnologías y artefactos relevantes',
    cover: {
      alt: 'Portada conceptual sobre la elección entre el desarrollo software tradicional y el desarrollo asistido por agentes de IA',
      caption:
        'Portada conceptual del cambio de paradigma; la captura siguiente muestra el producto software implementado.',
      caseStudy: 'TFG · Caso práctico implementado',
      tfgTitle: 'El cambio del paradigma del desarrollo software',
      subtitle: 'Rol del ingeniero software en el desarrollo asistido por IA',
      description:
        'Una plataforma para centralizar la gestión de movilidades Erasmus y estudiar, sobre un dominio complejo, qué acelera la IA y qué decisiones siguen requiriendo criterio, control y validación humana.',
      iterationsLabel: 'Tres iteraciones de un mismo producto',
      repositoryAction: 'Ver el repositorio de la versión final',
      finalAlt:
        'Captura del prototipo final de ErasmusMate con el espacio institucional de movilidad de un estudiante',
      finalLabel: 'Producto implementado',
      finalCaption:
        'La tercera iteración consolidó el núcleo institucional, los roles, la capa social y la validación del caso de estudio.',
    },
    summary: {
      kicker: 'El producto y el experimento',
      title: 'Un dominio suficientemente amplio para poner a prueba el proceso completo.',
      institutional:
        'ErasmusMate centraliza trámites, documentos, entregas, revisiones, estados, fechas límite, notificaciones, excepciones y el Learning Agreement para estudiantes, coordinadores y administradores.',
      social:
        'Sobre ese núcleo institucional incorpora una capa social secundaria para descubrir estudiantes, crear conexiones, intercambiar mensajes, consultar contenido y recomendaciones, y utilizar funciones de moderación y mapas.',
      relevance:
        'La combinación de reglas, workflows, roles y experiencias distintas permitió analizar la IA no solo al generar interfaces, sino también en requisitos, arquitectura, implementación, pruebas, documentación, auditoría y trazabilidad.',
      indicators: {
        iterations: { value: '3', label: 'iteraciones conectadas' },
        lifecycle: { value: 'Completo', label: 'ciclo de desarrollo estudiado' },
        validation: { value: 'Crítica', label: 'validación y trazabilidad' },
        roles: { value: '3 roles', label: 'estudiante, coordinador y administrador' },
      },
    },
    evolution: {
      kicker: '01 → 02 → 03',
      title: 'La interfaz cambió porque antes cambió la forma de dirigir a la IA.',
      description:
        'Cada prototipo aplicó lo aprendido en el anterior. El resultado permite leer tanto la evolución del producto como la del método de trabajo, sus decisiones y sus límites.',
      finalVersion: 'Versión final',
      labels: {
        objective: 'Objetivo',
        result: 'Resultado',
        limitation: 'Limitación detectada',
        learning: 'Aprendizaje aplicado',
      },
      repositoryAction: 'Ver repositorio original de la iteración {{iteration}}',
    },
    iterations: {
      one: {
        name: 'Prototipo 1',
        phase: 'Exploración con mayor autonomía',
        imageAlt:
          'Captura de la primera iteración de ErasmusMate con el panel institucional del estudiante',
        objective:
          'Probar el modo de planificación de Codex y darle libertad para implementar a partir de un plan inicial, interviniendo principalmente en su preparación.',
        result:
          'Partió de Agents.md, artefactos en formato DOCX y capturas de Figma. Se obtuvo una versión principalmente visual, pero poco funcional.',
        limitation:
          'Al tomar demasiadas decisiones por su cuenta, Codex produjo decisiones visuales poco prácticas, se centró en frontend y no conectó correctamente el backend añadido después.',
        learning:
          'Era necesario guiar más el proceso, evitar documentos pesados, documentar decisiones y desarrollar backend y frontend de forma coordinada desde el inicio.',
      },
      two: {
        name: 'Prototipo 2',
        phase: 'Guía y documentación estructuradas',
        imageAlt:
          'Captura de la segunda iteración de ErasmusMate con la gestión institucional de movilidad',
        objective:
          'Aplicar los aprendizajes del primer prototipo y comprobar si una guía más estructurada mejoraba el resultado.',
        result:
          'Se utilizaron documentos más ligeros, se añadió Plan.md y se pidió mantener Decisions.md. Esta iteración produjo un producto enseñable y un backend funcional.',
        limitation:
          'El frontend seguía siendo visualmente simple, algunos botones tenían nombres robóticos y no siempre se respetaba el principio de reducir clics para completar acciones.',
        learning:
          'Había que recordar explícitamente en cada prompt la actualización de Decisions.md, reforzar la experiencia de usuario e incorporar pruebas, matriz de pruebas y estilos desde el inicio de la siguiente iteración.',
      },
      three: {
        name: 'Prototipo 3',
        phase: 'Consolidación, pruebas y validación',
        imageAlt:
          'Captura de la tercera iteración y versión final de ErasmusMate con el espacio oficial de movilidad',
        objective:
          'Comprobar si todo lo aprendido permitía alcanzar un prototipo final más sólido, con mejor estética, estilos, pruebas y mayor control de decisiones.',
        result:
          'Se incorporaron estilos, recordatorios sobre decisiones, pruebas y mejoras sobre la iteración anterior. El prototipo resultó suficientemente completo para mostrarse y utilizarse como evidencia principal del caso de estudio.',
        limitation:
          'Por limitaciones de tiempo no se desplegó en producción ni se probó con usuarios beta, aunque se consideró suficientemente sólido para el objetivo académico del TFG.',
        learning:
          'La metodología de trabajo se había depurado: la IA resultó más útil cuando estaba guiada por restricciones, pruebas, documentación y control de decisiones.',
      },
    },
    architecture: {
      action: 'Ver arquitectura del prototipo final',
      alt: 'Diagrama de la arquitectura general del prototipo final de ErasmusMate',
      caption:
        'Arquitectura full-stack local con núcleo institucional, capa social, persistencia, pruebas y trazabilidad.',
    },
    report: {
      kicker: 'Memoria del TFG',
      title: 'Consulta el trabajo completo',
      description:
        'La memoria documenta el proceso de investigación, la evolución de ErasmusMate, la comparación entre automatización y orquestación manual, la arquitectura, la implementación, las pruebas y las conclusiones obtenidas sobre el nuevo rol del ingeniero software.',
      metadata: 'PDF · 246 páginas · Español',
      publicNote:
        'Esta versión pública conserva íntegro el contenido académico y técnico de la memoria presentada y evaluada. Únicamente se han omitido los campos de DNI y se ha sustituido el correo universitario por el correo profesional.',
      openAction: 'Leer en el navegador',
      downloadAction: 'Descargar PDF',
      auxiliary:
        'Versión pública de la memoria presentada en la Universidad de Sevilla.',
      visual: {
        publicVersion: 'Versión pública',
        shortTitle: 'El cambio del paradigma del desarrollo software',
        university: 'Universidad de Sevilla',
        degree: 'Grado en Ingeniería Informática · Ingeniería del Software',
        session: 'Convocatoria de julio de 2026',
        gradeLabel: 'Calificación',
        pagesLabel: 'páginas',
      },
    },
    orchestrator: {
      kicker: 'Proyecto técnico relacionado',
      description:
        'Un pipeline experimental para generar artefactos de ingeniería software mediante turnos entre modelos de IA, revisión cruzada, contratos JSON, validación estructural y puertas de calidad.',
      comparison:
        'Se utilizó para explorar una automatización más completa y compararla con la orquestación manual asistida por IA. Sus limitaciones aportaron evidencia a las conclusiones del TFG sobre contexto, no determinismo y validación humana.',
      points: {
        models: 'Turnos entre modelos y revisión cruzada',
        contracts: 'Contratos JSON y validación de estructuras',
        quality: 'Puertas de calidad sobre los artefactos',
        evidence: 'Registro de respuestas, evidencias y trazabilidad',
      },
      repositoryAction: 'Explorar el repositorio de orchestrator-b',
    },
  },
  language: {
    spanish: 'Español',
    english: 'Inglés',
  },
}

export default es
