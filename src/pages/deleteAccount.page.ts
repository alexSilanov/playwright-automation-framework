import { expect, Locator, Page } from "@playwright/test";
import * as allure from "allure-js-commons";

export class DeleteAccountPage {
  private readonly deleteAccountLink: Locator;
  private readonly accountDeletedHeading: Locator;
  private readonly continueLink: Locator;

  constructor(private readonly page: Page) {
    this.deleteAccountLink = this.page.getByRole("link", {
      name: "Delete Account",
    });

    this.accountDeletedHeading = this.page.getByRole("heading", {
      name: "Account Deleted!",
    });

    this.continueLink = this.page.getByRole("link", {
      name: "Continue",
    });
  }

  async deleteAccount(): Promise<void> {
    await allure.step("Delete Account", async () => {
      await expect(this.deleteAccountLink).toBeVisible();
      await this.deleteAccountLink.click();

      await expect(this.accountDeletedHeading).toBeVisible();

      await this.continueLink.click();
    });
  }
}
