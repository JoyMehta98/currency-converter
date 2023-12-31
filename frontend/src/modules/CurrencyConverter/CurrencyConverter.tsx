import { useEffect, useState } from "react";
import { useGetCryptoCurrencies } from "./hooks/useGetCryptoCurrencies";
import { useGetCurrencies } from "./hooks/useGetCurrencies";
import { Typography } from "uicore/Typography";
import { Select } from "uicore/Select";
import { Button } from "uicore/Button";
import { Input } from "uicore/Input";
import { usePostPriceConversion } from "./hooks/usePostPriceConversion";
import { Loader } from "uicore/Loader";

interface ConverterFormState {
  id: string | undefined;
  convert_id: string | undefined;
  amount: number;
}

export const CurrencyConverter = () => {
  const { isCurrenciesLoading, defaultCurrency, currencyOptions } =
    useGetCurrencies();
  const { isCryptoLoading, cryptoOptions } = useGetCryptoCurrencies();
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
    return <Loader />;
  }

  const buttonDisabled =
    !formState.convert_id || !formState.id || formState.amount <= 0;

  const handleSubmit = () => {
    if (!buttonDisabled) {
      // @ts-expect-error already validated
      getPrice(formState);
    }
  };

  return (
    <div className="w-[400px] h-[400px] absolute top-0 bottom-0 right-0 left-0 m-auto">
      <Typography variant="h3">Crypto Currency Converter</Typography>
      <div className="flex flex-col gap-5 pt-10">
        <Select
          label="From"
          size="md"
          variant="static"
          options={cryptoOptions}
          name="id"
          value={formState.id}
          onChange={(e) => handleFormState("id", e as string)}
        />
        <Select
          label="To"
          size="md"
          variant="static"
          options={currencyOptions}
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
            onClick={handleSubmit}
            disabled={buttonDisabled}
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
