import { useTranslation } from 'react-i18next'

import {
  professionalProfile,
  type CvLanguage,
} from '../data/contact'
import './ContactSection.css'

function ContactSection() {
  const { t, i18n } = useTranslation()
  const currentLanguage: CvLanguage = i18n.resolvedLanguage?.startsWith('en')
    ? 'en'
    : 'es'
  const secondaryLanguage: CvLanguage = currentLanguage === 'es' ? 'en' : 'es'
  const primaryCv = professionalProfile.cvs[currentLanguage]
  const secondaryCv = professionalProfile.cvs[secondaryLanguage]
  const cvUrl = (publicPath: string) =>
    `${import.meta.env.BASE_URL}${publicPath}`

  return (
    <section id="contact" className="contact">
      <div className="contact-layout">
        <div className="contact-content">
          <p className="contact-kicker">{t('contact.kicker')}</p>
          <h2>{t('contact.title')}</h2>
          <p className="contact-description">{t('contact.description')}</p>
          <p className="contact-objective">{t('contact.objective')}</p>

          <div className="contact-availability">
            <span className="contact-status-dot" aria-hidden="true" />
            <span>{t('contact.availability')}</span>
          </div>

          <div className="contact-identity">
            <strong>{professionalProfile.name}</strong>
            <a href={`mailto:${professionalProfile.email}`}>
              {professionalProfile.email}
            </a>
          </div>

          <div className="contact-actions">
            <a
              className="contact-action contact-action-primary"
              href={`mailto:${professionalProfile.email}`}
            >
              {t('contact.emailAction')}
            </a>
            <a
              className="contact-action contact-action-secondary"
              href={professionalProfile.linkedinUrl}
              target="_blank"
              rel="noreferrer"
            >
              {t('contact.linkedinAction')}
              <span aria-hidden="true">↗</span>
            </a>
            <a
              className="contact-action contact-action-secondary"
              href={professionalProfile.githubUrl}
              target="_blank"
              rel="noreferrer"
            >
              {t('contact.githubAction')}
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <aside className="cv-panel" aria-labelledby="cv-panel-title">
          <div className="cv-panel-heading">
            <div>
              <p>{t('contact.cv.kicker')}</p>
              <h3 id="cv-panel-title">{t('contact.cv.title')}</h3>
            </div>
            <span aria-hidden="true">CV</span>
          </div>

          <p className="cv-description">{t('contact.cv.description')}</p>

          <div className="cv-language-summary">
            <span>{currentLanguage.toUpperCase()}</span>
            <div>
              <strong>{t(`contact.cv.language.${currentLanguage}`)}</strong>
              <small>{t('contact.cv.currentLanguage')}</small>
            </div>
          </div>

          <div className="cv-actions">
            <a
              className="cv-action cv-action-primary"
              href={cvUrl(primaryCv.publicPath)}
              download={primaryCv.downloadName}
            >
              {t(`contact.cv.primaryAction.${currentLanguage}`)}
              <span aria-hidden="true">↓</span>
            </a>
            <a
              className="cv-action cv-action-secondary"
              href={cvUrl(secondaryCv.publicPath)}
              download={secondaryCv.downloadName}
            >
              {t(`contact.cv.secondaryAction.${secondaryLanguage}`)}
              <span aria-hidden="true">↓</span>
            </a>
          </div>

          <p className="cv-metadata">{t('contact.cv.metadata')}</p>
        </aside>
      </div>
    </section>
  )
}

export default ContactSection
