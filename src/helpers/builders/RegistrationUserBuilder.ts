import { IRegistrationUser, Title } from "../types/registrationUser";
import { faker } from "@faker-js/faker";

export class RegistrationBuilderUser {
  private registrationUser: IRegistrationUser;

  constructor() {
    this.registrationUser = {
      username: faker.internet.username(),
      email: faker.internet.email(),
      title: faker.helpers.arrayElement<Title>(["Mr.", "Mrs."]),
      password: faker.internet.password(),
      firstName: faker.internet.username(),
      lastName: faker.internet.username(),
      company: faker.company.name(),
      address: faker.location.streetAddress(),
      address2: faker.location.secondaryAddress(),
      country: faker.helpers.arrayElement([
        "India",
        "United States",
        "Canada",
        "Australia",
        "Israel",
        "New Zealand",
        "Singapore",
      ]),
      state: faker.location.state(),
      city: faker.location.city(),
      zip: faker.location.zipCode(),
      mobileNumber: faker.phone.number(),
      day: "1",
      month: "January",
      year: "1990",
      subscribeNews: true,
      receiveOffers: false,
    };
  }

  withUsername(username: string): RegistrationBuilderUser {
    this.registrationUser.username = username;
    return this;
  }

  withEmail(email: string): RegistrationBuilderUser {
    this.registrationUser.email = email;
    return this;
  }

  build(): IRegistrationUser {
    return this.registrationUser;
  }
}
