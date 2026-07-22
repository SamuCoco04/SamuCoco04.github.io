import { useTranslation } from 'react-i18next'

import { professionalProfile } from '../data/contact'
import './Footer.css'

function Footer() {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <p>
        © {currentYear} · {t('footer.credit')}
      </p>
      <nav aria-label={t('footer.navigationLabel')}>
        <a
          href={professionalProfile.githubUrl}
          target="_blank"
          rel="noreferrer"
        >
          {t('hero.github')}
        </a>
        <a
          href={professionalProfile.linkedinUrl}
          target="_blank"
          rel="noreferrer"
        >
          {t('hero.linkedin')}
        </a>
        <a href="#home">{t('footer.backToTop')}</a>
      </nav>
    </footer>
  )
}

export default Footer
