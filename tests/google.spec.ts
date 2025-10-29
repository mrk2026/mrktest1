import { test, expect } from '@playwright/test';

test('Simple Example Page Test', async ({ page }) => {
  // Navigate to a test page
  await page.goto('https://example.com');

  // Wait for the heading to be visible
  const heading = page.locator('h1');
  await expect(heading).toHaveText('Example Domain');

  // Check that the paragraph contains the word "illustrative"
  const paragraph = page.locator('p');
  await expect(paragraph).toContainText('illustrative');
});
