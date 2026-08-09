import * as allure from "allure-js-commons";

export async function setAllureMetadata(name: string, feature: string) {
  await allure.displayName(name);
  await allure.tags("Web interface", "UI", "E2E", feature);
  await allure.severity("critical");
}

export async function setApiAllureMetadata(name: string, feature: string) {
  await allure.displayName(name);
  await allure.tags("API", feature);
  await allure.severity("critical");
}
