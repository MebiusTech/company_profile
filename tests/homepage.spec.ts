import { test, expect } from '@playwright/test';

test.describe('Homepage - Smoke Tests', () => {
  
  test('Homepage loads successfully', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('h1')).toContainText('WE BUILD CREATIVE AND FUNCTIONAL');
    await expect(page.locator('text=Initailize project with us now')).toBeVisible();
  });

  test('CTA buttons are visible and clickable', async ({ page }) => {
    await page.goto('/');
    
    const projectBtn = page.locator('a:has-text("Initailize project with us now")');
    const readBtn = page.locator('a:has-text("Read our successful project")');
    
    await expect(projectBtn).toBeVisible();
    await expect(readBtn).toBeVisible();
    
    await expect(projectBtn).toHaveAttribute('href', '/contact');
    await expect(readBtn).toHaveAttribute('href', '/projects');
  });

  test('Terminal tabs are interactive', async ({ page }) => {
    await page.goto('/');
    
    // Check all tabs exist
    const wasmTab = page.locator('button:has-text("wasm_compile.go")');
    const seoTab = page.locator('button:has-text("seo_audit.json")');
    const brutalTab = page.locator('button:has-text("visual_spec.css")');
    
    await expect(wasmTab).toBeVisible();
    await expect(seoTab).toBeVisible();
    await expect(brutalTab).toBeVisible();
    
    // Test tab switching
    await seoTab.click();
    await expect(page.locator('text=SEO & Semantic Integrity Audit')).toBeVisible();
    
    await brutalTab.click();
    await expect(page.locator('text=Neo-Brutalist Visual Config')).toBeVisible();
  });

  test('Capabilities section displays 3 cards', async ({ page }) => {
    await page.goto('/');
    
    const cards = page.locator('.neo-card-interactive');
    await expect(cards).toHaveCount(3);
    
    // Check card titles
    await expect(page.locator('text=NEO-BRUTALIST GRAPHICS')).toBeVisible();
    await expect(page.locator('text=SPEED WEB ENGINE')).toBeVisible();
    await expect(page.locator('text=LOCAL COORDINATION')).toBeVisible();
  });

  test('Quick inquiry form works', async ({ page }) => {
    await page.goto('/');
    
    const nameInput = page.locator('input[placeholder="Type name here (e.g. Satoshi)"]');
    await expect(nameInput).toBeVisible();
    
    // Fill form
    await nameInput.fill('Test User');
    
    // Submit
    await page.click('button:has-text("submit_signature.sh")');
    
    // Check success message
    await expect(page.locator('text=PACKET SUCCESSFULLY BROADCASTED')).toBeVisible({ timeout: 5000 });
  });

  test('Page is responsive on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('text=Initailize project with us now')).toBeVisible();
  });

  test('No console errors on load', async ({ page }) => {
    const errors: string[] = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });
    
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    expect(errors).toHaveLength(0);
  });
});
