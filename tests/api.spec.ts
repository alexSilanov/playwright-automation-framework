import { ApiClient } from "../src/services/apiClient";
import { expect, test } from "@playwright/test";
import { setApiAllureMetadata } from "../src/helpers/reporting/allure.helper";

test.describe("API Tests", () => {
  let client: ApiClient;

  test.beforeEach(async ({ request }) => {
    client = new ApiClient({ request });
  });

  test(
    "should return all products successfully",
    { tag: ["@API", "@Smoke", "@Positive"] },
    async () => {
      await setApiAllureMetadata("Get All Products List", "Products");

      const response = await client.brands.getBrandsList();

      expect(response.ok()).toBeTruthy();
    },
  );

  test(
    "should reject unsupported PUT request for products",
    { tag: ["@API", "@Regression", "@Negative"] },
    async () => {
      await setApiAllureMetadata(
        "Reject Unsupported PUT Request for Products",
        "Products",
      );

      const response = await client.brands.createBrandsList();
      const body = await response.json();

      expect(response.status()).toBe(200);
      expect(body.responseCode).toBe(405);
      expect(body.message).toBe("This request method is not supported.");
    },
  );

  test(
    "should verify login with valid credentials",
    { tag: ["@API", "@Smoke", "@Positive"] },
    async () => {
      await setApiAllureMetadata(
        "Verify Login with Valid Credentials",
        "Login",
      );

      const response = await client.login.verifyRegisteredUser();
      const body = await response.json();

      expect(response.status()).toBe(200);
      expect(body.message).toBe("User exists!");
    },
  );

  test(
    "should reject login without email parameter",
    { tag: ["@API", "@Regression", "@Negative"] },
    async () => {
      await setApiAllureMetadata(
        "Reject Login Without Email Parameter",
        "Login",
      );

      const response = await client.login.verifyLoginPasswordOnly();
      const body = await response.json();

      expect(body.responseCode).toBe(400);
      expect(body.message).toBe(
        "Bad request, email or password parameter is missing in POST request.",
      );
    },
  );

  test(
    "should reject unsupported DELETE request for login verification",
    { tag: ["@API", "@Regression", "@Negative"] },
    async () => {
      await setApiAllureMetadata(
        "Reject Unsupported DELETE Request for Login Verification",
        "Login",
      );

      const response = await client.login.deleteLoginVerification();
      const body = await response.json();

      expect(body.responseCode).toBe(405);
      expect(body.message).toBe("This request method is not supported.");
    },
  );

  test(
    "should create, update and delete a user",
    { tag: ["@API", "@Regression", "@Positive"] },
    async () => {
      await setApiAllureMetadata("Create, Update and Delete User", "User");

      let response = await client.user.createAccount();
      let body = await response.json();

      expect(response.status()).toBe(200);
      expect(body.responseCode).toBe(201);
      expect(body.message).toBe("User created!");

      response = await client.user.updateAccount();
      body = await response.json();

      expect(response.status()).toBe(200);
      expect(body.responseCode).toBe(200);
      expect(body.message).toBe("User updated!");

      response = await client.user.deleteAccount();
      body = await response.json();

      expect(response.status()).toBe(200);
      expect(body.responseCode).toBe(200);
      expect(body.message).toBe("Account deleted!");
    },
  );
});
