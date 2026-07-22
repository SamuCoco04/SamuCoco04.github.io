import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import {
  educationEntries,
  evidenceItems,
  languages,
  skillCategories,
  skills,
  type SkillCategoryId,
} from '../data/skills'
import './EducationSection.css'

const skillsById = new Map(skills.map((skill) => [skill.id, skill]))

function EducationSection() {
  const { t } = useTranslation()
  const [activeCategoryId, setActiveCategoryId] =
    useState<SkillCategoryId>('frontend')
  const activeCategory =
    skillCategories.find((category) => category.id === activeCategoryId) ??
    skillCategories[0]

  return (
    <section id="education" className="education">
      <header className="education-heading">
        <p className="education-kicker">{t('education.kicker')}</p>
        <h2>{t('education.title')}</h2>
        <p>{t('education.introduction')}</p>
      </header>

      <section className="academic-path" aria-labelledby="academic-path-title">
        <header className="education-subheading">
          <p className="education-kicker">{t('education.academic.kicker')}</p>
          <h3 id="academic-path-title">{t('education.academic.title')}</h3>
        </header>

        <ul className="academic-indicators">
          {(['completed', 'duration', 'erasmus', 'tfg'] as const).map(
            (indicator) => (
              <li key={indicator}>
                <strong>{t(`education.academic.indicators.${indicator}.value`)}</strong>
                <span>{t(`education.academic.indicators.${indicator}.label`)}</span>
              </li>
            ),
          )}
        </ul>

        <ol className="academic-timeline">
          {educationEntries.map((entry) => (
            <li
              key={entry.id}
              className={entry.primary ? 'academic-entry academic-entry-primary' : 'academic-entry'}
            >
              <article>
                <div className="academic-number" aria-hidden="true">
                  {entry.number}
                </div>
                <div className="academic-content">
                  <div className="academic-entry-heading">
                    <div>
                      <p>{t(`${entry.translationKey}.type`)}</p>
                      <h4>{t(`${entry.translationKey}.institution`)}</h4>
                    </div>
                    <span>{t(`${entry.translationKey}.period`)}</span>
                  </div>

                  <h5>{t(`${entry.translationKey}.title`)}</h5>
                  <p className="academic-location">{t(`${entry.translationKey}.location`)}</p>
                  <p className="academic-status">{t(`${entry.translationKey}.status`)}</p>
                  <p className="academic-description">
                    {t(`${entry.translationKey}.description`)}
                  </p>

                  <ul className="academic-highlights">
                    {entry.highlightKeys.map((highlightKey) => (
                      <li key={highlightKey}>{t(highlightKey)}</li>
                    ))}
                  </ul>

                  {entry.projectHref && (
                    <a className="education-link" href={entry.projectHref}>
                      {t('education.academic.tfgAction')}
                      <span aria-hidden="true">→</span>
                    </a>
                  )}
                </div>
              </article>
            </li>
          ))}
        </ol>
      </section>

      <section className="technical-profile" aria-labelledby="technical-profile-title">
        <header className="education-subheading technical-heading">
          <p className="education-kicker">{t('education.technical.kicker')}</p>
          <h3 id="technical-profile-title">{t('education.technical.title')}</h3>
          <p>{t('education.technical.introduction')}</p>
        </header>

        <div className="technical-explorer">
          <nav className="category-selector" aria-label={t('education.technical.selectorLabel')}>
            {skillCategories.map((category) => (
              <button
                key={category.id}
                type="button"
                aria-pressed={category.id === activeCategory.id}
                aria-controls="technical-category-panel"
                onClick={() => setActiveCategoryId(category.id)}
              >
                <span>{t(`${category.translationKey}.shortLabel`)}</span>
                <small>{String(category.skillIds.length).padStart(2, '0')}</small>
              </button>
            ))}
          </nav>

          <div
            id="technical-category-panel"
            className="technical-panel"
            aria-live="polite"
          >
            <div className="technical-panel-heading">
              <div>
                <p>{t('education.technical.activeCategory')}</p>
                <h4>{t(`${activeCategory.translationKey}.title`)}</h4>
              </div>
              <span>{t(`${activeCategory.translationKey}.context`)}</span>
            </div>

            <p className="technical-panel-description">
              {t(`${activeCategory.translationKey}.description`)}
            </p>

            <ul className="skill-grid">
              {activeCategory.skillIds.map((skillId) => {
                const skill = skillsById.get(skillId)

                if (!skill) return null

                return (
                  <li key={skill.id}>
                    <span className="skill-mark" aria-hidden="true">{skill.mark}</span>
                    <div>
                      <strong>{t(skill.translationKey)}</strong>
                      <small>{t(`education.technical.experience.${skill.experience}`)}</small>
                    </div>
                  </li>
                )
              })}
            </ul>

            <aside className="category-evidence">
              <h5>{t('education.technical.evidenceLabel')}</h5>
              <ul>
                {activeCategory.evidenceKeys.map((evidenceKey) => (
                  <li key={evidenceKey}>{t(evidenceKey)}</li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <section className="applied-evidence" aria-labelledby="applied-evidence-title">
        <header className="education-subheading">
          <p className="education-kicker">{t('education.evidence.kicker')}</p>
          <h3 id="applied-evidence-title">{t('education.evidence.title')}</h3>
        </header>

        <div className="evidence-grid">
          {evidenceItems.map((item, index) => {
            const content = (
              <>
                <div className="evidence-card-heading">
                  <span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                  <h4>{t(`${item.translationKey}.title`)}</h4>
                </div>
                <p>{t(`${item.translationKey}.description`)}</p>
                <ul>
                  {item.skillIds.map((skillId) => {
                    const skill = skillsById.get(skillId)
                    return skill ? <li key={skill.id}>{t(skill.translationKey)}</li> : null
                  })}
                </ul>
                {item.href && (
                  <span className="evidence-action">
                    {t(`${item.translationKey}.action`)}
                    <span aria-hidden="true">{item.external ? '↗' : '→'}</span>
                  </span>
                )}
              </>
            )

            return item.href ? (
              <a
                key={item.id}
                className="evidence-card evidence-card-link"
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noreferrer' : undefined}
              >
                {content}
              </a>
            ) : (
              <article key={item.id} className="evidence-card">
                {content}
              </article>
            )
          })}
        </div>
      </section>

      <div className="education-closing-grid">
        <section className="languages-card" aria-labelledby="languages-title">
          <div>
            <p className="education-kicker">{t('education.languages.kicker')}</p>
            <h3 id="languages-title">{t('education.languages.title')}</h3>
          </div>
          <ul>
            {languages.map((language) => (
              <li key={language.id}>
                <span aria-hidden="true">{language.code}</span>
                <div>
                  <strong>{t(`${language.translationKey}.name`)}</strong>
                  <p>{t(`${language.translationKey}.level`)}</p>
                </div>
              </li>
            ))}
          </ul>
          <p className="languages-note">{t('education.languages.note')}</p>
        </section>

        <aside className="continuous-learning">
          <p className="education-kicker">{t('education.continuous.kicker')}</p>
          <h3>{t('education.continuous.title')}</h3>
          <p>{t('education.continuous.description')}</p>
        </aside>
      </div>
    </section>
  )
}

export default EducationSection
