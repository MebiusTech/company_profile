# Testing Guide - Mebius Tech Company Profile

## 🔍 Project Analysis

**Type**: Static Next.js Company Profile / Landing Page  
**Features**: 
- Multi-page (home, about, projects, services, contact)
- Form submissions (contact form with local state)
- No API routes detected
- Neo-Brutalism design
- Client-side rendered components

---

## ✅ Testing Strategy Recommendation

### **For This Project: NOT Postman**

**Why NOT Postman?**
- ❌ Project tidak memiliki API endpoints yang perlu ditest
- ❌ Semua form handling client-side (state management lokal)
- ❌ Tidak ada backend database/server
- ❌ Postman fokus untuk REST API testing

---

## 🎯 Recommended Testing Tools Stack

### **1. Playwright (E2E Testing) - PRIMARY**
**Best untuk**: Full user flow testing

```bash
npm install -D @playwright/test
npx playwright install
```

**Test Examples:**
```typescript
// tests/contact-flow.spec.ts
import { test, expect } from '@playwright/test';

test('Contact form submission flow', async ({ page }) => {
  await page.goto('http://localhost:3000/contact');
  
  // Test form filling
  await page.fill('input[placeholder="John Doe"]', 'Test User');
  await page.fill('input[placeholder="john@company.com"]', 'test@test.com');
  await page.selectOption('select', 'md');
  await page.fill('textarea', 'Test project requirements');
  
  // Test submission
  await page.click('button[type="submit"]');
  await expect(page.locator('text=successfully')).toBeVisible();
});

test('Navigation between pages', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await page.click('a:has-text("Projects")');
  await expect(page).toHaveURL(/\/projects/);
});
```

**Keuntungan:**
✅ Test real user interactions  
✅ Visual regression testing  
✅ Multi-browser testing  
✅ Screenshot comparisons  

---

### **2. Jest (Unit Testing) - SECONDARY**
**Best untuk**: Component logic testing

```bash
npm install -D jest @testing-library/react @testing-library/jest-dom
```

**Test Examples:**
```typescript
// __tests__/components/Navbar.test.tsx
import { render, screen } from '@testing-library/react';
import Navbar from '@/components/Navbar';

test('Navbar renders navigation links', () => {
  render(<Navbar />);
  expect(screen.getByText('Projects')).toBeInTheDocument();
  expect(screen.getByText('Contact')).toBeInTheDocument();
});
```

---

### **3. Lighthouse CI (Performance Testing) - RECOMMENDED**
**Best untuk**: Performance & SEO checks

```bash
npm install -D @lhci/cli@0.8.x @lhci/server@0.8.x
npx lhci autorun
```

**Metrics yang ditest:**
✅ Performance score  
✅ SEO compliance  
✅ Accessibility score  
✅ Best practices  

---

### **4. axe DevTools (Accessibility) - OPTIONAL**
**Best untuk**: A11y compliance

```bash
npm install -D axe-playwright
```

---

## 📋 Pre-Deployment Checklist

### **Manual Testing (Essential)**
- [ ] Homepage loads correctly
- [ ] Navigation works (home → projects → contact → about)
- [ ] Contact form submission (check console for state)
- [ ] Terminal tabs switching on homepage
- [ ] Responsive design (mobile, tablet, desktop)
- [ ] Images load properly
- [ ] No console errors

### **Automated Testing (Recommended)**
- [ ] E2E tests with Playwright
- [ ] Unit tests for components
- [ ] Lighthouse performance score > 80
- [ ] Accessibility audit pass

### **Browser Testing**
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

### **Performance**
- [ ] Build size check: `npm run build`
- [ ] Images optimized (.webp format exists)
- [ ] No console warnings
- [ ] Fonts loading properly

---

## 🚀 Quick Start - Testing

### **1. Manual Testing (Fastest - Do This First)**
```bash
npm run dev
# Open http://localhost:3000
# Test all pages, forms, interactions
```

### **2. E2E Testing Setup**
```bash
npm install -D @playwright/test
npx playwright install
npx playwright test
```

### **3. Lighthouse Testing**
```bash
npm install -D @lhci/cli
npx lhci autorun
```

---

## ⚡ Recommended Testing Order Before Deploy

1. **Manual Smoke Test** (5-10 min)
   - Test all pages load
   - Try contact form
   - Check responsive

2. **Lighthouse Audit** (5 min)
   - Run performance check
   - Fix critical issues

3. **E2E Tests** (10 min)
   - Setup Playwright
   - Test main user flows

4. **Browser Testing** (5 min)
   - Check Chrome, Firefox, Safari
   - Test on mobile devices

---

## 🎯 Testing Priority for This Project

### **MUST TEST:**
1. ✅ All page navigation works
2. ✅ Contact form submission (state management)
3. ✅ Responsive design (mobile/tablet/desktop)
4. ✅ Terminal component tab switching
5. ✅ Performance score > 80

### **SHOULD TEST:**
6. ⚠️  Image optimization
7. ⚠️  Link validation (internal & external)
8. ⚠️  Lighthouse accessibility

### **NICE TO TEST:**
9. 💡 Multi-browser compatibility
10. 💡 Animations/transitions smoothness

---

## 📦 Deployment Checklist

Before pushing to production:

```bash
# 1. Build check
npm run build

# 2. Lint check
npm run lint

# 3. Manual test
npm run dev

# 4. Production build test
npm run start

# 5. Final checks
- [ ] All pages accessible
- [ ] No 404 errors
- [ ] Contact form works
- [ ] Images load fast
- [ ] Mobile responsive
- [ ] SEO meta tags present
```

---

## 💡 Final Recommendation

**DO NOT use Postman** for this project. Instead:

1. **Start with Manual Testing** (fastest validation)
2. **Add Playwright E2E Tests** (catches user flow issues)
3. **Add Lighthouse CI** (performance validation)
4. **Deploy with confidence**

This is a **static company profile**, not an API-driven app, so focus on UX flows and performance rather than API testing.
