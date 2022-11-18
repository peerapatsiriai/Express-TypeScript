import Express, { Request, Response } from "express";
import { TypedRequestQuery, TypedRequestBody } from "../Models/Request.type";
import { UserLogin, User } from "../Models/User.type";

export function Greeting(req: Express.Request, res: Express.Response) {
    res.status(200).json({ data: "Hell Welcome To My API" });
}

export function Requestquery(req: TypedRequestQuery<User>,res: Express.Response) {
    const id = req.query;
    res.status(200).json({ ID: id });
}

export function RequestParams(req: Express.Request, res: Express.Response) {
    const id = req.params.id;
    res.status(200).json({ ID: id });
}

export function Login(req: TypedRequestBody<UserLogin>, res: Express.Response) {
    const { Username, Password } = req.body;
    if (Username === "Pee" && Password === "123") {
        res.status(200).json("Login Success");
        return;
    }
    res.status(200).json("Username or Password in wrog");
}
