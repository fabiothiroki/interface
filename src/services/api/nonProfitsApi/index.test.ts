import nonProfitsApi from ".";
import api from "..";

describe("nonProfitsApi", () => {
  describe("#getNonProfits", () => {
    beforeEach(() => {
      // If it's a different method just change it to: post, put, delete, etc.
      api.get = jest.fn();
    });

    it("expects to send a get request with the correct info: url, params and headers", () => {
      nonProfitsApi.getNonProfits();

      expect(api.get).toHaveBeenCalledWith("/api/v1/non_profits");
    });
  });
});
