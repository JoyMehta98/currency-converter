import { config } from "dotenv";

config();

export const appConfig = {
  port: process.env.PORT,
  nodeEnv: process.env.NODE_ENV,
  coinMarketApi: process.env.COIN_MARKET_API_URL,
  coinMarketApiKey: process.env.COIN_MARKET_API_KEY,
};
