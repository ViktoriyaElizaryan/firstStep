const playwright = require('playwright');

(async () => {
	const browser = await playwright['chromium'].launch({ headless: false });
	const context = await browser.newContext();
	const page = await context.newPage();
	await page.goto("https://www.wikipedia.org/");
	await page.locator("#searchInput").fill("test");
	await page.locator("#search-form > fieldset > button").click();
	await browser.close();
})();
