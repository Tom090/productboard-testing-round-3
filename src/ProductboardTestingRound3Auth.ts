import { TokenOperationHandlerAuth } from "@trayio/cdk-dsl/connector/operation/OperationHandler";

export type UserAuth = {
  access_token: string, //you can call this property anything e.g. token, auth_token etc.
};

export type AppAuth = {};

export type ProductboardTestingRound3Auth = TokenOperationHandlerAuth<UserAuth, AppAuth>;