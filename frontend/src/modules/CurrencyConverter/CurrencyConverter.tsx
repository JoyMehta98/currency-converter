import { useEffect, useState } from "react";
import { useGetCryptoCurrencies } from "./hooks/useGetCryptoCurrencies";
import { useGetCurrencies } from "./hooks/useGetCurrencies";
import { Typography } from "uicore/Typography";
import { Form } from "uicore/Form";
import { Select } from "uicore/Select";
import { Button } from "uicore/Button";
import { Input } from "uicore/Input";

interface ConverterFormState {
  crypto: string | undefined;
  currency: string | undefined;
  amount: number;
}

export const CurrencyConverter = () => {
  const { isCurrenciesLoading, currencies, defaultCurrency } =
    useGetCurrencies();
  const { isCryptoLoading, cryptos } = useGetCryptoCurrencies();
  const [formState, setFormState] = useState<ConverterFormState>({
    crypto: undefined,
    currency: undefined,
    amount: 0,
  });

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
        currency: String(defaultCurrency.id),
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultCurrency]);

  if (isCurrenciesLoading || isCryptoLoading) {
    return "Loading....";
  }

  return (
    <div className="w-[400px]">
      <Typography variant="h3">Crypto Currency Converter</Typography>
      <Form handleSubmit={() => {}} className="flex flex-col gap-5 pt-10">
        <Select
          label="From"
          size="md"
          variant="static"
          options={cryptos.map((crypto) => ({
            label: crypto.name,
            value: String(crypto.id),
          }))}
          name="crypto"
          value={formState.crypto}
          onChange={(e) => handleFormState("crypto", e as string)}
        />

        <Select
          label="To"
          size="md"
          variant="static"
          options={currencies.map((currency) => ({
            label: `${currency.name} (${currency.symbol})`,
            value: String(currency.id),
          }))}
          name="currency"
          value={formState.currency}
          onChange={(e) => handleFormState("currency", e as string)}
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
          <Button type="submit" id="convert" size="md" className="w-[100px] ">
            Convert
          </Button>
        </div>
      </Form>

      <div>
        <Typography variant="lead">Result</Typography>
      </div>
    </div>
  );
};
