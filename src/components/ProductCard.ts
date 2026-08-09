import { Page, Locator } from "@playwright/test";

export class ProductCard {
  private readonly card: Locator;

  constructor(
    private readonly page: Page,
    name: string,
  ) {
    this.card = page.locator(".product-image-wrapper").filter({
      has: page.locator("p", { hasText: name }),
    });
  }

  async addToCart() {
    await this.card.hover();
    await this.card.getByText("Add to cart").first().click();
  }

  async openDetails() {
    await this.card.getByText("View Product").click();
  }

  async getPrice() {
    return await this.card.locator("h2").textContent();
  }
}
