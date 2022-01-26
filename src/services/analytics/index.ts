import {
  logEvent as logAnalyticsEvent,
  setUserId as setAnalyticsUserId,
  CustomParams,
  setUserProperties as setAnalyticsUserProperties,
} from "@firebase/analytics";
import { analyticsInstance } from "services/index";
import { logError } from "../crashReport";

interface EventParams {
  [key: string]: string | number | undefined;
}

export function convertParamsToString(params: EventParams): EventParams {
  const convertedParams = params;

  Object.keys(params).forEach((key) => {
    convertedParams[key] = params[key] ? params[key]?.toString() : "";
  });

  return convertedParams;
}

export class EventNameTooLongError extends Error {}

export function logEvent(eventName: string, params?: EventParams): void {
  try {
    if (eventName.length > 32) {
      throw new EventNameTooLongError();
    } else if (process.env.NODE_ENV === "production") {
      const convertedParams = params
        ? convertParamsToString(params)
        : undefined;

      logAnalyticsEvent(analyticsInstance, eventName, convertedParams);
    }
  } catch (error) {
    if (!(error instanceof EventNameTooLongError)) {
      logError(error, "Error sending event to analytics", { params });
    }
  }
}

export function setUserProperties(properties: CustomParams): void {
  try {
    setAnalyticsUserProperties(analyticsInstance, properties);
  } catch (error) {
    logError(error, "Error sending properties to analytics");
  }
}

export function setUserId(userId: number): void {
  setAnalyticsUserId(analyticsInstance, userId.toString());
}
