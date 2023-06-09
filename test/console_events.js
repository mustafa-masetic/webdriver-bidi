require('chromedriver');
const { Builder } = require('selenium-webdriver');
const { Options } = require('selenium-webdriver/chrome');
var assert = require('assert');

describe('webdriver bidi tests', async function () {
  this.timeout(0)

  it('log console logs and exceptions', async function () {
    let driver = await new Builder()
      .forBrowser('chrome')
      .setChromeOptions(new Options().addArguments('--headless'))
      .build();

    const pageCdpConnection = await driver.createCDPConnection('page');
    await driver.get('https://www.facebook.com/');

    await driver.onLogEvent(pageCdpConnection, function (event) {
      console.log(event['args'][0]['value']);
    });

    await driver.onLogException(pageCdpConnection, function (event) {
      console.log(event['exceptionDetails']);
    })

    await driver.executeScript('console.log("Here is my console log from browser!")');

    let title = await driver.getTitle();
    assert.equal('Facebook – Anmelden oder Registrieren', title)

    console.log(`log title: ${title}`);

    await driver.quit();
  });
});