import { Title } from "./title";
export type { Title };

export interface IRegistrationUser {
  username: string;
  email: string;
  title?: Title;
  password: string;
  firstName: string;
  lastName: string;
  company: string;
  address: string;
  address2: string;
  country: string;
  state: string;
  city: string;
  zip: string;
  mobileNumber: string;
  day: string;
  month: string;
  year: string;
  subscribeNews: boolean;
  receiveOffers: boolean;
}
