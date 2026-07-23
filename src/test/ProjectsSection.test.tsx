import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import ProjectsSection from '../sections/ProjectsSection'

describe('ProjectsSection links', () => {
  it('exposes repositories and the public report actions', () => {
    render(<ProjectsSection />)
    const links = screen.getAllByRole('link')
    const hrefs = links.map((link) => link.getAttribute('href'))

    expect(hrefs).toContain('https://github.com/SamuCoco04/test-ErasmusMate-03')
    for (const iteration of ['01', '02', '03']) {
      expect(hrefs).toContain(`https://github.com/SamuCoco04/test-ErasmusMate-${iteration}`)
    }
    expect(hrefs).toContain('https://github.com/SamuCoco04/orchestrator-b')
    expect(
      links.filter(
        (link) =>
          link.getAttribute('href') ===
          '/documents/TFG-Samuel-Coco-version-publica.pdf',
      ),
    ).toHaveLength(2)
    expect(
      links.find((link) => link.hasAttribute('download')),
    ).toHaveAttribute('download', 'TFG-Samuel-Coco-version-publica.pdf')
  })
})
