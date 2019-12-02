const capture = require('./capture_1.js');
const pages = require('./pages.json');

const executeCapture = () => {
  Object.keys(pages).forEach(function (key) {
    capture(key, pages[key], 'tests');
  });
}

executeCapture();

