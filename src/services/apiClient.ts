import * as API from "./index";
import { ServiceOptions } from "./serviceOptions";

export class ApiClient {
  brands: API.Brands;
  products: API.Products;
  login: API.Login;
  user: API.User;

  constructor(options: ServiceOptions) {
    const defaultOptions = {
      URL: process.env.BASE_URL_API,
    };
    const mergeOptions = {
      ...defaultOptions,
      ...options,
    };
    this.brands = new API.Brands(mergeOptions);
    this.products = new API.Products(mergeOptions);
    this.login = new API.Login(mergeOptions);
    this.user = new API.User(mergeOptions);
  }
}
