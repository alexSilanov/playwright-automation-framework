import { test } from "../src/helpers/fixtures/app.fixture";
import * as allure from "allure-js-commons";
import { RegistrationBuilderUser } from "../src/helpers/builders/RegistrationUserBuilder";
import { setAllureMetadata } from "../src/helpers/reporting/allure.helper";

test.describe("Web Interface Tests", { tag: "@E2E" }, () => {
  test.beforeEach(async () => {
    await allure.owner("Alexander Silanov");
    await allure.parentSuite("Web interface");
    await allure.suite("Essential features");
  });

  test(
    "should register a new user",
    { tag: ["@Smoke", "@Positive"] },
    async ({ app }) => {
      const user = new RegistrationBuilderUser().build();

      await setAllureMetadata("Register a new user", "Registration");

      await app.openLoginPage();
      await app.signUpPage.signUpUser(user);
      await app.registration.register(user);
      await app.registrationConfirtmation.checkSuccessfulRegistration();
      await app.deleteAcc.deleteAccount();
    },
  );

  test(
    "should log in with valid credentials",
    { tag: ["@Smoke", "@Positive"] },
    async ({ app }) => {
      await setAllureMetadata("Login with valid credentials", "Login");

      await app.openLoginPage();
      await app.login.loginRegisteredUser();
      await app.logout.logoutUser();
    },
  );

  test(
    "should reject invalid credentials",
    { tag: ["@Regression", "@Negative"] },
    async ({ app }) => {
      await setAllureMetadata("Reject invalid credentials", "Authentication");

      await app.openLoginPage();
      await app.login.loginWithInvalidCredentials();
    },
  );

  test(
    "should purchase a men's T-shirt",
    { tag: ["@Regression", "@Positive"] },
    async ({ app }) => {
      await setAllureMetadata("Buy men's T-shirt", "Products");

      await app.openLoginPage();
      await app.login.loginRegisteredUser();
      await app.product.openProductsPage();
      await app.product.chooseMenItem();
      await app.product.addItemToCart("Men Tshirt");
      await app.cart.openCart();
      await app.cart.shouldContainProduct();
      await app.cart.proceedToCheckout();
      await app.checkout.placeOrder();
      await app.payment.makePayment();
    },
  );
});
