import { Page, Locator } from "@playwright/test";

export class Search {
  private readonly searchProductField: Locator;
  private readonly submitSearch: Locator;

  constructor(private readonly page: Page) {
    this.searchProductField = this.page.locator("#search_product");
    this.submitSearch = this.page.locator("#submit_search");
  }

  async searchProduct(product: string): Promise<void> {
    await this.searchProductField.fill(product);
    await this.submitSearch.click();
  }
}
