import { APIResponse } from "@playwright/test";
import users from "../test-data/regisretedUser.json";
import { ServiceOptions } from "./serviceOptions";

export class Login {
  private readonly options: ServiceOptions;

  private get endpoint() {
    return `${this.options.URL}verifyLogin`;
  }

  constructor(options: ServiceOptions) {
    this.options = options;
  }

  async verifyLogin(email: string, password: string): Promise<APIResponse> {
    return this.options.request.post(this.endpoint, {
      form: {
        email,
        password,
      },
    });
  }

  async verifyRegisteredUser(): Promise<APIResponse> {
    return this.verifyLogin(
      users.registeredUser.email,
      users.registeredUser.password,
    );
  }

  async verifyLoginWithoutEmail(password: string): Promise<APIResponse> {
    return this.options.request.post(this.endpoint, {
      form: {
        password,
      },
    });
  }

  async verifyLoginPasswordOnly(): Promise<APIResponse> {
    return this.verifyLoginWithoutEmail(users.registeredUser.password);
  }

  async deleteLoginVerification(): Promise<APIResponse> {
    return this.options.request.delete(this.endpoint);
  }

  async verifyLoginWithInvalidCredentials(
    email: string,
    password: string,
  ): Promise<APIResponse> {
    return this.verifyLogin(email, password);
  }
}
