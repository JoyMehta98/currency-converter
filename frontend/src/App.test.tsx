import { render, screen } from "@testing-library/react";
import { App } from "App";

jest.mock("modules/CurrencyConverter", () => ({
  __esModule: true,
  CurrencyConverter: () => <div data-testid="converter" />,
}));

describe("App", () => {
  it("renders app", () => {
    render(<App />);

    expect(screen.getByTestId("app")).toBeInTheDocument();
    expect(true).toBe(true);
  });
});
