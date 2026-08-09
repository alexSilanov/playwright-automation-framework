import { expect, Locator, Page } from "@playwright/test";
import * as allure from "allure-js-commons";
import { IRegistrationUser } from "../helpers/types/registrationUser";

export class SignUpPage {
  private readonly username: Locator;
  private readonly email: Locator;
  private readonly signupButton: Locator;
  private readonly signupLoginLink: Locator;

  constructor(private readonly page: Page) {
    this.signupLoginLink = this.page.getByRole("link", {
      name: "Signup / Login",
    });

    this.username = this.page.getByRole("textbox", {
      name: "Name",
    });

    this.email = this.page.locator('[data-qa="signup-email"]');

    this.signupButton = this.page.getByRole("button", {
      name: "Signup",
    });
  }

  async openSignUpPage(): Promise<void> {
    await allure.step("Open Signup/Login Page", async () => {
      await this.signupLoginLink.click();

      await expect(this.page).toHaveURL("/login");
    });
  }

  async fillUsername(user: IRegistrationUser): Promise<void> {
    await this.username.fill(user.username);
  }

  async fillEmail(user: IRegistrationUser): Promise<void> {
    await this.email.fill(user.email);
  }

  async clickSignupButton(): Promise<void> {
    await this.signupButton.click();
  }

  async fillSignupForm(user: IRegistrationUser): Promise<void> {
    await this.fillUsername(user);
    await this.fillEmail(user);
  }

  async signUpUser(user: IRegistrationUser): Promise<void> {
    await allure.step("Sign Up New User", async () => {
      await this.fillSignupForm(user);
      await this.clickSignupButton();
    });
  }
}
