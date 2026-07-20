import { useTranslation } from 'react-i18next'

import './AboutSection.css'

function AboutSection() {
  const { t } = useTranslation()

  return (
    <section id="about" className="about">
      <div className="about-introduction">
        <p className="about-kicker">{t('about.kicker')}</p>

        <h2>{t('about.title')}</h2>

        <div className="about-text">
          <p>{t('about.paragraphOne')}</p>
          <p>{t('about.paragraphTwo')}</p>
        </div>

        <ul className="about-capabilities">
          <li>
            <strong>{t('about.capabilities.lifecycle.title')}</strong>
            <span>{t('about.capabilities.lifecycle.description')}</span>
          </li>

          <li>
            <strong>{t('about.capabilities.critical.title')}</strong>
            <span>{t('about.capabilities.critical.description')}</span>
          </li>

          <li>
            <strong>{t('about.capabilities.adaptability.title')}</strong>
            <span>{t('about.capabilities.adaptability.description')}</span>
          </li>
        </ul>
      </div>

      <div className="about-featured">
        <article className="tfg-card">
          <div className="tfg-card-header">
            <span>{t('about.tfg.label')}</span>

            <div className="tfg-grade">
              <strong>{t('about.tfg.grade')}</strong>
              <small>/10</small>
            </div>
          </div>

          <h3>{t('about.tfg.title')}</h3>

          <p className="tfg-subtitle">{t('about.tfg.subtitle')}</p>

          <blockquote>{t('about.tfg.conclusion')}</blockquote>

          <div className="tfg-tags" aria-label="Tecnologías del proyecto">
            <span>Next.js</span>
            <span>React</span>
            <span>TypeScript</span>
            <span>Prisma</span>
            <span>Vitest</span>
            <span>Playwright</span>
          </div>

          <a className="tfg-link" href="#projects">
            {t('about.tfg.action')}
            <span aria-hidden="true">→</span>
          </a>
        </article>

        <article className="sports-card">
          <p className="sports-card-label">{t('about.sports.label')}</p>
          <h3>{t('about.sports.title')}</h3>
          <p>{t('about.sports.description')}</p>
        </article>
      </div>
    </section>
  )
}

export default AboutSection
