module.exports = async (page, scenario, vp) => {
  console.log('SCENARIO > ' + scenario.label);
  console.log('starting for ' + vp.label);

  const devices = require('puppeteer/DeviceDescriptors');

  // もし必要ならAndroidとiOSの2つに分ける
  if (vp.label === 'sp') {
    await page.emulate(devices['iPhone 7']);
  }
};
