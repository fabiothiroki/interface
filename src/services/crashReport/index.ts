import * as Sentry from "@sentry/react";

export function logError(
  error: any,
  customMessage?: string,
  context: Record<string, unknown> = {},
): void {
  if (process.env.NODE_ENV !== "production") {
    return;
  }

  Sentry.setTags({
    errorMessage: error.message,
    customMessage: customMessage || "",
  });

  Sentry.captureException(error, {
    contexts: { contextParams: context },
  });
}
