import { useTranslation } from 'react-i18next'

import AboutSection from './sections/AboutSection'
import ProjectsSection from './sections/ProjectsSection'
import LanguageSwitcher from './components/LanguageSwitcher'
import './App.css'

function App() {
  const { t } = useTranslation()

  return (
    <div className="app">
      <header className="header">
        <a className="logo" href="#home" aria-label="Samuel Coco">
          Samuel Coco
        </a>

        <nav className="navigation" aria-label="Navegación principal">
          <a href="#home">{t('navigation.home')}</a>
          <a href="#about">{t('navigation.about')}</a>
          <a href="#projects">{t('navigation.projects')}</a>
          <a href="#education">{t('navigation.education')}</a>
          <a href="#contact">{t('navigation.contact')}</a>
        </nav>

        <LanguageSwitcher />
      </header>

      <main>
        <section id="home" className="hero">
          <div className="availability-status">
            <span className="status-dot" aria-hidden="true" />
            {t('hero.status')}
          </div>

          <p className="eyebrow">{t('hero.greeting')}</p>

          <h1>{t('hero.name')}</h1>

          <h2>{t('hero.role')}</h2>

          <p className="hero-description">{t('hero.description')}</p>

          <p className="availability">{t('hero.availability')}</p>

          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              {t('hero.viewProjects')}
            </a>

            <a
              className="button button-secondary"
              href="mailto:samuel.coco.dev@gmail.com"
            >
              {t('hero.contact')}
            </a>
          </div>

          <div className="professional-links">
            <a
              href="https://github.com/SamuCoco04"
              target="_blank"
              rel="noreferrer"
            >
              {t('hero.github')}
            </a>

            <span aria-hidden="true">·</span>

            <a
              href="https://www.linkedin.com/in/samuel-coco-delfa"
              target="_blank"
              rel="noreferrer"
            >
              {t('hero.linkedin')}
            </a>

            <span aria-hidden="true">·</span>

            <a href="mailto:samuel.coco.dev@gmail.com">
              samuel.coco.dev@gmail.com
            </a>
          </div>
        </section>
        <AboutSection />
        <ProjectsSection />
      </main>
    </div>
  )
}

export default App
