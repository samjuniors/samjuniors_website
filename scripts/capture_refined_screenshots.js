const { chromium } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

async function capture() {
  const projectScreenshotsDir = path.join(process.cwd(), 'Screenshots');
  const artifactDir = path.join('C:', 'Users', 'STUDIO-1', '.gemini', 'antigravity-ide', 'brain', 'a2b1a0ad-e5e8-4a29-b600-2ee24058a2dc');

  [projectScreenshotsDir, artifactDir].forEach(dir => {
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  });

  const browser = await chromium.launch({ headless: true });

  // 1. DESKTOP 1440px
  console.log('Capturing Desktop 1440px...');
  const desktop = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2,
  });
  const page = await desktop.newPage();
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(800);

  // 1440 × 900 First Viewport
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(300);
  const heroPath = path.join(projectScreenshotsDir, 'desktop_01_hero.png');
  await page.screenshot({ path: heroPath });
  fs.copyFileSync(heroPath, path.join(artifactDir, 'desktop_01_hero.png'));

  // 1440 Full-Page
  const fullPath = path.join(projectScreenshotsDir, 'desktop_full_journey.png');
  await page.screenshot({ path: fullPath, fullPage: true });
  fs.copyFileSync(fullPath, path.join(artifactDir, 'desktop_full_journey.png'));

  // Close screenshot of Lumora interaction
  const lumoraElem = await page.$('#lumora');
  if (lumoraElem) {
    await lumoraElem.scrollIntoViewIfNeeded();
    await page.waitForTimeout(300);
    // Click Context Engine tab to showcase live interaction
    const contextTab = await page.$('button[role="tab"]:has-text("Context Engine")');
    if (contextTab) {
      await contextTab.click();
      await page.waitForTimeout(300);
    }
    const lumoraClosePath = path.join(projectScreenshotsDir, 'lumora_interaction_close.png');
    // Take bounding box element screenshot of the workbench
    const workbenchElem = await page.$('div[role="region"][aria-label="Lumora Platform Workbench"]');
    if (workbenchElem) {
      await workbenchElem.screenshot({ path: lumoraClosePath });
    } else {
      await page.screenshot({ path: lumoraClosePath });
    }
    fs.copyFileSync(lumoraClosePath, path.join(artifactDir, 'lumora_interaction_close.png'));
  }

  await desktop.close();

  // 2. MOBILE 390px
  console.log('Capturing Mobile 390px...');
  const mobile = await browser.newContext({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
  });
  const mPage = await mobile.newPage();
  await mPage.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await mPage.evaluate(() => document.fonts.ready);
  await mPage.waitForTimeout(800);

  // 390 Mobile First Viewport
  await mPage.evaluate(() => window.scrollTo(0, 0));
  await mPage.waitForTimeout(300);
  const mHeroPath = path.join(projectScreenshotsDir, 'mobile_01_hero.png');
  await mPage.screenshot({ path: mHeroPath });
  fs.copyFileSync(mHeroPath, path.join(artifactDir, 'mobile_01_hero.png'));

  // 390 Mobile Full-Page
  const mFullPath = path.join(projectScreenshotsDir, 'mobile_full_journey.png');
  await mPage.screenshot({ path: mFullPath, fullPage: true });
  fs.copyFileSync(mFullPath, path.join(artifactDir, 'mobile_full_journey.png'));

  await mobile.close();
  await browser.close();
  console.log('All refined screenshots captured and synchronized successfully.');
}

capture().catch(err => {
  console.error('Error during capture:', err);
  process.exit(1);
});
