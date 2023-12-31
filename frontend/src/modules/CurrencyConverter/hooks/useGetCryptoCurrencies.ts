import { useEffect, useState } from "react";
import { getCryptoCurrencies } from "../api";
import { CryptoCurrencyResponse } from "../types";

export const useGetCryptoCurrencies = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [cryptos, setCryptos] = useState<CryptoCurrencyResponse[]>([]);

  useEffect(() => {
    const call = async () => {
      try {
        const { data } = await getCryptoCurrencies();

        setCryptos(data);
      } catch (e) {
        console.error(e);
      }
      setIsLoading(false);
    };

    setIsLoading(true);
    call();
  }, []);

  return {
    cryptos,
    isCryptoLoading: isLoading,
  };
};
