import { expect, Locator, Page } from "@playwright/test";
import * as allure from "allure-js-commons";
import creditCard from "../test-data/creditCard.json";

export class PaymentPage {
  private readonly paymentPageTitle: Locator;
  private readonly cardName: Locator;
  private readonly cardNumber: Locator;
  private readonly cvc: Locator;
  private readonly expirationMonth: Locator;
  private readonly expirationYear: Locator;
  private readonly payButton: Locator;
  private readonly orderConfirmationHeading: Locator;
  private readonly continueLink: Locator;

  constructor(private readonly page: Page) {
    this.paymentPageTitle = this.page.getByRole("heading", {
      name: "Payment",
    });

    this.cardName = this.page.locator('[data-qa="name-on-card"]');
    this.cardNumber = this.page.locator('[data-qa="card-number"]');
    this.cvc = this.page.locator('[data-qa="cvc"]');
    this.expirationMonth = this.page.locator('[data-qa="expiry-month"]');
    this.expirationYear = this.page.locator('[data-qa="expiry-year"]');

    this.payButton = this.page.getByRole("button", {
      name: "Pay and Confirm Order",
    });

    this.orderConfirmationHeading = this.page.getByRole("heading", {
      name: "Order Placed!",
    });

    this.continueLink = this.page.getByRole("link", {
      name: "Continue",
    });
  }

  async makePayment(): Promise<void> {
    await allure.step("Make Payment", async () => {
      await expect(this.paymentPageTitle).toBeVisible();

      await this.cardName.fill(creditCard.validCard.name);
      await this.cardNumber.fill(creditCard.validCard.number);
      await this.cvc.fill(creditCard.validCard.cvc);
      await this.expirationMonth.fill(creditCard.validCard.month);
      await this.expirationYear.fill(creditCard.validCard.year);

      await this.payButton.click();

      await expect(this.orderConfirmationHeading).toBeVisible();

      await this.continueLink.click();

      await expect(this.page).toHaveURL("/");
    });
  }
}
