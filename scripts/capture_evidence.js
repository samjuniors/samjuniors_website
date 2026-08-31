const { chromium } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

async function captureEvidence() {
  const outputDir = path.join('C:', 'Users', 'STUDIO-1', '.gemini', 'antigravity-ide', 'brain', 'a2b1a0ad-e5e8-4a29-b600-2ee24058a2dc', 'visual_review');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

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

  // Full page
  await desktopPage.screenshot({ path: path.join(outputDir, 'desktop_full_journey.png'), fullPage: true });

  // Viewport 1: Hero
  await desktopPage.evaluate(() => window.scrollTo(0, 0));
  await desktopPage.waitForTimeout(400);
  await desktopPage.screenshot({ path: path.join(outputDir, 'desktop_01_hero.png') });

  // Viewport 2: Philosophy (The 4 Filters)
  const philElem = await desktopPage.$('#philosophy');
  if (philElem) {
    await philElem.scrollIntoViewIfNeeded();
    await desktopPage.waitForTimeout(400);
    await desktopPage.screenshot({ path: path.join(outputDir, 'desktop_02_philosophy.png') });
  }

  // Viewport 3: Lumora Showcase & Workbench
  const lumoraElem = await desktopPage.$('#lumora');
  if (lumoraElem) {
    await lumoraElem.scrollIntoViewIfNeeded();
    await desktopPage.waitForTimeout(400);
    await desktopPage.screenshot({ path: path.join(outputDir, 'desktop_03_lumora_stage.png') });

    // Click Intelligence tab to demonstrate interactive state
    const intelligenceTab = await desktopPage.$('button[role="tab"]:has-text("Intelligence")');
    if (intelligenceTab) {
      await intelligenceTab.click();
      await desktopPage.waitForTimeout(400);
      await desktopPage.screenshot({ path: path.join(outputDir, 'desktop_03b_lumora_interactive_state.png') });
    }
  }

  // Viewport 4: Ecosystem & Founder
  const ecoElem = await desktopPage.$('#ecosystem');
  if (ecoElem) {
    await ecoElem.scrollIntoViewIfNeeded();
    await desktopPage.waitForTimeout(400);
    await desktopPage.screenshot({ path: path.join(outputDir, 'desktop_04_ecosystem_founder.png') });
  }

  // Viewport 5: Gateways & Footer
  const footerElem = await desktopPage.$('footer');
  if (footerElem) {
    await footerElem.scrollIntoViewIfNeeded();
    await desktopPage.waitForTimeout(400);
    await desktopPage.screenshot({ path: path.join(outputDir, 'desktop_05_gateways_footer.png') });
  }

  await desktopContext.close();

  // 2. MOBILE CAPTURE (390x844 - iPhone 14 / modern standard mobile viewport)
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

  // Full page
  await mobilePage.screenshot({ path: path.join(outputDir, 'mobile_full_journey.png'), fullPage: true });

  // Mobile Viewport 1: Hero
  await mobilePage.evaluate(() => window.scrollTo(0, 0));
  await mobilePage.waitForTimeout(400);
  await mobilePage.screenshot({ path: path.join(outputDir, 'mobile_01_hero.png') });

  // Mobile Viewport 2: Philosophy
  const mPhilElem = await mobilePage.$('#philosophy');
  if (mPhilElem) {
    await mPhilElem.scrollIntoViewIfNeeded();
    await mobilePage.waitForTimeout(400);
    await mobilePage.screenshot({ path: path.join(outputDir, 'mobile_02_philosophy.png') });
  }

  // Mobile Viewport 3: Lumora Stage
  const mLumoraElem = await mobilePage.$('#lumora');
  if (mLumoraElem) {
    await mLumoraElem.scrollIntoViewIfNeeded();
    await mobilePage.waitForTimeout(400);
    await mobilePage.screenshot({ path: path.join(outputDir, 'mobile_03_lumora_stage.png') });
  }

  // Mobile Viewport 4: Ecosystem & Founder
  const mEcoElem = await mobilePage.$('#ecosystem');
  if (mEcoElem) {
    await mEcoElem.scrollIntoViewIfNeeded();
    await mobilePage.waitForTimeout(400);
    await mobilePage.screenshot({ path: path.join(outputDir, 'mobile_04_ecosystem_founder.png') });
  }

  // Mobile Viewport 5: Gateways & Footer
  const mFooterElem = await mobilePage.$('footer');
  if (mFooterElem) {
    await mFooterElem.scrollIntoViewIfNeeded();
    await mobilePage.waitForTimeout(400);
    await mobilePage.screenshot({ path: path.join(outputDir, 'mobile_05_gateways_footer.png') });
  }

  await mobileContext.close();
  await browser.close();
  console.log('All screenshots captured successfully in:', outputDir);
}

captureEvidence().catch(err => {
  console.error('Error capturing screenshots:', err);
  process.exit(1);
});
