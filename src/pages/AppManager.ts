import { Page } from "@playwright/test";
import { HomePage } from "./home.page";
import { SignUpPage } from "./signup.page";
import { UserDataConsentPage } from "./useDataConsent.page";
import { RegistrationPage } from "./registration.page";
import { DeleteAccountPage } from "./deleteAccount.page";
import { RegistrationConfirmationPage } from "./registrationConfirmation.page";
import { LoginPage } from "./login.page";
import { LogoutPage } from "./logout.page";
import { ProductPage } from "./product.page";
import { CartPage } from "./cart.page";
import { PaymentPage } from "./payment.page";
import { CheckoutPage } from "./checkout.page";

export class AppManager {
  readonly homePage: HomePage;
  readonly signUpPage: SignUpPage;
  readonly useDadaConsentPage: UserDataConsentPage;
  readonly registration: RegistrationPage;
  readonly registrationConfirtmation: RegistrationConfirmationPage;
  readonly deleteAcc: DeleteAccountPage;
  readonly login: LoginPage;
  readonly logout: LogoutPage;
  readonly product: ProductPage;
  readonly cart: CartPage;
  readonly payment: PaymentPage;
  readonly checkout: CheckoutPage;

  constructor(page: Page) {
    this.homePage = new HomePage(page);
    this.signUpPage = new SignUpPage(page);
    this.useDadaConsentPage = new UserDataConsentPage(page);
    this.registration = new RegistrationPage(page);
    this.registrationConfirtmation = new RegistrationConfirmationPage(page);
    this.deleteAcc = new DeleteAccountPage(page);
    this.login = new LoginPage(page);
    this.logout = new LogoutPage(page);
    this.product = new ProductPage(page);
    this.cart = new CartPage(page);
    this.payment = new PaymentPage(page);
    this.checkout = new CheckoutPage(page);
  }

  async openLoginPage(): Promise<void> {
    await this.homePage.openHomePage();
    await this.useDadaConsentPage.acceptConsentIfVisible();
    await this.signUpPage.openSignUpPage();
  }
}
