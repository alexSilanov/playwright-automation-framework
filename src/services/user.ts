import { ServiceOptions } from "./serviceOptions";
import * as allure from "allure-js-commons";
import { ICreateAccountRequest } from "../helpers/types/createAccountRequest";

export class User {
  private readonly options: ServiceOptions;

  private readonly user: ICreateAccountRequest = {
    name: "John",
    email: `john${Date.now()}@test.com`,
    password: "123456",
    title: "Mr",
    birth_date: "10",
    birth_month: "5",
    birth_year: "1995",
    firstname: "John",
    lastname: "Doe",
    company: "Test Company",
    address1: "Test Street 1",
    address2: "",
    country: "United States",
    zipcode: "12345",
    state: "California",
    city: "Los Angeles",
    mobile_number: "1234567890",
  };

  private get createAccountEndpoint() {
    return `${this.options.URL}createAccount`;
  }

  private get updateAccountEndpoint() {
    return `${this.options.URL}updateAccount`;
  }

  private get deleteAccountEndpoint() {
    return `${this.options.URL}deleteAccount`;
  }

  constructor(options: ServiceOptions) {
    this.options = options;
  }

  async createAccount(user = this.user) {
    return allure.step("Create Account", () => {
      return this.options.request.post(this.createAccountEndpoint, {
        form: {
          ...user,
        },
      });
    });
  }

  async updateAccount(user = this.user) {
    return allure.step("Update Account", () => {
      return this.options.request.put(this.updateAccountEndpoint, {
        form: {
          ...user,
          lastname: "Mustermann",
        },
      });
    });
  }

  async deleteAccount(user = this.user) {
    return allure.step("Delete Account", () => {
      return this.options.request.delete(this.deleteAccountEndpoint, {
        form: {
          email: user.email,
          password: user.password,
        },
      });
    });
  }
}
