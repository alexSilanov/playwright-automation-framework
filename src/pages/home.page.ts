import { expect, Page } from "@playwright/test";
import * as allure from "allure-js-commons";

export class HomePage {
  //private readonly homePageUrl = "https://automationexercise.com/";

  constructor(private readonly page: Page) {}

  async openHomePage(): Promise<void> {
    await allure.step("Open Home Page", async () => {
      await this.page.goto("/");
      await expect(this.page).toHaveURL("/");
    });
  }
}
