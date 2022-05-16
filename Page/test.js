const { test } = require('@playwright/test');
const { WikipediaPage } = require('./WikipediaPage');

test('Wikipedia tests', async ({ page}) => {
	const wikipediaPage = new WikipediaPage(page);
	await wikipediaPage.navigate();
	await wikipediaPage.searchInput.fill('search query');
	await wikipediaPage.searchButton.click();
});

