/*
node scripts/node.puppeteer.screenshot.4k.js
 */
const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
  await page.setViewport({
    width: 4096,
    height: 2160,
    deviceScaleFactor: 1,
  });
  await page.goto('https://lasellers.github.io/GitHubUsers/');
    await page.screenshot({path: 'logs/puppeteer.png'});

    await browser.close();
})();
