import { ServiceOptions } from "./serviceOptions";
import * as allure from "allure-js-commons";

export class Brands {
  private readonly options: ServiceOptions;

  private get endpoint() {
    return `${this.options.URL}brandsList`;
  }

  constructor(options: ServiceOptions) {
    this.options = options;
  }

  async getBrandsList() {
    return allure.step("Get Brands List", () => {
      return this.options.request.get(this.endpoint);
    });
  }

  async createBrandsList() {
    return allure.step("Create Brands List", () => {
      return this.options.request.post(this.endpoint);
    });
  }
}
