import { APIRequest, APIRequestContext } from "@playwright/test";

export interface ServiceOptions {
  URL?: string;
  request: APIRequestContext;
}
