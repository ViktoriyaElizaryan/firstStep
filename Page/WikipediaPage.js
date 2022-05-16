class WikipediaPage {
	constructor(page) {
		this.page = page;
		this.searchInput = page.locator("#searchInput");
		this.searchButton = page.locator("#search-form > fieldset > button");
	}
	async navigate() {
		await this.page.goto('https://www.wikipedia.org/');
	}
}
module.exports = { WikipediaPage };
