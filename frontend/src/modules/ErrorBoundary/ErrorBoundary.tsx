import { Component, type ReactNode } from "react";

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends Component<AnyType, ErrorBoundaryState> {
  state: ErrorBoundaryState = {
    hasError: false,
  };

  componentDidCatch() {
    this.setState((_state) => ({
      hasError: true,
    }));
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return "Something Went Wrong";
    }

    return this.props.children;
  }
}
