import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  reporter: [
    ['list'], // terminal output
    ['html', { outputFolder: 'playwright-report', open: 'always' }] // HTML report
  ],
  use: {
    headless: false,           // ⚡ Run tests with browser visible
    viewport: { width: 1280, height: 720 },
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  }
});