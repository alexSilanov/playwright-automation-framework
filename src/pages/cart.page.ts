import { Page, Locator, expect } from "@playwright/test";
import * as allure from "allure-js-commons";

export class CartPage {
  private readonly cartPageLink: Locator;
  private readonly proceedToCheckoutButton: Locator;
  private readonly cartItems: Locator;

  constructor(private readonly page: Page) {
    this.cartPageLink = this.page.locator('.shop-menu a[href="/view_cart"]');
    this.proceedToCheckoutButton = this.page.getByText("Proceed To Checkout");
    this.cartItems = this.page.locator("#cart_info_table tbody tr");
  }

  async openCart(): Promise<void> {
    await allure.step("Open cart page", async () => {
      await this.cartPageLink.click();

      await expect(this.page).toHaveURL("/view_cart");
    });
  }

  async shouldContainProduct(): Promise<void> {
    await expect(this.cartItems.first()).toBeVisible();
  }

  async proceedToCheckout(): Promise<void> {
    await this.proceedToCheckoutButton.click();

    await expect(this.page).toHaveURL("/checkout");
  }
}
