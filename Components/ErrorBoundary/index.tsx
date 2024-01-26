import {Component, ErrorInfo, ReactNode} from "react";
import React from "react";
interface StateType {
  hasError: boolean;
}

interface PropsType {
  children: ReactNode;
}

class ErrorBoundary extends Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);
    this.state = {hasError: false};
  }

  public static getDerivedStateFromError(error: string): {
    hasError: boolean;
    error: string;
  } {
    return {hasError: true, error};
  }

  public static componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error("error", error);
    console.error("errorInfo", errorInfo);
  }
  public render(): ReactNode {
    const {hasError} = this.state;
    const {children} = this.props;

    return !hasError ? children : <div>ERROR</div>;
  }
}

export default ErrorBoundary;
