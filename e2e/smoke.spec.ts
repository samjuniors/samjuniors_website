import { test, expect } from '@playwright/test';

test.describe('SamJuniors Application Smoke Tests', () => {
  test('homepage loads and displays parent company identity', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/SamJuniors/i);
    const heading = page.locator('h1');
    await expect(heading).toBeVisible();
  });

  test('direct navigation to products index and lumora detail page', async ({ page }) => {
    await page.goto('/products');
    await expect(page.locator('h1')).toContainText('Products');

    await page.goto('/products/lumora');
    await expect(page.locator('h1')).toContainText('Lumora');
  });

  test('mobile viewport renders without horizontal overflow', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/');

    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
    expect(scrollWidth).toBeLessThanOrEqual(clientWidth);
  });
});
