import React from "react";
import "../styles/globals.css";
import ErrorBoundary from "../Components/ErrorBoundary";

export default function App({Component, pageProps}) {
  return (
    <ErrorBoundary>
      <Component {...pageProps} />
    </ErrorBoundary>
  );
}
