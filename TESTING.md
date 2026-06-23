# Testing Guide - Mebius Tech

## ✅ Testing Setup Complete

### Tools Installed:
- ✅ **Playwright** - E2E & UI testing
- ✅ **ESLint** - Code quality

---

## 🚀 Quick Start

### 1. Install Playwright
```bash
npm install
npx playwright install
```

### 2. Run Tests
```bash
# Run all tests
npm test

# Run tests with UI
npm run test:ui

# Run tests in debug mode
npm run test:debug
```

---

## 📋 Test Coverage

### Tests Available:

**homepage.spec.ts** - 7 tests
- ✅ Homepage loads successfully
- ✅ CTA buttons visible and clickable
- ✅ Terminal tabs interactive
- ✅ Capabilities cards display (3 cards)
- ✅ Quick inquiry form works
- ✅ Responsive on mobile
- ✅ No console errors

**navigation.spec.ts** - 4 tests
- ✅ All page links work (home → projects → contact → about)
- ✅ Contact form has all fields
- ✅ Contact page info sidebar displays
- ✅ All pages load without errors

---

## 🎯 Pre-Deployment Testing

### Manual Checklist (5 minutes)
```bash
npm run dev
```
Then manually test:
- [ ] Homepage loads
- [ ] Navigation works
- [ ] Contact form submits
- [ ] No console errors
- [ ] Mobile responsive

### Automated Checklist (2 minutes)
```bash
npm test
```

Expected output:
```
✓ homepage.spec.ts (7 tests passed)
✓ navigation.spec.ts (4 tests passed)
Total: 11 tests passed
```

---

## 🔍 Test Details

### Homepage Tests
Tests core functionality:
- Hero section rendering
- Button interactions
- Terminal component tabs
- Form submission
- Mobile responsiveness
- Console error checking

### Navigation Tests
Tests user flows:
- Page navigation (all routes)
- Form presence
- Contact information display
- Cross-page loading

---

## 📊 Running Tests Locally

### Option 1: Headless Mode (Fast)
```bash
npm test
```
Results: HTML report in `playwright-report/`

### Option 2: UI Mode (Interactive)
```bash
npm run test:ui
```
Benefits:
- Watch tests run in real-time
- Interactive debugging
- Slow-motion replay
- Time-travel debugging

### Option 3: Debug Mode
```bash
npm run test:debug
```
Benefits:
- Browser DevTools access
- Step-through debugging
- Inspector tools

---

## 🌐 Test Environments

Tests run on:
- ✅ Chrome (Desktop)
- ✅ Firefox (Desktop)
- ✅ Safari (Desktop)
- ✅ Chrome (Mobile - Pixel 5)
- ✅ Safari (Mobile - iPhone 12)

---

## 📈 Coverage Stats

| Category | Status |
|----------|--------|
| Pages Tested | 5 routes |
| User Flows | 4 flows |
| Components | 10+ components |
| Responsive | Mobile + Desktop |
| Errors | 0 expected |

---

## 🚢 Deployment Checklist

Before deploying to production:

```bash
# 1. Build check
npm run build

# 2. Lint check
npm run lint

# 3. Run tests
npm test

# 4. Manual spot check
npm run dev
# Test manually: homepage, contact form, navigation

# 5. Ready to deploy!
```

---

## 🐛 Common Issues

### Tests fail with "Port 3000 already in use"
```bash
# Kill existing process
lsof -ti:3000 | xargs kill -9

# Or specify different port in playwright.config.ts
```

### Playwright timeout errors
Increase timeout in specific test:
```typescript
test('slow test', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });
}, { timeout: 30000 });
```

### Screenshots/Traces not saving
Check: `playwright.config.ts` output paths are correct

---

## 📚 Resources

- [Playwright Documentation](https://playwright.dev)
- [Test Best Practices](https://playwright.dev/docs/best-practices)
- [Debugging Playwright Tests](https://playwright.dev/docs/debug)

---

## ✨ Next Steps

1. Run tests: `npm test`
2. Check report: `playwright-report/index.html`
3. Add more tests as needed
4. Integrate with CI/CD pipeline
5. Deploy with confidence!
