module.exports = {
  ci: {
    collect: {
      startServerCommand: 'node scripts/preview-server.mjs',
      startServerReadyPattern: 'Local',
      url: ['http://127.0.0.1:4173/'],
      numberOfRuns: 1,
      settings: {
        chromeFlags: '--headless --no-sandbox',
      },
    },
    assert: {
      assertions: {
        'categories:performance': ['warn', { minScore: 0.85 }],
        'categories:accessibility': ['error', { minScore: 0.9 }],
        'categories:best-practices': ['warn', { minScore: 0.9 }],
        'categories:seo': ['error', { minScore: 0.9 }],
        'errors-in-console': 'error',
        'http-status-code': 'error',
      },
    },
    upload: {
      target: 'filesystem',
      outputDir: '.lighthouseci',
    },
  },
}
