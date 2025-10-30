import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.cnbc.com/');
  await page.locator('[data-test="GlobalNavigation"]').getByRole('link', { name: 'CNBC' }).click();
});