import { useEffect, useMemo, useState } from "react";
import { getCurrencies } from "../api";
import { CurrencyResponse } from "../types";

export const useGetCurrencies = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [currencies, setCurrencies] = useState<CurrencyResponse[]>([]);

  useEffect(() => {
    const call = async () => {
      try {
        const { data } = await getCurrencies();
        setCurrencies(data);
      } catch (e) {
        console.error(e);
      }
      setIsLoading(false);
    };

    setIsLoading(true);
    call();
  }, []);

  const defaultCurrency = useMemo(
    () => currencies.find((currency) => currency.sign === "$"),
    [currencies]
  );

  const currencyOptions = useMemo(
    () =>
      currencies.map((currency) => ({
        label: `${currency.name} (${currency.symbol})`,
        value: String(currency.id),
      })),
    [currencies]
  );

  return {
    currencyOptions,
    defaultCurrency,
    isCurrenciesLoading: isLoading,
  };
};
