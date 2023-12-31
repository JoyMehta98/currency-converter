import axios from "axios";
import { appConfig } from "config/app";

export const axiosInstance = axios.create({
  baseURL: appConfig.coinMarketApi,
  headers: {
    ["X-CMC_PRO_API_KEY"]: appConfig.coinMarketApiKey,
  },
});

export const getCryptoCurrencies = async () => {
  const response = await axiosInstance.get("cryptocurrency/listings/new");

  return response.data;
};

export const getSupportedCurrencies = async () => {
  const response = await axiosInstance.get("fiat/map");

  return response.data;
};
