import express, { Express, Request, Response } from "express";
import cors from "cors";
import { currencyRouter } from "modules/currency/router";
import { appConfig } from "config/app";
// import { rateLimiter } from "middlewares/rateLimiter";

const { port, nodeEnv } = appConfig;

const app: Express = express();

app.use(cors());
app.use(express.json());

app.get("/api", (_req: Request, res: Response) => {
  res.status(200).send("App is running");
});

// app.use(rateLimiter);
app.use("/api/currencies", currencyRouter);

const server = app.listen(port, () => {
  console.log(`Server running on port ${port} in ${nodeEnv} environment`);
});

export { app as default, server };
