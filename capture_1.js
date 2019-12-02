/* capture.js */

const puppeteer = require('puppeteer');
const mkdirp = require('mkdirp');
const devices = require('puppeteer/DeviceDescriptors');

async function main(title, url, type) {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const current = new Date();
  const year = current.getFullYear();
  const month = current.getMonth() + 1;
  const date = current.getDate();
 
  let page = await browser.newPage();

  // pc
  await page.setViewport({ width: 1280, height: 800 });
  await page.goto(url, { waitUntil: 'networkidle0', timeout: 0 });
  // ex) screenshots/pc/20190101_area.png
  const pcFilePath = `screenshot/pc/${title}.png`;
  await page.screenshot({ path: pcFilePath, fullPage: true, type: "png" });

  // sp
  await page.emulate(devices['iPhone X']);
  await page.goto(url, { waitUntil: 'networkidle0', timeout: 0 });
  const spFilePath = `screenshot/sp/${title}.png`;
  await page.screenshot({ path: spFilePath, fullPage: true, type: "png" });

  await page.close();
  await browser.close();
}

mkdirp.sync('screenshots');
module.exports = main;
