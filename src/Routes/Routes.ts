import Express from "express";
import { TypedRequestQuery, TypedRequestBody } from "../Models/Request.type";
import { UserLogin, User } from "../Models/User.type";
import * as UserController from "../Controllers/UserController";

const Route = Express.Router();

Route.get("/", UserController.Greeting);

Route.get("/user", UserController.Requestquery);

Route.get("/user/:id", UserController.RequestParams);

Route.post("/login", UserController.Login);

export default Route;
