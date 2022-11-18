import Express, { Request, Response } from "express";
import http from "http";
import dotenv from "dotenv";
import Routes from "./Routes/Routes";

let app: Express.Application | undefined = undefined;

app = Express();
app.use(Express.urlencoded({ extended: true }));
dotenv.config();

app = Express();
app.use(Express.json());

app.use(Routes);

const PORT = process.env.PORT;
http.createServer(app).listen(PORT, () => {
  console.log(`\n[server]: Server is running at http://localhost:${PORT}\n`);
});
