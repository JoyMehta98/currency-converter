import { getRequest, postRequest } from "services/axios";
import {
  CryptoCurrencyResponse,
  CurrencyResponse,
  PriceConversionBody,
  PriceConversionResponse,
} from "./types";

export const getCurrencies = async () =>
  getRequest<{ data: CurrencyResponse[] }>({ url: "currencies/supported" });

export const getCryptoCurrencies = async () =>
  getRequest<{ data: CryptoCurrencyResponse[] }>({
    url: "currencies/crypto",
  });

export const postRequestCryptoCurrencies = async (data: PriceConversionBody) =>
  postRequest<{ data: PriceConversionResponse }>({
    url: "currencies/conversion",
    data,
  });
