import { test, expect } from '@playwright/test';

test('Facebook login page loads', async ({ page }) => {
  await page.goto('https://www.facebook.com');
  await expect(page.locator('input[name="email"]')).toBeVisible();
  await expect(page.locator('input[name="pass"]')).toBeVisible();
});

