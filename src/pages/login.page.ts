import { expect, Locator, Page } from "@playwright/test";
import * as allure from "allure-js-commons";
import users from "../test-data/regisretedUser.json";

export class LoginPage {
  private readonly email: Locator;
  private readonly password: Locator;
  private readonly loginButton: Locator;
  private readonly logoutLink: Locator;
  private readonly invalidCredentialsMessage: Locator;

  constructor(private readonly page: Page) {
    this.email = this.page.locator('[data-qa="login-email"]');

    this.password = this.page.locator('[data-qa="login-password"]');

    this.loginButton = this.page.locator('[data-qa="login-button"]');

    this.logoutLink = this.page.getByRole("link", {
      name: "Logout",
    });

    this.invalidCredentialsMessage = this.page.getByText(
      "Your email or password is incorrect!",
    );
  }

  async fillEmail(): Promise<void> {
    await this.email.fill(users.registeredUser.email);
  }

  async fillInvalidEmail(): Promise<void> {
    await this.email.fill(users.invalidUser.email);
  }

  async fillPassword(): Promise<void> {
    await this.password.fill(users.registeredUser.password);
  }

  async fillInvalidPassword(): Promise<void> {
    await this.password.fill(users.invalidUser.password);
  }

  async clickLoginButton(): Promise<void> {
    await this.loginButton.click();
  }

  async loginRegisteredUser(): Promise<void> {
    await allure.step("Login with Valid Credentials", async () => {
      await this.fillEmail();
      await this.fillPassword();
      await this.clickLoginButton();

      await expect(this.logoutLink).toBeVisible();
    });
  }

  async loginWithInvalidCredentials(): Promise<void> {
    await allure.step("Login with Invalid Credentials", async () => {
      await this.fillInvalidEmail();
      await this.fillInvalidPassword();
      await this.clickLoginButton();

      await expect(this.invalidCredentialsMessage).toBeVisible();
    });
  }
}
