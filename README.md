# webdriver-bidi

Companion code for the article **[Should you get excited about WebDriver BiDi?](https://www.veritygate.com/should-you-get-excited-about-webdriver-bidi)** (June 2023, also on [Medium](https://mmasetic.medium.com/should-you-get-excited-about-webdriver-bidi-bdeb538088fd)).

The two tests below are the examples from the article (one small update, see the note below), written with Selenium WebDriver for JavaScript, Mocha and headless Chrome, and run in GitHub Actions ([video](https://www.youtube.com/watch?v=NRqMRIqcORI)).

| Test | What it shows |
|---|---|
| [`test/basic_auth.js`](test/basic_auth.js) | Basic authentication, then verifies the page title |
| [`test/console_events.js`](test/console_events.js) | Listening to browser console logs and JavaScript exceptions |

## Run

```bash
npm install
npm test
```

## Note (2026)

This repository is kept as a snapshot that matches the article. In November 2026 it got a small refresh so the tests run again on current Chrome:

- `chromedriver` updated from 113 to 157, and CI moved from Node 18 to Node 22 (required by `chromedriver` 157).
- `console_events.js` now expects the page title `Facebook` instead of `Facebook - log in or sign up`, because Facebook changed it. This is the only difference from the code in the article.
- The CI job has a 10-minute limit, so a failing test can no longer leave the browser open and hang the run.

About the protocol:

- At the time, Selenium documented these features as its "BiDirectional" APIs. In Selenium 4.10 (the version locked here) they run over the **Chrome DevTools Protocol** (`createCDPConnection`), so they only work in Chromium-based browsers. They are not the W3C WebDriver BiDi protocol itself.
- Selenium has added native WebDriver BiDi support since then. See the current [Selenium BiDi documentation](https://www.selenium.dev/documentation/webdriver/bidi/) and the [W3C WebDriver BiDi spec](https://w3c.github.io/webdriver-bidi/).
