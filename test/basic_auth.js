require('chromedriver');
const { Builder } = require('selenium-webdriver');
var assert = require('assert');
const { Options } = require('selenium-webdriver/chrome');

describe('webdriver bidi tests', async function () {
  this.timeout(0)

  it('basic authentication', async function () {
    let driver = await new Builder()
      .forBrowser('chrome')
      .setChromeOptions(new Options().addArguments('--headless'))
      .build();

    const pageCdpConnection = await driver.createCDPConnection('page');
    await driver.register('admin', 'admin', pageCdpConnection);
    await driver.get('https://the-internet.herokuapp.com/basic_auth');

    let title = await driver.getTitle();
    assert.equal('The Internet', title);

    console.log(`log title: ${title}`);

    await driver.quit();
  });
});