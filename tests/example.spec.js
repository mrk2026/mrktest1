import { test, expect } from '@playwright/test';

test('Simple Example Page Test - Click Learn More', async ({ page }) => {
  await page.goto('https://example.com');

  // Check the first paragraph text
  const paragraph = page.locator('p').first();
  await expect(paragraph).toContainText('documentation examples');

  // Click the "More information..." link (example.com uses this text)
  const learnMoreLink = page.locator('a', { hasText: 'More information' });
  await learnMoreLink.click();

  // Wait for navigation
  await page.waitForLoadState('networkidle');

  // Verify we are on the new page
  await expect(page).toHaveURL(/iana\.org/); // example.com link goes to iana.org

  // Optionally, check some content on the new page
  const heading = page.locator('h1');
  await expect(heading).toContainText('IANA');
});
