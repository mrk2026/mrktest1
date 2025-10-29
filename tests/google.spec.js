import { test, expect } from '@playwright/test';

test('Simple Example Page Test', async ({ page }) => {
  // Navigate to example.com
  await page.goto('https://example.com');

  // Target the first paragraph only
  const paragraph = page.locator('p').first();

  // Check that the paragraph contains the word "illustrative"
  await expect(paragraph).toContainText('illustrative');
});
