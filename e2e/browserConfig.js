const chrome = {
  'browserName': 'chrome',
  'chromeOptions': {
    'args': [
      'disable-infobars',
    ]
  }
};

const firefox = {
  'browserName': 'firefox',
};

const multiCapabilities = [
  chrome,
  firefox,
];

module.exports = { chrome, firefox, multiCapabilities }
