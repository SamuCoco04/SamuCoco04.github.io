import { describe, expect, it } from 'vitest'

import { professionalProfile } from '../data/contact'
import { erasmusMate } from '../data/projects'

describe('portfolio data integrity', () => {
  it('keeps stable project identifiers, images and HTTPS repositories', () => {
    expect(erasmusMate.iterations.map(({ id }) => id)).toEqual(['01', '02', '03'])
    for (const iteration of erasmusMate.iterations) {
      expect(iteration.image.path).toMatch(/\.webp$/)
      expect(iteration.repositoryUrl).toMatch(/^https:\/\//)
    }
    expect(erasmusMate.finalRepositoryUrl).toMatch(/^https:\/\//)
  })

  it('registers all expected public PDFs', () => {
    expect(Object.values(professionalProfile.cvs).map(({ publicPath }) => publicPath)).toEqual(
      expect.arrayContaining([
        'documents/Samuel_Coco_CV_ES.pdf',
        'documents/Samuel_Coco_CV_EN.pdf',
      ]),
    )
    expect(erasmusMate.report.publicPath).toBe(
      'documents/TFG-Samuel-Coco-version-publica.pdf',
    )
  })
})
