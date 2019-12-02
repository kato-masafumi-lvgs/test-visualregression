const capture = require('./capture_1.js');
const pages = require('./pages.json');

const executeCapture = () => {
  Object.keys(pages).forEach(function (key) {
    console.log(`creating image for ${pages[key]}`);
    capture(key, pages[key], 'tests');
  });
}

executeCapture();

