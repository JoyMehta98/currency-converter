import { ErrorBoundary } from "modules/ErrorBoundary";
import { CurrencyConverter } from "modules/CurrencyConverter";

export const App = () => (
  <ErrorBoundary>
    <div className="flex items-center flex-col">
      <CurrencyConverter />
    </div>
  </ErrorBoundary>
);
