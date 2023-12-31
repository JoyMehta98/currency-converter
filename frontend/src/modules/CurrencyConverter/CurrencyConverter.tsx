import { useEffect, useState } from "react";
import { useGetCryptoCurrencies } from "./hooks/useGetCryptoCurrencies";
import { useGetCurrencies } from "./hooks/useGetCurrencies";
import { Typography } from "uicore/Typography";
import { Select } from "uicore/Select";
import { Button } from "uicore/Button";
import { Input } from "uicore/Input";
import { usePostPriceConversion } from "./hooks/usePostPriceConversion";

interface ConverterFormState {
  id: string | undefined;
  convert_id: string | undefined;
  amount: number;
}

export const CurrencyConverter = () => {
  const { isCurrenciesLoading, currencies, defaultCurrency } =
    useGetCurrencies();
  const { isCryptoLoading, cryptos } = useGetCryptoCurrencies();
  const [formState, setFormState] = useState<ConverterFormState>({
    id: undefined,
    convert_id: undefined,
    amount: 0,
  });

  const { getPrice, result } = usePostPriceConversion();

  const handleFormState = (name: string, value: string) => {
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  useEffect(() => {
    if (defaultCurrency) {
      setFormState({
        ...formState,
        convert_id: String(defaultCurrency.id),
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultCurrency]);

  if (isCurrenciesLoading || isCryptoLoading) {
    return "Loading....";
  }

  const handleSubmit = () => {
    // @ts-expect-error cdjc
    getPrice(formState);
  };

  return (
    <div className="w-[400px]">
      <Typography variant="h3">Crypto Currency Converter</Typography>
      <div className="flex flex-col gap-5 pt-10">
        <Select
          label="From"
          size="md"
          variant="static"
          options={cryptos.map((crypto) => ({
            label: crypto.name,
            value: String(crypto.id),
          }))}
          name="id"
          value={formState.id}
          onChange={(e) => handleFormState("id", e as string)}
        />

        <Select
          label="To"
          size="md"
          variant="static"
          options={currencies.map((currency) => ({
            label: `${currency.name} (${currency.symbol})`,
            value: String(currency.id),
          }))}
          name="convert_id"
          value={formState.convert_id}
          onChange={(e) => handleFormState("convert_id", e as string)}
        />
        <Input
          label="Amount"
          type="number"
          variant="static"
          name="amount"
          size="lg"
          value={formState.amount}
          onChange={(e) => handleFormState("amount", e.target.value)}
        />
        <div className="flex justify-center">
          <Button
            id="convert"
            size="md"
            className="w-[100px]"
            onClick={handleSubmit}
          >
            Convert
          </Button>
        </div>
      </div>

      {result && (
        <div>
          <Typography variant="lead">{result}</Typography>
        </div>
      )}
    </div>
  );
};
