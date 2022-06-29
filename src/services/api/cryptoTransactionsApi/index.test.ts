import { TransactionStatus } from "types/enums/TransactionStatus";
import cryptoTransactionApi from ".";
import api from "..";

describe("cryptoTransacrionApi", () => {
  describe("#postTransacrion", () => {
    beforeEach(() => {
      api.post = jest.fn();
    });

    it("expects to send a get request with the correct info: url, params and headers", () => {
      cryptoTransactionApi.postTransaction("0xAAAA", "0xBBBB", 100, TransactionStatus.PROCESSING);

      expect(api.post).toHaveBeenCalledWith("/api/v1/payments/cryptocurrency", {
        hash: "0xAAAA",
        walletAddress: "0xBBBB",
        amount: 100,
        status: TransactionStatus.PROCESSING
      });
    });
  });

  describe("#putTransacrion", () => {
    beforeEach(() => {
      api.put = jest.fn();
    });

    it("expects to send a get request with the correct info: url, params and headers", () => {
      cryptoTransactionApi.putTransactionStatus("0xCCCC", TransactionStatus.SUCCESS);

      expect(api.put).toHaveBeenCalledWith("/api/v1/payments/cryptocurrency", {
        hash: "0xCCCC",
        status: TransactionStatus.SUCCESS
      });
    });
  });
});
