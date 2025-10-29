import { test, expect } from '@playwright/test';

test('Simple Example Page Test - Click Learn More', async ({ page }) => {
  test.setTimeout(60000); // 60 seconds

  await page.goto('https://example.com');

  const paragraph = page.locator('p').first();
  await expect(paragraph).toContainText('documentation examples');

  const learnMoreLink = page.locator('a', { hasText: 'More information...' });
  await learnMoreLink.waitFor({ state: 'visible', timeout: 5000 });
  await learnMoreLink.click();

  await page.waitForLoadState('networkidle');
  await expect(page).toHaveURL(/iana\.org/);
});
