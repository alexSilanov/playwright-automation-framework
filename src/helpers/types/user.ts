import { Title } from "./title";

export type { Title };

export interface IUser {
  username: string;
  email: string;
  title?: Title;
}
