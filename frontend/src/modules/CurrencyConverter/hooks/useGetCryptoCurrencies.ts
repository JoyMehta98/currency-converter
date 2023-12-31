import { useEffect, useMemo, useState } from "react";
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

  const cryptoOptions = useMemo(
    () =>
      cryptos.map((crypto) => ({
        label: `${crypto.name} (${crypto.symbol})`,
        value: String(crypto.id),
      })),
    [cryptos]
  );

  return {
    cryptoOptions,
    isCryptoLoading: isLoading,
  };
};
