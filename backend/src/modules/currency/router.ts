import { Router } from "express";
import {
  getConvertedPrice,
  getCryptoCurrencies,
  getSupportedCurrencies,
} from "./controller";

const currencyRouter = Router();

currencyRouter.get("/crypto", getCryptoCurrencies);
currencyRouter.get("/supported", getSupportedCurrencies);
currencyRouter.post("/conversion", getConvertedPrice);

export { currencyRouter };
