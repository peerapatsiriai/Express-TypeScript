import { Query } from "express-serve-static-core";

export interface TypedRequestQuery<T extends Query> extends Express.Request {
  query: T;
}

export interface TypedRequestBody<T extends Query> extends Express.Request {
  body: T;
}
