import { expect, Locator, Page } from "@playwright/test";
import * as allure from "allure-js-commons";

export class RegistrationConfirmationPage {
  private readonly pageTitle: Locator;
  private readonly continueLink: Locator;

  constructor(private readonly page: Page) {
    this.pageTitle = this.page.getByRole("heading", {
      name: "Account Created!",
    });

    this.continueLink = this.page.getByRole("link", {
      name: "Continue",
    });
  }

  async checkSuccessfulRegistration(): Promise<void> {
    await allure.step("Check Successful Registration", async () => {
      await expect(this.pageTitle).toBeVisible();
      await this.continueLink.click();
    });
  }
}
