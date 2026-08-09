import { ServiceOptions } from "./serviceOptions";
import * as allure from "allure-js-commons";

export class Products {
  private readonly options: ServiceOptions;

  private get address() {
    return `${this.options.URL}productsList`;
  }
  constructor(options: ServiceOptions) {
    this.options = options;
  }

  async getProductsList() {
    return allure.step("Get products list", () =>
      this.options.request.get(this.address),
    );
  }

  async postToAllProductsList() {
    return allure.step("Post to products list", () =>
      this.options.request.post(this.address),
    );
  }
}
