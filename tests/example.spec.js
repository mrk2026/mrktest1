import { test, expect } from '@playwright/test';

test('Simple Example Page Test', async ({ page }) => {
  await page.goto('https://example.com');

  const paragraph = page.locator('p').first();

  // Updated text to match current example.com
  await expect(paragraph).toContainText('documentation examples');
});