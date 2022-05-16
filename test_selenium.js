const {Builder, Browser, By} = require('selenium-webdriver');

(async () => {
	let driver = await new Builder().forBrowser(Browser.CHROME).build();
	try {
		await driver.get('https://www.wikipedia.org/');
		await driver.findElement(By.css("#searchInput")).sendKeys('test');
		await driver.findElement(By.css("#search-form > fieldset > button")).click();
	}
	finally {
		await driver.quit();
	}
})();
