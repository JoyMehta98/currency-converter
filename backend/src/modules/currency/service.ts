import axios from "axios";
import { appConfig } from "config/app";

export const axiosInstance = axios.create({
  baseURL: appConfig.coinMarketApi,
  headers: {
    ["X-CMC_PRO_API_KEY"]: appConfig.coinMarketApiKey,
  },
});

export const getCryptoCurrencies = async () => {
  const response = await axiosInstance.get("v1/cryptocurrency/listings/new");

  return response.data;
};

export const getSupportedCurrencies = async () => {
  const response = await axiosInstance.get("v1/fiat/map");

  return response.data;
};

export const getConvertedPrice = async (params) => {
  const response = await axiosInstance.get("v2/tools/price-conversion", {
    params,
  });

  return response.data;
};
