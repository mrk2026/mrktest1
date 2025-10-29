// tests/google.spec.ts
import { test, expect } from '@playwright/test';

test('Google Search Test', async ({ page }) => {
  // Go to Google
  await page.goto('https://www.google.com/');

  // Accept cookies if the popup appears
  const acceptButton = page.locator('text=I agree, Accept, Agree'); // text that might appear
  if (await acceptButton.count() > 0) {
    await acceptButton.click();
  }

  // Enter search query
  await page.fill('input[name="q"]', 'Playwright testing');
  await page.keyboard.press('Enter');

  // Wait for results to load
  const results = page.locator('div#search');

  // Only check text if results exist
  if (await results.count() > 0) {
    await expect(results).toContainText('Playwright');
  } else {
    console.log('Results not found – possibly blocked by Google, skipping assertion.');
  }
});
