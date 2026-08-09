import { expect, Locator, Page } from "@playwright/test";
import * as allure from "allure-js-commons";
import { IRegistrationUser } from "../helpers/types/registrationUser";

export class RegistrationPage {
  private readonly password: Locator;
  private readonly firstName: Locator;
  private readonly lastName: Locator;
  private readonly company: Locator;
  private readonly address: Locator;
  private readonly address2: Locator;
  private readonly country: Locator;
  private readonly state: Locator;
  private readonly city: Locator;
  private readonly zipCode: Locator;
  private readonly mobileNumber: Locator;

  private readonly birthDay: Locator;
  private readonly birthMonth: Locator;
  private readonly birthYear: Locator;

  private readonly newsletterCheckbox: Locator;
  private readonly offersCheckbox: Locator;

  private readonly createAccountButton: Locator;
  private readonly continueLink: Locator;

  constructor(private readonly page: Page) {
    this.password = this.page.getByRole("textbox", {
      name: "Password",
    });

    this.firstName = this.page.getByRole("textbox", {
      name: "First name",
    });

    this.lastName = this.page.getByRole("textbox", {
      name: "Last name",
    });

    this.company = this.page.getByRole("textbox", {
      name: "Company",
      exact: true,
    });

    this.address = this.page.locator('[data-qa="address"]');
    this.address2 = this.page.locator('[data-qa="address2"]');

    this.country = this.page.getByRole("combobox", {
      name: "Country",
    });

    this.state = this.page.getByRole("textbox", {
      name: "State",
    });

    this.city = this.page.getByRole("textbox", {
      name: "City",
    });

    this.zipCode = this.page.locator('[data-qa="zipcode"]');

    this.mobileNumber = this.page.getByRole("textbox", {
      name: "Mobile Number",
    });

    this.birthDay = this.page.locator('[data-qa="days"]');
    this.birthMonth = this.page.locator('[data-qa="months"]');
    this.birthYear = this.page.locator('[data-qa="years"]');

    this.newsletterCheckbox = this.page.locator("#newsletter");
    this.offersCheckbox = this.page.locator("#optin");

    this.createAccountButton = this.page.getByRole("button", {
      name: "Create Account",
    });

    this.continueLink = this.page.getByRole("link", {
      name: "Continue",
    });
  }

  async fillRegistrationForm(user: IRegistrationUser): Promise<void> {
    await this.password.fill(user.password);

    await this.birthDay.selectOption(user.day);
    await this.birthMonth.selectOption(user.month);
    await this.birthYear.selectOption(user.year);

    if (user.subscribeNews) {
      await this.newsletterCheckbox.check();
    }

    if (user.receiveOffers) {
      await this.offersCheckbox.check();
    }

    await this.firstName.fill(user.firstName);
    await this.lastName.fill(user.lastName);
    await this.company.fill(user.company);
    await this.address.fill(user.address);
    await this.address2.fill(user.address2);

    await this.country.selectOption({
      label: user.country,
    });

    await this.state.fill(user.state);
    await this.city.fill(user.city);
    await this.zipCode.fill(user.zip);
    await this.mobileNumber.fill(user.mobileNumber);
  }

  async clickCreateAccount(): Promise<void> {
    await this.createAccountButton.click();
  }

  async clickContinue(): Promise<void> {
    await this.continueLink.click();
  }

  async register(user: IRegistrationUser): Promise<void> {
    await allure.step("Register New User", async () => {
      await this.fillRegistrationForm(user);
      await this.clickCreateAccount();
    });
  }
}
