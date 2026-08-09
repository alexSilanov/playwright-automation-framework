import { Locator, Page } from "@playwright/test";

export class ProductCategorySidebar {
  constructor(private readonly page: Page) {}

  private category(name: string): Locator {
    return this.page.getByRole("link", { name: name, exact: true });
  }

  async open(category: string): Promise<void> {
    await this.category(category).click();
  }

  async select(subCategory: string): Promise<void> {
    await this.category(subCategory).click();
  }
}
