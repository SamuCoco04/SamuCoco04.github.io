import { useTranslation } from 'react-i18next'

import { erasmusMate, orchestratorB } from '../data/projects'
import './ProjectsSection.css'

function ExternalArrow() {
  return <span aria-hidden="true">↗</span>
}

function assetUrl(path: string) {
  return `${import.meta.env.BASE_URL}${path}`
}

function ProjectsSection() {
  const { t } = useTranslation()
  const reportUrl = `${import.meta.env.BASE_URL}${erasmusMate.report.publicPath}`

  return (
    <section id="projects" className="projects">
      <header className="projects-heading">
        <p className="projects-kicker">{t('projects.kicker')}</p>
        <h2>{t('projects.title')}</h2>
        <p className="projects-introduction">{t('projects.introduction')}</p>
        <p className="projects-relation">{t('projects.relation')}</p>
        <aside className="projects-integrity-note">
          {t('projects.integrityNote')}
        </aside>
      </header>

      <article className="project-opening" aria-labelledby="erasmusmate-title">
        <figure className="project-cover">
          <img
            src={assetUrl(erasmusMate.coverImage.path)}
            alt={t('projects.cover.alt')}
            width={erasmusMate.coverImage.width}
            height={erasmusMate.coverImage.height}
            loading="lazy"
            decoding="async"
          />
          <figcaption>{t('projects.cover.caption')}</figcaption>
        </figure>

        <div className="project-opening-copy">
          <div className="project-opening-meta">
            <span>{t('projects.cover.caseStudy')}</span>
            <strong>
              {t('about.tfg.grade')}
              <small>/10</small>
            </strong>
          </div>

          <p className="project-name">ErasmusMate</p>
          <h3 id="erasmusmate-title">{t('projects.cover.tfgTitle')}</h3>
          <p className="project-subtitle">{t('projects.cover.subtitle')}</p>
          <p>{t('projects.cover.description')}</p>

          <div className="project-iteration-count">
            <span>01</span>
            <span aria-hidden="true">→</span>
            <span>02</span>
            <span aria-hidden="true">→</span>
            <span>03</span>
            <small>{t('projects.cover.iterationsLabel')}</small>
          </div>

          <ul className="project-tags" aria-label={t('projects.technologiesLabel')}>
            {erasmusMate.technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>

          <a
            className="project-link project-link-primary"
            href={erasmusMate.finalRepositoryUrl}
            target="_blank"
            rel="noreferrer"
          >
            {t('projects.cover.repositoryAction')}
            <ExternalArrow />
          </a>
        </div>

        <figure className="project-proof">
          <div className="project-proof-image">
            <img
              src={assetUrl(erasmusMate.finalImage.path)}
              alt={t('projects.cover.finalAlt')}
              width={erasmusMate.finalImage.width}
              height={erasmusMate.finalImage.height}
              loading="lazy"
              decoding="async"
            />
          </div>
          <figcaption>
            <strong>{t('projects.cover.finalLabel')}</strong>
            <span>{t('projects.cover.finalCaption')}</span>
          </figcaption>
        </figure>
      </article>

      <div className="project-summary">
        <div className="project-summary-copy">
          <p className="projects-kicker">{t('projects.summary.kicker')}</p>
          <h3>{t('projects.summary.title')}</h3>
          <p>{t('projects.summary.institutional')}</p>
          <p>{t('projects.summary.social')}</p>
          <p>{t('projects.summary.relevance')}</p>
        </div>

        <ul className="project-indicators">
          {(['iterations', 'lifecycle', 'validation', 'roles'] as const).map(
            (indicator) => (
              <li key={indicator}>
                <strong>{t(`projects.summary.indicators.${indicator}.value`)}</strong>
                <span>{t(`projects.summary.indicators.${indicator}.label`)}</span>
              </li>
            ),
          )}
        </ul>
      </div>

      <div className="project-evolution">
        <header className="project-evolution-heading">
          <p className="projects-kicker">{t('projects.evolution.kicker')}</p>
          <h3>{t('projects.evolution.title')}</h3>
          <p>{t('projects.evolution.description')}</p>
        </header>

        <ol className="project-timeline">
          {erasmusMate.iterations.map((iteration) => (
            <li key={iteration.id} className="project-iteration">
              <article>
                <figure className="iteration-visual">
                  <span className="iteration-number" aria-hidden="true">
                    {iteration.id}
                  </span>
                  <img
                    src={assetUrl(iteration.image.path)}
                    alt={t(`${iteration.translationKey}.imageAlt`)}
                    width={iteration.image.width}
                    height={iteration.image.height}
                    loading="lazy"
                    decoding="async"
                  />
                </figure>

                <div className="iteration-content">
                  <div className="iteration-heading">
                    <div>
                      <p>{t(`${iteration.translationKey}.phase`)}</p>
                      <h4>{t(`${iteration.translationKey}.name`)}</h4>
                    </div>
                    {iteration.isFinal && (
                      <span className="final-version">
                        {t('projects.evolution.finalVersion')}
                      </span>
                    )}
                  </div>

                  <dl className="iteration-details">
                    {(['objective', 'result', 'limitation', 'learning'] as const).map(
                      (detail) => (
                        <div key={detail}>
                          <dt>{t(`projects.evolution.labels.${detail}`)}</dt>
                          <dd>{t(`${iteration.translationKey}.${detail}`)}</dd>
                        </div>
                      ),
                    )}
                  </dl>

                  <ul
                    className="project-tags iteration-tags"
                    aria-label={t('projects.technologiesLabel')}
                  >
                    {iteration.technologies.map((technology) => (
                      <li key={technology}>{technology}</li>
                    ))}
                  </ul>

                  <a
                    className="project-link"
                    href={iteration.repositoryUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {t('projects.evolution.repositoryAction', {
                      iteration: iteration.id,
                    })}
                    <ExternalArrow />
                  </a>

                  {iteration.architectureImage && (
                    <details className="project-architecture">
                      <summary>{t('projects.architecture.action')}</summary>
                      <figure>
                        <img
                          src={assetUrl(iteration.architectureImage.path)}
                          alt={t('projects.architecture.alt')}
                          width={iteration.architectureImage.width}
                          height={iteration.architectureImage.height}
                          loading="lazy"
                          decoding="async"
                        />
                        <figcaption>{t('projects.architecture.caption')}</figcaption>
                      </figure>
                    </details>
                  )}
                </div>
              </article>
            </li>
          ))}
        </ol>
      </div>

      <section className="project-report" aria-labelledby="project-report-title">
        <div className="project-report-content">
          <p className="projects-kicker">{t('projects.report.kicker')}</p>
          <h3 id="project-report-title">{t('projects.report.title')}</h3>
          <p className="project-report-description">
            {t('projects.report.description')}
          </p>
          <p className="project-report-metadata">{t('projects.report.metadata')}</p>

          <aside className="project-report-note">
            {t('projects.report.publicNote')}
          </aside>

          <div className="project-report-actions">
            <a
              className="report-action report-action-primary"
              href={reportUrl}
              target="_blank"
              rel="noreferrer"
            >
              {t('projects.report.openAction')}
              <ExternalArrow />
            </a>
            <a
              className="report-action report-action-secondary"
              href={reportUrl}
              download={erasmusMate.report.downloadName}
            >
              {t('projects.report.downloadAction')}
              <span aria-hidden="true">↓</span>
            </a>
          </div>

          <p className="project-report-caption">{t('projects.report.auxiliary')}</p>
        </div>

        <div className="project-report-visual" aria-hidden="true">
          <div className="report-document">
            <div className="report-document-header">
              <svg viewBox="0 0 24 24" focusable="false">
                <path d="M7 2.75h7l4 4V21.25H7z" />
                <path d="M14 2.75v4h4M10 12h5M10 15.5h5" />
              </svg>
              <span>{t('projects.report.visual.publicVersion')}</span>
            </div>
            <p className="report-document-type">{t('projects.report.kicker')}</p>
            <h4>{t('projects.report.visual.shortTitle')}</h4>
            <p>{t('projects.report.visual.university')}</p>
            <p>{t('projects.report.visual.degree')}</p>
            <p>{t('projects.report.visual.session')}</p>
            <div className="report-document-stats">
              <div>
                <strong>{t('about.tfg.grade')}/10</strong>
                <span>{t('projects.report.visual.gradeLabel')}</span>
              </div>
              <div>
                <strong>{erasmusMate.report.pages}</strong>
                <span>{t('projects.report.visual.pagesLabel')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <aside className="orchestrator-card" aria-labelledby="orchestrator-title">
        <div>
          <p className="projects-kicker">{t('projects.orchestrator.kicker')}</p>
          <h3 id="orchestrator-title">orchestrator-b</h3>
        </div>
        <div className="orchestrator-copy">
          <p>{t('projects.orchestrator.description')}</p>
          <p>{t('projects.orchestrator.comparison')}</p>
          <ul>
            {(['models', 'contracts', 'quality', 'evidence'] as const).map(
              (item) => (
                <li key={item}>{t(`projects.orchestrator.points.${item}`)}</li>
              ),
            )}
          </ul>
          <a
            className="project-link"
            href={orchestratorB.repositoryUrl}
            target="_blank"
            rel="noreferrer"
          >
            {t('projects.orchestrator.repositoryAction')}
            <ExternalArrow />
          </a>
        </div>
      </aside>
    </section>
  )
}

export default ProjectsSection
