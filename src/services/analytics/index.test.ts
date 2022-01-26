import {
  logEvent,
  setUserProperties,
  setUserId,
  convertParamsToString,
} from ".";
import * as CrashReport from "../crashReport";

const mockAnalytics = {
  logEvent: jest.fn(),
  setUserProperties: jest.fn(),
  setUserId: jest.fn(),
  getAnalytics: jest.fn(),
};

jest.spyOn(CrashReport, "logError");
jest.resetAllMocks();

describe("logEvent", () => {
  jest.mock("@firebase/analytics", () => mockAnalytics);

  jest.mock("@firebase/app", () => ({
    initializeApp: jest.fn(),
  }));

  const eventName = "teste";

  beforeEach(() => {
    Object.defineProperty(process.env, "NODE_ENV", {
      value: "production",
      writable: true,
    });
  });

  describe("with params", () => {
    const eventParams = { param: "teste" };
    xit("sends an event to firebase", () => {
      logEvent(eventName, eventParams);
      expect(mockAnalytics.logEvent).toHaveBeenCalledWith(
        eventName,
        eventParams,
      );
    });
  });

  describe("without params", () => {
    xit("sends an event to firebase", () => {
      logEvent(eventName);
      expect(mockAnalytics.logEvent).toHaveBeenCalledWith(eventName, undefined);
    });
  });

  describe("when an error happens", () => {
    beforeEach(() => {
      mockAnalytics.logEvent.mockImplementation(() => {
        throw new Error();
      });
    });

    xit("calls logError", () => {
      logEvent(eventName);
      expect(CrashReport.logError).toHaveBeenCalled();
    });
  });
});

describe("setUserProperties", () => {
  const userProperties = { subscriber: true };
  xit("sends user properties to firebase", () => {
    setUserProperties(userProperties);
    expect(mockAnalytics.setUserProperties).toHaveBeenCalledWith(
      userProperties,
    );
  });

  describe("when an error happens", () => {
    beforeEach(() => {
      mockAnalytics.setUserProperties.mockImplementation(() => {
        throw new Error();
      });
    });

    xit("calls logError", () => {
      setUserProperties(userProperties);
      expect(CrashReport.logError).toHaveBeenCalled();
    });
  });
});

describe("#setUserId", () => {
  xit("expects to call firebase.analytics().setUserId", () => {
    const userId = 1;
    setUserId(userId);
    expect(mockAnalytics.setUserId).toHaveBeenCalledWith("1");
  });
});

describe("#convertParamsToString", () => {
  describe("when params are defined", () => {
    xit("converts the params to string", () => {
      const params = {
        id: 5,
        brand: "Brand",
      };

      const convertedParams = convertParamsToString(params);

      expect(convertedParams.id).toEqual("5");
      expect(convertedParams.brand).toEqual("Brand");
    });
  });

  describe("when there is an undefined param", () => {
    xit("converts the undefined param to an empty string", () => {
      const params = {
        id: 5,
        brand: undefined,
      };

      const convertedParams = convertParamsToString(params);

      expect(convertedParams.id).toEqual("5");
      expect(convertedParams.brand).toEqual("");
    });
  });
});
