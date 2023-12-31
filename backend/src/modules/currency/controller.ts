import { NextFunction, Request, Response } from "express";
import * as CurrencyService from "./service";

export const getCryptoCurrencies = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await CurrencyService.getCryptoCurrencies();

    res.status(200).json(data);
  } catch (e) {
    console.error(`Error while fetching crypto currencies: ${e}`);
    next(e);
  }
};

export const getSupportedCurrencies = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await CurrencyService.getSupportedCurrencies();

    res.status(200).json(data);
  } catch (e) {
    console.error(`Error while fetching supported currencies: ${e}`);
    next(e);
  }
};

export const getConvertedPrice = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await CurrencyService.getConvertedPrice(req.body);

    res.status(200).json(data);
  } catch (e) {
    console.error(`Error while fetching supported currencies: ${e}`);
    next(e);
  }
};
