import { useTranslation } from 'react-i18next'

function LanguageSwitcher() {
  const { i18n } = useTranslation()
  const currentLanguage = i18n.resolvedLanguage ?? 'es'

  const changeLanguage = (language: 'es' | 'en') => {
    void i18n.changeLanguage(language)
  }

  return (
    <div className="language-switcher" aria-label="Selector de idioma">
      <button
        type="button"
        className={currentLanguage === 'es' ? 'active' : ''}
        onClick={() => changeLanguage('es')}
      >
        ES
      </button>

      <span aria-hidden="true">|</span>

      <button
        type="button"
        className={currentLanguage === 'en' ? 'active' : ''}
        onClick={() => changeLanguage('en')}
      >
        EN
      </button>
    </div>
  )
}

export default LanguageSwitcher