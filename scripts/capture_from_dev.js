const http = require('http');
const { chromium } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

function checkPort(port) {
  return new Promise((resolve) => {
    const req = http.get(`http://localhost:${port}`, (res) => {
      resolve(true);
    });
    req.on('error', () => resolve(false));
    req.setTimeout(1500, () => {
      req.destroy();
      resolve(false);
    });
  });
}

async function captureFromDevServer() {
  let targetPort = null;
  for (const port of [3000, 3001, 3002]) {
    const isUp = await checkPort(port);
    if (isUp) {
      targetPort = port;
      console.log(`Detected active dev server on port ${port}`);
      break;
    }
  }

  if (!targetPort) {
    console.error('No active dev server detected on ports 3000, 3001, 3002!');
    process.exit(1);
  }

  const baseUrl = `http://localhost:${targetPort}`;
  const workspaceDir = path.join(process.cwd(), 'Screenshots');
  const artifactDir = path.join('C:', 'Users', 'STUDIO-1', '.gemini', 'antigravity-ide', 'brain', 'a2b1a0ad-e5e8-4a29-b600-2ee24058a2dc');

  [workspaceDir, artifactDir].forEach(dir => {
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  });

  const browser = await chromium.launch({ headless: true });

  // 1. Desktop (1440x900)
  console.log(`Capturing Desktop 1440px from ${baseUrl}...`);
  const desktop = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2,
  });
  const page = await desktop.newPage();
  await page.goto(baseUrl, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(1200);

  // 1440px Desktop Hero
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(400);
  const dHero = path.join(workspaceDir, 'desktop_01_hero.png');
  await page.screenshot({ path: dHero });
  fs.copyFileSync(dHero, path.join(artifactDir, 'desktop_01_hero.png'));

  // Desktop Thesis
  const thesis = await page.$('#thesis');
  if (thesis) {
    await thesis.scrollIntoViewIfNeeded();
    await page.waitForTimeout(400);
    const dThesis = path.join(workspaceDir, 'desktop_02_thesis.png');
    await page.screenshot({ path: dThesis });
    fs.copyFileSync(dThesis, path.join(artifactDir, 'desktop_02_thesis.png'));
  }

  // Desktop Lumora
  const lumora = await page.$('#lumora');
  if (lumora) {
    await lumora.scrollIntoViewIfNeeded();
    await page.waitForTimeout(400);
    const dLumora = path.join(workspaceDir, 'desktop_03_lumora.png');
    await page.screenshot({ path: dLumora });
    fs.copyFileSync(dLumora, path.join(artifactDir, 'desktop_03_lumora.png'));

    // Interactive Mode switch
    const contextTab = await page.$('button[role="tab"]:has-text("Context Engine")');
    if (contextTab) {
      await contextTab.click();
      await page.waitForTimeout(400);
      const dLumoraInt = path.join(workspaceDir, 'desktop_03b_lumora_interactive.png');
      await page.screenshot({ path: dLumoraInt });
      fs.copyFileSync(dLumoraInt, path.join(artifactDir, 'desktop_03b_lumora_interactive.png'));
    }
  }

  // Desktop Founder & Ending
  const footer = await page.$('footer');
  if (footer) {
    await footer.scrollIntoViewIfNeeded();
    await page.waitForTimeout(400);
    const dEnding = path.join(workspaceDir, 'desktop_04_founder_ending.png');
    await page.screenshot({ path: dEnding });
    fs.copyFileSync(dEnding, path.join(artifactDir, 'desktop_04_founder_ending.png'));
  }

  // Desktop Full Journey
  const dFull = path.join(workspaceDir, 'desktop_full_journey.png');
  await page.screenshot({ path: dFull, fullPage: true });
  fs.copyFileSync(dFull, path.join(artifactDir, 'desktop_full_journey.png'));

  await desktop.close();

  // 2. Mobile (390x844)
  console.log(`Capturing Mobile 390px from ${baseUrl}...`);
  const mobile = await browser.newContext({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
  });
  const mPage = await mobile.newPage();
  await mPage.goto(baseUrl, { waitUntil: 'networkidle' });
  await mPage.evaluate(() => document.fonts.ready);
  await mPage.waitForTimeout(1200);

  // Mobile Hero
  await mPage.evaluate(() => window.scrollTo(0, 0));
  await mPage.waitForTimeout(400);
  const mHero = path.join(workspaceDir, 'mobile_01_hero.png');
  await mPage.screenshot({ path: mHero });
  fs.copyFileSync(mHero, path.join(artifactDir, 'mobile_01_hero.png'));

  // Mobile Thesis
  const mThesis = await mPage.$('#thesis');
  if (mThesis) {
    await mThesis.scrollIntoViewIfNeeded();
    await mPage.waitForTimeout(400);
    const mThesisFile = path.join(workspaceDir, 'mobile_02_thesis.png');
    await mPage.screenshot({ path: mThesisFile });
    fs.copyFileSync(mThesisFile, path.join(artifactDir, 'mobile_02_thesis.png'));
  }

  // Mobile Lumora
  const mLumora = await mPage.$('#lumora');
  if (mLumora) {
    await mLumora.scrollIntoViewIfNeeded();
    await mPage.waitForTimeout(400);
    const mLumoraFile = path.join(workspaceDir, 'mobile_03_lumora.png');
    await mPage.screenshot({ path: mLumoraFile });
    fs.copyFileSync(mLumoraFile, path.join(artifactDir, 'mobile_03_lumora.png'));
  }

  // Mobile Ending
  const mFooter = await mPage.$('footer');
  if (mFooter) {
    await mFooter.scrollIntoViewIfNeeded();
    await mPage.waitForTimeout(400);
    const mEnding = path.join(workspaceDir, 'mobile_04_founder_ending.png');
    await mPage.screenshot({ path: mEnding });
    fs.copyFileSync(mEnding, path.join(artifactDir, 'mobile_04_founder_ending.png'));
  }

  // Mobile Full Journey
  const mFull = path.join(workspaceDir, 'mobile_full_journey.png');
  await mPage.screenshot({ path: mFull, fullPage: true });
  fs.copyFileSync(mFull, path.join(artifactDir, 'mobile_full_journey.png'));

  await mobile.close();
  await browser.close();
  console.log('Successfully captured all screenshots from live dev server!');
}

captureFromDevServer().catch(err => {
  console.error('Error during dev server screenshot capture:', err);
  process.exit(1);
});
