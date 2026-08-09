import { Page, Locator } from "@playwright/test";

export class AddToCartModal {
  constructor(private page: Page) {}

  async continueShopping() {
    await this.page
      .getByRole("button", {
        name: "Continue Shopping",
      })
      .click();
  }

  async viewCart() {
    await this.page
      .getByRole("link", {
        name: "View Cart",
      })
      .click();
  }
}
