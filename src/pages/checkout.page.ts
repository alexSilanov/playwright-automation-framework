import { Page, Locator, expect } from "@playwright/test";

export class CheckoutPage {
  private readonly placeOrderLink: Locator;

  constructor(private readonly page: Page) {
    this.placeOrderLink = this.page.getByRole("link", { name: "Place Order" });
  }

  async placeOrder(): Promise<void> {
    await this.placeOrderLink.click();
    await expect(this.page).toHaveURL("/payment");
  }
}
