import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import i18n from '../i18n'
import ContactSection from '../sections/ContactSection'

const cvLinks = () => screen.getAllByRole('link').filter((link) => link.hasAttribute('download'))

describe('ContactSection resumes', () => {
  it('uses Spanish as primary while keeping both downloads available', () => {
    render(<ContactSection />)
    const links = cvLinks()

    expect(links[0]).toHaveAttribute('href', '/documents/Samuel_Coco_CV_ES.pdf')
    expect(links[1]).toHaveAttribute('href', '/documents/Samuel_Coco_CV_EN.pdf')
    expect(links.every((link) => link.hasAttribute('download'))).toBe(true)
  })

  it('uses English as primary when the interface is English', async () => {
    await i18n.changeLanguage('en')
    render(<ContactSection />)
    const links = cvLinks()

    expect(links[0]).toHaveAttribute('href', '/documents/Samuel_Coco_CV_EN.pdf')
    expect(links[1]).toHaveAttribute('href', '/documents/Samuel_Coco_CV_ES.pdf')
  })
})
