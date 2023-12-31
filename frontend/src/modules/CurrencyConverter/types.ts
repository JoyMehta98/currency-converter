export interface CurrencyResponse {
  id: number;
  name: string;
  symbol: string;
  sign: string;
}

export interface CryptoCurrencyResponse {
  id: number;
  name: string;
  symbol: string;
  slug: string;
}

export interface PriceConversionBody {
  id: string;
  amount: number;
  convert_id: string;
}

interface PriceQuote {
  price: number;
  last_updated: string;
}

export interface PriceConversionResponse {
  id: number;
  name: string;
  symbol: string;
  slug: string;
  amount: number;
  last_updated: string;
  quote: {
    [symbol: string]: PriceQuote;
  };
}
