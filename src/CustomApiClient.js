import {ApiClient} from "./openapi-generated/src";

export class CustomApiClient extends ApiClient {

  constructor(authorizationToken) {
    super();
    this.defaultHeaders = {
    };
    this.authentications['Authorization']['apiKeyPrefix'] = 'Token:';
    if (authorizationToken) {
      this.authentications['Authorization']['apiKey'] = authorizationToken;
    }
  }
}
