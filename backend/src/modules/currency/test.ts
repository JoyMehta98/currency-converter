import request from "supertest";
import nock from "nock";
import app from "../../index";
import { appConfig } from "config/app";
import {
  mockConvertedData,
  mockCryptoData,
  mockCurrencyData,
} from "testUtils/currency";

const nockRequest = nock(appConfig.coinMarketApi);
const mockError = jest.spyOn(console, "error");

describe("Currency", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  describe("Crypto Currency", () => {
    it("returns crypto currencies", async () => {
      nockRequest.get("/v1/cryptocurrency/map?limit=100").reply(200, {
        data: mockCryptoData,
      });

      const res = await request(app).get("/api/currencies/crypto");

      expect(res.statusCode).toEqual(200);
      expect(res.body).toStrictEqual({ data: mockCryptoData });
    });

    it("show error logs when crypto currencies api called and throws an error", async () => {
      nockRequest.get("/v1/cryptocurrency/map?limit=100").reply(500);

      await request(app).get("/api/currencies/crypto");

      expect(mockError).toHaveBeenCalledTimes(1);
    });
  });

  describe("Actual Currency", () => {
    it("returns actual currencies", async () => {
      nockRequest.get("/v1/fiat/map").reply(200, {
        data: mockCurrencyData,
      });

      const res = await request(app).get("/api/currencies/supported");

      expect(res.statusCode).toEqual(200);
      expect(res.body).toStrictEqual({ data: mockCurrencyData });
    });

    it("show error logs when actual currencies api called and throws an error", async () => {
      nockRequest.get("/v1/fiat/map").reply(500);

      await request(app).get("/api/currencies/supported");

      expect(mockError).toHaveBeenCalledTimes(1);
    });
  });

  describe("Currency Conversion", () => {
    const body = {
      id: 1,
      amount: 1,
      convert_id: 2796,
    };
    it("returns currency conversion", async () => {
      nockRequest
        .get("/v2/tools/price-conversion?id=1&amount=1&convert_id=2796")
        .reply(200, {
          data: mockConvertedData,
        });

      const res = await request(app)
        .post("/api/currencies/conversion")
        .send(body);

      expect(res.statusCode).toEqual(200);
      expect(res.body).toStrictEqual({ data: mockConvertedData });
    });

    it("show error logs when currency conversion api called and throws an error", async () => {
      nockRequest
        .get("/v2/tools/price-conversion?convert_id=2796&id=1&amount=1")
        .reply(500);

      await request(app).post("/api/currencies/conversion").send(body);

      expect(mockError).toHaveBeenCalledTimes(1);
    });
  });
});
