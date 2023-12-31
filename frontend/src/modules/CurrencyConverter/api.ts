import { getRequest } from "services/axios";
import { CryptoCurrencyResponse, CurrencyResponse } from "./types";

export const getCurrencies = async () =>
  getRequest<{ data: CurrencyResponse[] }>({ url: "currencies/supported" });

export const getCryptoCurrencies = async () =>
  getRequest<{ data: CryptoCurrencyResponse[] }>({
    url: "currencies/crypto",
  });
