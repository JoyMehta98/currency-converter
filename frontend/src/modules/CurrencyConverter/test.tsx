import { render, screen, waitFor } from "@testing-library/react";
import { CurrencyConverter } from "./CurrencyConverter";
import { appConfig } from "config/app";
import nock from "nock";
import { mockCryptoData, mockCurrencyData } from "testUtils/currency";

const nockRequest = nock(appConfig.apiBaseUrl);
nockRequest.get("/currencies/crypto").reply(200, {
  data: mockCryptoData,
});
nockRequest.get("/currencies/supported").reply(200, {
  data: mockCurrencyData,
});

describe("CurrencyConverter", () => {
  it("renders the component", async () => {
    render(<CurrencyConverter />);

    await waitFor(() =>
      expect(screen.getByTestId("converter-form")).toBeInTheDocument()
    );
  });
});
