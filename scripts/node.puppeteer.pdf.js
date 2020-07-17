/*
node scripts/node.puppeteer.pdf.js
 */
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://lasellers.github.io/GitHubUsers/');
  await page.pdf({path: 'logs/puppeteer.pdf', format: 'A4'});

  await browser.close();
})();
