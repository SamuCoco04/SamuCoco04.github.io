import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

type SupportedLanguage = 'es' | 'en'

const metadata: Record<
  SupportedLanguage,
  { title: string; description: string; locale: string }
> = {
  es: {
    title: 'Samuel Coco | Ingeniería de Software, Datos e IA',
    description:
      'Graduado en Ingeniería Informática especializado en Ingeniería del Software. Proyectos full stack, datos, inteligencia artificial aplicada y desarrollo asistido por IA.',
    locale: 'es_ES',
  },
  en: {
    title: 'Samuel Coco | Software Engineering, Data & AI',
    description:
      'Computer Engineering graduate specialised in Software Engineering. Full-stack, data, applied AI and AI-assisted development projects.',
    locale: 'en_GB',
  },
}

function updateMeta(selector: string, content: string) {
  document.querySelector<HTMLMetaElement>(selector)?.setAttribute('content', content)
}

export function useDocumentMetadata() {
  const { i18n } = useTranslation()
  const language: SupportedLanguage = i18n.resolvedLanguage === 'en' ? 'en' : 'es'

  useEffect(() => {
    const current = metadata[language]

    document.documentElement.lang = language
    document.title = current.title
    updateMeta('meta[name="description"]', current.description)
    updateMeta('meta[property="og:title"]', current.title)
    updateMeta('meta[property="og:description"]', current.description)
    updateMeta('meta[property="og:locale"]', current.locale)
    updateMeta('meta[name="twitter:title"]', current.title)
    updateMeta('meta[name="twitter:description"]', current.description)
  }, [language])
}
