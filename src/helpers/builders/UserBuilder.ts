import { faker } from "@faker-js/faker";
import { IUser, Title } from "../types/user";

export class UserBuilder {
  private user: IUser;

  constructor() {
    this.user = {
      username: faker.internet.username(),
      email: faker.internet.email(),
      title: faker.helpers.arrayElement<Title>(["Mr.", "Mrs."]),
    };
  }

  withUsername(username: string): UserBuilder {
    this.user.username = username;
    return this;
  }

  withEmail(email: string): UserBuilder {
    this.user.email = email;
    return this;
  }

  build(): IUser {
    return this.user;
  }
}
