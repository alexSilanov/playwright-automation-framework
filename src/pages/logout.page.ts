import { expect, Locator, Page } from "@playwright/test";
import * as allure from "allure-js-commons";

export class LogoutPage {
  private readonly logoutLink: Locator;
  private readonly loginHeading: Locator;

  constructor(private readonly page: Page) {
    this.logoutLink = this.page.getByRole("link", {
      name: "Logout",
    });

    this.loginHeading = this.page.getByRole("heading", {
      name: "Login to your account",
    });
  }

  async logoutUser(): Promise<void> {
    await allure.step("Logout User", async () => {
      await this.logoutLink.click();
      await expect(this.loginHeading).toBeVisible();
    });
  }
}
