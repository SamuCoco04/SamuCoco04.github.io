import { AxeBuilder } from '@axe-core/playwright'
import { expect, test, type Page } from '@playwright/test'

const seriousAxeViolations = async (page: Page) => {
  const { violations } = await new AxeBuilder({ page }).analyze()
  return violations.filter(({ impact }) => impact === 'serious' || impact === 'critical')
}

test('loads without browser errors or failed local resources', async ({ page }) => {
  const errors: string[] = []
  const failedRequests: string[] = []
  page.on('console', (message) => {
    if (message.type() === 'error') errors.push(message.text())
  })
  page.on('pageerror', (error) => errors.push(error.message))
  page.on('requestfailed', (request) => {
    if (request.url().startsWith('http://127.0.0.1:4173')) {
      failedRequests.push(request.url())
    }
  })

  await page.goto('/')
  await expect(page.locator('h1')).toHaveCount(1)
  await expect(page).toHaveTitle('Samuel Coco | Ingeniería de Software, Datos e IA')
  await expect(page.locator('html')).toHaveAttribute('lang', 'es')
  expect(errors).toEqual([])
  expect(failedRequests).toEqual([])
})

test('publishes complete SEO metadata and discovery resources', async ({ page, request }) => {
  const response = await page.goto('/')
  expect(response?.ok()).toBe(true)
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    'href',
    'https://samucoco04.github.io/',
  )
  await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
    'content',
    'https://samucoco04.github.io/og-image.png',
  )
  await expect(page.locator('script[type="application/ld+json"]')).toHaveCount(1)

  for (const asset of [
    '/robots.txt',
    '/sitemap.xml',
    '/favicon.svg',
    '/favicon-32x32.png',
    '/apple-touch-icon.png',
    '/site.webmanifest',
    '/og-image.png',
  ]) {
    expect((await request.get(asset)).ok()).toBe(true)
  }
})

test('navigation points to every portfolio section', async ({ page }) => {
  await page.goto('/')
  const destinations = ['home', 'about', 'projects', 'education', 'contact']

  for (const destination of destinations) {
    const link = page.locator(`nav[aria-label="Navegación principal"] a[href="#${destination}"]`)
    await expect(link).toBeVisible()
    await link.click()
    await expect(page).toHaveURL(new RegExp(`#${destination}$`))
    await expect(page.locator(`#${destination}`)).toBeVisible()
  }
})

test('language changes, persists and selects the matching primary resume', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('.cv-actions a').first()).toHaveAttribute(
    'href',
    '/documents/Samuel_Coco_CV_ES.pdf',
  )

  await page.getByRole('button', { name: 'Cambiar el idioma a inglés' }).click()
  await expect(page.locator('html')).toHaveAttribute('lang', 'en')
  await expect(page).toHaveTitle('Samuel Coco | Software Engineering, Data & AI')
  await expect(page.locator('.cv-actions a').first()).toHaveAttribute(
    'href',
    '/documents/Samuel_Coco_CV_EN.pdf',
  )
  await page.reload()
  await expect(page.locator('html')).toHaveAttribute('lang', 'en')

  await page.getByRole('button', { name: 'Change language to Spanish' }).click()
  await expect(page.locator('html')).toHaveAttribute('lang', 'es')
})

test('PDF actions and external links expose the expected contracts', async ({ page, request }) => {
  await page.goto('/')

  const cvLinks = page.locator('.cv-actions a[download]')
  await expect(cvLinks).toHaveCount(2)
  for (const path of [
    '/documents/Samuel_Coco_CV_ES.pdf',
    '/documents/Samuel_Coco_CV_EN.pdf',
    '/documents/TFG-Samuel-Coco-version-publica.pdf',
  ]) {
    expect((await request.get(path)).ok()).toBe(true)
  }
  const imageUrls = await page.locator('img').evaluateAll((images) =>
    images.map((image) => (image as HTMLImageElement).src),
  )
  for (const imageUrl of imageUrls) {
    expect((await request.get(imageUrl)).ok()).toBe(true)
  }

  const reportLinks = page.locator(
    'a[href="/documents/TFG-Samuel-Coco-version-publica.pdf"]',
  )
  await expect(reportLinks).toHaveCount(2)
  await expect(reportLinks.filter({ hasText: 'Leer en el navegador' })).toHaveAttribute(
    'target',
    '_blank',
  )
  await expect(reportLinks.filter({ hasText: 'Descargar PDF' })).toHaveAttribute(
    'download',
    'TFG-Samuel-Coco-version-publica.pdf',
  )

  for (const href of [
    'https://github.com/SamuCoco04',
    'https://www.linkedin.com/in/samuel-coco-delfa',
    'https://github.com/SamuCoco04/test-ErasmusMate-03',
    'https://github.com/SamuCoco04/orchestrator-b',
  ]) {
    await expect(page.locator(`a[href="${href}"]`).first()).toHaveAttribute('target', '_blank')
  }
})

test('keyboard navigation starts with the translated skip link', async ({ page }) => {
  await page.goto('/')
  await page.keyboard.press('Tab')
  const skipLink = page.getByRole('link', { name: 'Saltar al contenido' })
  await expect(skipLink).toBeFocused()
  await page.keyboard.press('Enter')
  await expect(page.locator('#main-content')).toBeFocused()
})

test('mobile layout has no horizontal page overflow or visible translation keys', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('/')
  const dimensions = await page.evaluate(() => ({
    viewport: document.documentElement.clientWidth,
    content: document.documentElement.scrollWidth,
  }))
  expect(dimensions.content).toBeLessThanOrEqual(dimensions.viewport)
  await expect(page.locator('body')).not.toContainText(/\b(?:about|projects|education|contact)\.[\w.]+\b/)
})

test('desktop, tablet and mobile remain overflow-free in light and dark themes', async ({ page }) => {
  const viewports = [
    { width: 1440, height: 900 },
    { width: 768, height: 1024 },
    { width: 390, height: 844 },
  ]
  const themeColors: string[] = []

  for (const colorScheme of ['light', 'dark'] as const) {
    await page.emulateMedia({ colorScheme })
    for (const viewport of viewports) {
      await page.setViewportSize(viewport)
      await page.goto('/')
      const layout = await page.evaluate(() => ({
        viewport: document.documentElement.clientWidth,
        content: document.documentElement.scrollWidth,
        background: getComputedStyle(document.body).backgroundColor,
      }))
      expect(layout.content).toBeLessThanOrEqual(layout.viewport)
      if (viewport.width === 1440) themeColors.push(layout.background)
    }
  }

  expect(new Set(themeColors).size).toBe(2)
})

test('has no serious or critical axe violations in Spanish', async ({ page }) => {
  await page.goto('/')
  expect(await seriousAxeViolations(page)).toEqual([])
})

test('has no serious or critical axe violations in English', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('button', { name: 'Cambiar el idioma a inglés' }).click()
  expect(await seriousAxeViolations(page)).toEqual([])
})

test('has no serious or critical axe violations on mobile', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('/')
  expect(await seriousAxeViolations(page)).toEqual([])
})
