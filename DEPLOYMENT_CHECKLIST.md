# Pre-Deployment Checklist - Mebius Tech

Use this checklist before deploying to production.

---

## 📋 Pre-Deployment (Day of Deploy)

### Code Quality
- [ ] Run linter: `npm run lint` (no errors)
- [ ] Code review completed
- [ ] No console warnings/errors
- [ ] Environment variables configured

### Testing
- [ ] All tests pass: `npm test` (11/11 tests pass)
- [ ] Manual homepage test (dev mode)
- [ ] Manual contact form test
- [ ] Manual navigation test
- [ ] Mobile responsive check

### Build
- [ ] Production build succeeds: `npm run build` (no errors)
- [ ] Build size acceptable (< 500KB)
- [ ] No build warnings

### Manual Testing (Smoke)
```bash
npm run dev
```
Then test:
- [ ] Homepage loads quickly
- [ ] Terminal tabs switch properly
- [ ] Quick inquiry form submits
- [ ] Navigation to all pages works
- [ ] No 404 errors
- [ ] Images display correctly
- [ ] Text readable (no layout breaks)

### Mobile Testing
- [ ] iPhone/Safari - loads OK
- [ ] Android/Chrome - loads OK
- [ ] Touch interactions work
- [ ] Responsive design OK

### Performance
- [ ] Images optimized (.webp exists)
- [ ] No large bundle sizes
- [ ] Pages load < 3 seconds
- [ ] No network request failures

### Security
- [ ] No sensitive data in code
- [ ] Environment variables not committed
- [ ] .env files in .gitignore
- [ ] Links are proper URLs (no hardcoded IP)

### Content
- [ ] Typos checked
- [ ] All links work
- [ ] Contact email correct
- [ ] Social links (if any) correct
- [ ] Metadata/SEO tags present

---

## 🚀 Final Go/No-Go Decision

### GO Criteria (Must have all ✅)
- [ ] All automated tests pass
- [ ] No critical bugs found
- [ ] Build successful
- [ ] Mobile tested & works
- [ ] Performance acceptable

### NO-GO Criteria (Stop if any 🔴)
- [ ] Tests failing
- [ ] Build errors
- [ ] Critical bugs
- [ ] Major performance issues
- [ ] Security concerns

---

## 📦 Deployment Steps

### 1. Final Verification (5 min)
```bash
npm run lint    # ✅ No errors
npm run build   # ✅ Build succeeds
npm test        # ✅ All tests pass
```

### 2. Tag Release
```bash
git tag -a v1.0.0 -m "Production release"
git push origin v1.0.0
```

### 3. Deploy
- [ ] Deploy to production
- [ ] Verify deployment URL
- [ ] Smoke test live site
- [ ] Monitor for errors (first 1 hour)

### 4. Post-Deployment
- [ ] Verify all pages accessible
- [ ] Check analytics/monitoring
- [ ] Monitor error logs
- [ ] Test from different network

---

## 🔍 Post-Deployment (First 24 Hours)

### Monitoring
- [ ] No 500 errors in logs
- [ ] Normal page load times
- [ ] Contact forms being received
- [ ] No user complaints

### Verification
- [ ] All pages load
- [ ] Contact form works
- [ ] External links work
- [ ] Images display
- [ ] No broken navigation

### Rollback Plan (If needed)
```bash
git revert <commit>
git push origin main
# Redeploy previous version
```

---

## 📝 Sign-Off

- **Tested by**: _______________
- **Date**: _______________
- **Status**: ☐ APPROVED ☐ NEEDS FIXES

---

## 🆘 Common Issues & Fixes

### Issue: Build fails
```bash
# Clean and rebuild
rm -rf .next
npm run build
```

### Issue: Tests fail
```bash
# Run specific test in debug
npm run test:debug

# Check if dev server running on port 3000
lsof -ti:3000 | xargs kill -9
```

### Issue: Playwright not found
```bash
npm install
npx playwright install
```

### Issue: Large bundle size
```bash
# Analyze bundle
npm install -D webpack-bundle-analyzer
```

---

## ✅ Ready to Deploy?

If you checked all boxes and see green lights ✅, you're ready!

**Good luck! 🚀**
