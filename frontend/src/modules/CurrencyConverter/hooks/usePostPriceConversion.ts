import { useCallback, useState } from "react";
import { postRequestCryptoCurrencies } from "../api";
import { PriceConversionBody } from "../types";

export const usePostPriceConversion = () => {
  const [result, setResult] = useState<number>();

  const getPrice = useCallback(async (body: PriceConversionBody) => {
    const data = await postRequestCryptoCurrencies(body);

    setResult(data.data.quote[body.convert_id].price);
  }, []);

  return {
    result,
    getPrice,
  };
};
