require('chromedriver');
const {Builder} = require('selenium-webdriver');

(async function example() {
  try {
    let driver = await new Builder()
      .forBrowser('chrome')
      .build();

    const pageCdpConnection = await driver.createCDPConnection('page');
    await driver.register('admin', 'admin', pageCdpConnection);
    await driver.get('https://the-internet.herokuapp.com/basic_auth');
    await driver.quit();
  }catch (e){
    console.log(e)
  }
}())