import { ErrorBoundary } from "modules/ErrorBoundary";
import { CurrencyConverter } from "modules/CurrencyConverter";

export const App = () => (
  <ErrorBoundary>
    <div className="flex items-center flex-col" data-testid="app">
      <CurrencyConverter />
    </div>
  </ErrorBoundary>
);
