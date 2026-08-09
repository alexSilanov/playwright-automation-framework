import { Locator, Page } from "@playwright/test";
import * as allure from "allure-js-commons";

export class UserDataConsentPage {
  private readonly consentTitle: Locator;
  private readonly consentButton: Locator;

  constructor(private readonly page: Page) {
    this.consentTitle = this.page.getByRole("heading", {
      name: "This site asks for consent to use your data",
    });

    this.consentButton = this.page.getByRole("button", {
      name: "Consent",
    });
  }

  async acceptConsentIfVisible(): Promise<void> {
    await allure.step("Accept Data Consent", async () => {
      if (await this.consentTitle.isVisible()) {
        await this.consentButton.click();
      }
    });
  }
}
