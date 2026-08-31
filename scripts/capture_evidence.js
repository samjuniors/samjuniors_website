const { chromium } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

async function captureEvidence() {
  const projectScreenshotsDir = path.join(process.cwd(), 'Screenshots');
  const artifactDir = path.join('C:', 'Users', 'STUDIO-1', '.gemini', 'antigravity-ide', 'brain', 'a2b1a0ad-e5e8-4a29-b600-2ee24058a2dc', 'visual_review');

  [projectScreenshotsDir, artifactDir].forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  });

  const browser = await chromium.launch({ headless: true });

  // 1. DESKTOP CAPTURE (1440x900)
  console.log('Capturing Desktop 1440px screenshots...');
  const desktopContext = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2,
  });
  const desktopPage = await desktopContext.newPage();
  await desktopPage.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await desktopPage.waitForTimeout(1000);

  // Desktop Full Journey
  const desktopFull = path.join(projectScreenshotsDir, 'desktop_full_journey.png');
  await desktopPage.screenshot({ path: desktopFull, fullPage: true });
  fs.copyFileSync(desktopFull, path.join(artifactDir, 'desktop_full_journey.png'));

  // 1440px Desktop Hero
  await desktopPage.evaluate(() => window.scrollTo(0, 0));
  await desktopPage.waitForTimeout(400);
  const desktopHero = path.join(projectScreenshotsDir, 'desktop_01_hero.png');
  await desktopPage.screenshot({ path: desktopHero });
  fs.copyFileSync(desktopHero, path.join(artifactDir, 'desktop_01_hero.png'));

  // Desktop Thesis Section
  const thesisElem = await desktopPage.$('#thesis');
  if (thesisElem) {
    await thesisElem.scrollIntoViewIfNeeded();
    await desktopPage.waitForTimeout(400);
    const desktopThesis = path.join(projectScreenshotsDir, 'desktop_02_thesis.png');
    await desktopPage.screenshot({ path: desktopThesis });
    fs.copyFileSync(desktopThesis, path.join(artifactDir, 'desktop_02_thesis.png'));
  }

  // Desktop Lumora Section
  const lumoraElem = await desktopPage.$('#lumora');
  if (lumoraElem) {
    await lumoraElem.scrollIntoViewIfNeeded();
    await desktopPage.waitForTimeout(400);
    const desktopLumora = path.join(projectScreenshotsDir, 'desktop_03_lumora.png');
    await desktopPage.screenshot({ path: desktopLumora });
    fs.copyFileSync(desktopLumora, path.join(artifactDir, 'desktop_03_lumora.png'));

    // Interactive Tab Switch (Context Engine)
    const contextTab = await desktopPage.$('button[role="tab"]:has-text("Context Engine")');
    if (contextTab) {
      await contextTab.click();
      await desktopPage.waitForTimeout(400);
      const desktopLumoraContext = path.join(projectScreenshotsDir, 'desktop_03b_lumora_context_engine.png');
      await desktopPage.screenshot({ path: desktopLumoraContext });
      fs.copyFileSync(desktopLumoraContext, path.join(artifactDir, 'desktop_03b_lumora_context_engine.png'));
    }
  }

  // Desktop Founder / Ending
  const footerElem = await desktopPage.$('footer');
  if (footerElem) {
    await footerElem.scrollIntoViewIfNeeded();
    await desktopPage.waitForTimeout(400);
    const desktopEnding = path.join(projectScreenshotsDir, 'desktop_04_founder_ending.png');
    await desktopPage.screenshot({ path: desktopEnding });
    fs.copyFileSync(desktopEnding, path.join(artifactDir, 'desktop_04_founder_ending.png'));
  }

  await desktopContext.close();

  // 2. MOBILE CAPTURE (390x844 - iPhone 14 standard)
  console.log('Capturing Mobile 390px screenshots...');
  const mobileContext = await browser.newContext({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
  });
  const mobilePage = await mobileContext.newPage();
  await mobilePage.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await mobilePage.waitForTimeout(1000);

  // Mobile Full Journey
  const mobileFull = path.join(projectScreenshotsDir, 'mobile_full_journey.png');
  await mobilePage.screenshot({ path: mobileFull, fullPage: true });
  fs.copyFileSync(mobileFull, path.join(artifactDir, 'mobile_full_journey.png'));

  // 390px Mobile Hero
  await mobilePage.evaluate(() => window.scrollTo(0, 0));
  await mobilePage.waitForTimeout(400);
  const mobileHero = path.join(projectScreenshotsDir, 'mobile_01_hero.png');
  await mobilePage.screenshot({ path: mobileHero });
  fs.copyFileSync(mobileHero, path.join(artifactDir, 'mobile_01_hero.png'));

  // Mobile Thesis
  const mThesisElem = await mobilePage.$('#thesis');
  if (mThesisElem) {
    await mThesisElem.scrollIntoViewIfNeeded();
    await mobilePage.waitForTimeout(400);
    const mobileThesis = path.join(projectScreenshotsDir, 'mobile_02_thesis.png');
    await mobilePage.screenshot({ path: mobileThesis });
    fs.copyFileSync(mobileThesis, path.join(artifactDir, 'mobile_02_thesis.png'));
  }

  // Mobile Lumora
  const mLumoraElem = await mobilePage.$('#lumora');
  if (mLumoraElem) {
    await mLumoraElem.scrollIntoViewIfNeeded();
    await mobilePage.waitForTimeout(400);
    const mobileLumora = path.join(projectScreenshotsDir, 'mobile_03_lumora.png');
    await mobilePage.screenshot({ path: mobileLumora });
    fs.copyFileSync(mobileLumora, path.join(artifactDir, 'mobile_03_lumora.png'));
  }

  // Mobile Ending / Founder
  const mFooterElem = await mobilePage.$('footer');
  if (mFooterElem) {
    await mFooterElem.scrollIntoViewIfNeeded();
    await mobilePage.waitForTimeout(400);
    const mobileEnding = path.join(projectScreenshotsDir, 'mobile_04_founder_ending.png');
    await mobilePage.screenshot({ path: mobileEnding });
    fs.copyFileSync(mobileEnding, path.join(artifactDir, 'mobile_04_founder_ending.png'));
  }

  await mobileContext.close();
  await browser.close();
  console.log('All screenshots captured successfully into Screenshots/ folder.');
}

captureEvidence().catch(err => {
  console.error('Error capturing evidence:', err);
  process.exit(1);
});
