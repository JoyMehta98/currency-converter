import React from "react";

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends React.Component<
  AnyType,
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = {
    hasError: false,
  };

  componentDidCatch() {
    this.setState((_state) => ({
      hasError: true,
    }));
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return "Something Went Wring";
    }

    return this.props.children;
  }
}
