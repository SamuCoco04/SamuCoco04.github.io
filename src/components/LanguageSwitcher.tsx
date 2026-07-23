import { useTranslation } from 'react-i18next'

function LanguageSwitcher() {
  const { i18n, t } = useTranslation()
  const currentLanguage = i18n.resolvedLanguage ?? 'es'

  const changeLanguage = (language: 'es' | 'en') => {
    void i18n.changeLanguage(language)
  }

  return (
    <div
      className="language-switcher"
      role="group"
      aria-label={t('language.selectorLabel')}
    >
      <button
        type="button"
        className={currentLanguage === 'es' ? 'active' : ''}
        aria-label={t('language.selectSpanish')}
        aria-pressed={currentLanguage === 'es'}
        onClick={() => changeLanguage('es')}
      >
        ES
      </button>

      <span aria-hidden="true">|</span>

      <button
        type="button"
        className={currentLanguage === 'en' ? 'active' : ''}
        aria-label={t('language.selectEnglish')}
        aria-pressed={currentLanguage === 'en'}
        onClick={() => changeLanguage('en')}
      >
        EN
      </button>
    </div>
  )
}

export default LanguageSwitcher
