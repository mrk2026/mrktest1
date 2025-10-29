import { test, expect } from '@playwright/test';

test('Google Search Test', async ({ page }) => {
  // Go to Google
  await page.goto('https://www.google.com');

  // Accept cookies if prompted (Google often shows this popup)
  const agreeBtn = page.getByRole('button', { name: /accept/i });
  if (await agreeBtn.isVisible()) {
    await agreeBtn.click();
  }

  // Type search text into search input
  await page.getByRole('combobox', { name: /search/i }).fill('Playwright testing');

  // Press Enter to search
  await page.keyboard.press('Enter');

  // Wait for results to load and check "Playwright" exists in results
  await expect(page.locator('#search')).toContainText('Playwright');
});
