import { Page, Locator } from "@playwright/test";

export class BrandSidebar {
  constructor(private page: Page) {}

  async selectBrand(brand: string) {
    await this.page.getByRole("link", { name: brand }).click();
  }
}
