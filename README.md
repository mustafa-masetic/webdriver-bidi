# webdriver-bidi

Companion code for the article **[Should you get excited about WebDriver BiDi?](https://www.veritygate.com/should-you-get-excited-about-webdriver-bidi)** (June 2023, also on [Medium](https://mmasetic.medium.com/should-you-get-excited-about-webdriver-bidi-bdeb538088fd)).

The two tests below are the exact examples from the article, written with Selenium WebDriver for JavaScript, Mocha and headless Chrome, and run in GitHub Actions ([video](https://www.youtube.com/watch?v=NRqMRIqcORI)).

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

This repository is kept as a snapshot that matches the article and is no longer maintained.

- At the time, Selenium documented these features as its "BiDirectional" APIs. In Selenium 4.10 (the version locked here) they run over the **Chrome DevTools Protocol** (`createCDPConnection`), so they only work in Chromium-based browsers. They are not the W3C WebDriver BiDi protocol itself.
- Dependencies are pinned to mid-2023 versions (Selenium 4.10, chromedriver 113, Node 18). With a current Chrome you will likely need to update `chromedriver`.
- Selenium has added native WebDriver BiDi support since then. See the current [Selenium BiDi documentation](https://www.selenium.dev/documentation/webdriver/bidi/) and the [W3C WebDriver BiDi spec](https://w3c.github.io/webdriver-bidi/).