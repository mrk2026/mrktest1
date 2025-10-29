import { test, expect } from '@playwright/test';

test('Simple Example Page Test', async ({ page }) => {
  test.setTimeout(60000); // 60 seconds

  // Go to example.com
  await page.goto('https://example.com');

  // Verify the first paragraph
  const paragraph = page.locator('p').first();
  await expect(paragraph).toContainText('documentation examples');

  // Optionally, check the page title
  await expect(page).toHaveTitle(/Example Domain/);
});
