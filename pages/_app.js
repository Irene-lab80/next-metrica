import "../styles/globals.css";
import {ErrorBoundary} from "next/dist/client/components/error-boundary";

export default function App({Component, pageProps}) {
  return (
    <ErrorBoundary>
      <Component {...pageProps} />
    </ErrorBoundary>
  );
}
