import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'

import App from '../App'

describe('portfolio application', () => {
  it('renders every main section and the footer', () => {
    const { container } = render(<App />)

    for (const id of ['home', 'about', 'projects', 'education', 'contact']) {
      expect(container.querySelector(`#${id}`)).toBeInTheDocument()
    }
    expect(container.querySelector('footer')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Saltar al contenido' })).toHaveAttribute(
      'href',
      '#main-content',
    )
  })

  it('connects the primary navigation to the page sections', () => {
    render(<App />)

    const links = screen.getByRole('navigation', {
      name: 'Navegación principal',
    }).querySelectorAll('a')

    expect([...links].map((link) => link.getAttribute('href'))).toEqual([
      '#home',
      '#about',
      '#projects',
      '#education',
      '#contact',
    ])
  })

  it('switches both ways and updates language-sensitive metadata', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: 'Cambiar el idioma a inglés' }))
    await waitFor(() => {
      expect(document.documentElement).toHaveAttribute('lang', 'en')
      expect(document.title).toBe('Samuel Coco | Software Engineering, Data & AI')
    })
    expect(screen.getByRole('link', { name: 'Skip to content' })).toBeInTheDocument()
    expect(window.localStorage.getItem('portfolioLanguage')).toBe('en')

    await user.click(screen.getByRole('button', { name: 'Change language to Spanish' }))
    await waitFor(() => {
      expect(document.documentElement).toHaveAttribute('lang', 'es')
      expect(document.title).toBe('Samuel Coco | Ingeniería de Software, Datos e IA')
    })
  })
})
