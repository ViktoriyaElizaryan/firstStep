const puppeteer = require('puppeteer');

(async () => {
	const browser = await puppeteer.launch({ headless: false });
	const page = await browser.newPage();
	await page.goto("https://www.wikipedia.org/");
	await page.type("#searchInput", "test");
	await page.click("#search-form > fieldset > button");

	await browser.close();
})();
