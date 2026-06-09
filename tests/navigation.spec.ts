import { test, expect } from '@playwright/test';

test.describe('Navigation - Full Site Testing', () => {
  
  test('All page links work correctly', async ({ page }) => {
    await page.goto('/');
    
    // Navigate to Projects
    await page.click('a[href="/projects"]');
    await expect(page).toHaveURL('/projects');
    await expect(page.locator('heading')).toBeTruthy();
    
    // Navigate to Contact
    await page.click('a[href="/contact"]');
    await expect(page).toHaveURL('/contact');
    await expect(page.locator('text=ESTABLISH_LINK')).toBeVisible();
    
    // Navigate to About
    await page.click('a[href="/about"]');
    await expect(page).toHaveURL('/about');
    
    // Navigate back to Home
    await page.click('a[href="/"]');
    await expect(page).toHaveURL('/');
  });

  test('Contact page form has all required fields', async ({ page }) => {
    await page.goto('/contact');
    
    // Check form fields
    await expect(page.locator('input[placeholder="John Doe"]')).toBeVisible();
    await expect(page.locator('input[placeholder="john@company.com"]')).toBeVisible();
    await expect(page.locator('select')).toBeVisible();
    await expect(page.locator('textarea')).toBeVisible();
    await expect(page.locator('button:has-text("transmit_inquiry.sh")')).toBeVisible();
  });

  test('Contact page displays info sidebar', async ({ page }) => {
    await page.goto('/contact');
    
    // Check contact info
    await expect(page.locator('text=DIRECT_CHANNELS')).toBeVisible();
    await expect(page.locator('text=hello@mebius.tech')).toBeVisible();
    await expect(page.locator('text=ops@mebius.tech')).toBeVisible();
    
    // Check system metrics
    await expect(page.locator('text=SYSTEM_METRICS')).toBeVisible();
    await expect(page.locator('text=< 12 Hours')).toBeVisible();
  });

  test('All pages load without errors', async ({ page }) => {
    const pages = ['/', '/about', '/contact', '/projects', '/blog'];
    const errors: string[] = [];
    
    page.on('console', msg => {
      if (msg.type() === 'error') errors.push(msg.text());
    });
    
    for (const route of pages) {
      await page.goto(route);
      await page.waitForLoadState('networkidle');
    }
    
    expect(errors).toHaveLength(0);
  });
});
