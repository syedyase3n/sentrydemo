import * as Sentry from "@sentry/browser";
import { BrowserTracing } from "@sentry/tracing";

export default () => {
    Sentry.init({
      dsn: "https://44db9e58e11b4ba089c6cd93ce51818c@o1286637.ingest.sentry.io/6500670",
      environment: "development",
      release: "sentry-demo@1.0.0",
      integrations: [new BrowserTracing()],
    
      // Set tracesSampleRate to 1.0 to capture 100%
      // of transactions for performance monitoring.
      // We recommend adjusting this value in production
      tracesSampleRate: 1.0,
    });
}