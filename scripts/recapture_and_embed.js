const { chromium } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

async function run() {
  const workspaceDir = path.join(process.cwd(), 'Screenshots');
  const artifactDir = path.join('C:', 'Users', 'STUDIO-1', '.gemini', 'antigravity-ide', 'brain', 'a2b1a0ad-e5e8-4a29-b600-2ee24058a2dc');

  [workspaceDir, artifactDir].forEach(dir => {
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  });

  const browser = await chromium.launch({ headless: true });

  // 1. Desktop 1440px
  console.log('Capturing Desktop 1440px...');
  const desktop = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2,
  });
  const page = await desktop.newPage();
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(800);

  // Full page
  const dFull = path.join(workspaceDir, 'desktop_full_journey.png');
  await page.screenshot({ path: dFull, fullPage: true });
  fs.copyFileSync(dFull, path.join(artifactDir, 'desktop_full_journey.png'));

  // Hero
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(300);
  const dHero = path.join(workspaceDir, 'desktop_01_hero.png');
  await page.screenshot({ path: dHero });
  fs.copyFileSync(dHero, path.join(artifactDir, 'desktop_01_hero.png'));

  // Thesis
  const thesis = await page.$('#thesis');
  if (thesis) {
    await thesis.scrollIntoViewIfNeeded();
    await page.waitForTimeout(300);
    const dThesis = path.join(workspaceDir, 'desktop_02_thesis.png');
    await page.screenshot({ path: dThesis });
    fs.copyFileSync(dThesis, path.join(artifactDir, 'desktop_02_thesis.png'));
  }

  // Lumora
  const lumora = await page.$('#lumora');
  if (lumora) {
    await lumora.scrollIntoViewIfNeeded();
    await page.waitForTimeout(300);
    const dLumora = path.join(workspaceDir, 'desktop_03_lumora.png');
    await page.screenshot({ path: dLumora });
    fs.copyFileSync(dLumora, path.join(artifactDir, 'desktop_03_lumora.png'));

    // Interactive Tab
    const tab = await page.$('button[role="tab"]:has-text("Context Engine")');
    if (tab) {
      await tab.click();
      await page.waitForTimeout(300);
      const dLumoraTab = path.join(workspaceDir, 'desktop_03b_lumora_interactive.png');
      await page.screenshot({ path: dLumoraTab });
      fs.copyFileSync(dLumoraTab, path.join(artifactDir, 'desktop_03b_lumora_interactive.png'));
    }
  }

  // Founder / Ending
  const footer = await page.$('footer');
  if (footer) {
    await footer.scrollIntoViewIfNeeded();
    await page.waitForTimeout(300);
    const dEnding = path.join(workspaceDir, 'desktop_04_founder_ending.png');
    await page.screenshot({ path: dEnding });
    fs.copyFileSync(dEnding, path.join(artifactDir, 'desktop_04_founder_ending.png'));
  }

  await desktop.close();

  // 2. Mobile 390px
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

  // Mobile Full
  const mFull = path.join(workspaceDir, 'mobile_full_journey.png');
  await mPage.screenshot({ path: mFull, fullPage: true });
  fs.copyFileSync(mFull, path.join(artifactDir, 'mobile_full_journey.png'));

  // Mobile Hero
  await mPage.evaluate(() => window.scrollTo(0, 0));
  await mPage.waitForTimeout(300);
  const mHero = path.join(workspaceDir, 'mobile_01_hero.png');
  await mPage.screenshot({ path: mHero });
  fs.copyFileSync(mHero, path.join(artifactDir, 'mobile_01_hero.png'));

  // Mobile Thesis
  const mThesis = await mPage.$('#thesis');
  if (mThesis) {
    await mThesis.scrollIntoViewIfNeeded();
    await mPage.waitForTimeout(300);
    const mThesisFile = path.join(workspaceDir, 'mobile_02_thesis.png');
    await mPage.screenshot({ path: mThesisFile });
    fs.copyFileSync(mThesisFile, path.join(artifactDir, 'mobile_02_thesis.png'));
  }

  // Mobile Lumora
  const mLumora = await mPage.$('#lumora');
  if (mLumora) {
    await mLumora.scrollIntoViewIfNeeded();
    await mPage.waitForTimeout(300);
    const mLumoraFile = path.join(workspaceDir, 'mobile_03_lumora.png');
    await mPage.screenshot({ path: mLumoraFile });
    fs.copyFileSync(mLumoraFile, path.join(artifactDir, 'mobile_03_lumora.png'));
  }

  // Mobile Founder / Ending
  const mFooter = await mPage.$('footer');
  if (mFooter) {
    await mFooter.scrollIntoViewIfNeeded();
    await mPage.waitForTimeout(300);
    const mEnding = path.join(workspaceDir, 'mobile_04_founder_ending.png');
    await mPage.screenshot({ path: mEnding });
    fs.copyFileSync(mEnding, path.join(artifactDir, 'mobile_04_founder_ending.png'));
  }

  await mobile.close();
  await browser.close();
  console.log('All screenshots regenerated and synced successfully.');
}

run().catch(err => {
  console.error('Error during recapture:', err);
  process.exit(1);
});
