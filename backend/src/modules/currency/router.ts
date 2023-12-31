import { Router } from "express";
import { getCryptoCurrencies, getSupportedCurrencies } from "./controller";

const currencyRouter = Router();

currencyRouter.get("/crypto", getCryptoCurrencies);
currencyRouter.get("/supported", getSupportedCurrencies);

export { currencyRouter };
