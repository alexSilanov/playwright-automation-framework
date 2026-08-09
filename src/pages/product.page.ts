import { expect, Locator, Page } from "@playwright/test";
import * as allure from "allure-js-commons";

import { Search } from "../components/Search";
import { ProductCategorySidebar } from "../components/ProductCategorySidebar";
import { BrandSidebar } from "../components/BrandSidebar";
import { AddToCartModal } from "../components/AddToCardModal";
import { ProductCard } from "../components/ProductCard";

export class ProductPage {
  private readonly productsLink: Locator;

  readonly search: Search;
  readonly category: ProductCategorySidebar;
  readonly brand: BrandSidebar;
  readonly addToCart: AddToCartModal;
  readonly productCard: ProductCard;

  constructor(private readonly page: Page) {
    this.productsLink = this.page.getByRole("link", {
      name: "Products",
    });

    this.search = new Search(this.page);
    this.category = new ProductCategorySidebar(this.page);
    this.brand = new BrandSidebar(this.page);
    this.addToCart = new AddToCartModal(this.page);
    this.productCard = new ProductCard(this.page, "");
  }

  async openProductsPage(): Promise<void> {
    await allure.step("Open Products Page", async () => {
      await this.productsLink.click();

      if (
        this.page.url() === "https://automationexercise.com/#google_vignette"
      ) {
        const closeButton = this.page
          .locator('iframe[name="aswift_3"]')
          .contentFrame()
          .getByRole("button", { name: "Close ad" });

        if (await closeButton.isVisible({ timeout: 5000 }).catch(() => false)) {
          await closeButton.click();
        }
      }

      await expect(this.page).toHaveURL("/products");
    });
  }

  async chooseMenItem(): Promise<void> {
    await allure.step("Open Men's T-Shirts", async () => {
      await this.category.open(" Men");
      await this.category.select("Tshirts");
    });
  }

  async addItemToCart(productName: string): Promise<void> {
    await allure.step("Add Item to Cart", async () => {
      const product = new ProductCard(this.page, productName);

      await product.addToCart();
      await this.addToCart.continueShopping();
    });
  }
}
