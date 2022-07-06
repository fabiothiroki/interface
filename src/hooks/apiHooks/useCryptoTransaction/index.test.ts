import { renderHook } from "@testing-library/react-hooks";
import cryptoTransactionApi from "services/api/cryptoTransactionsApi";
import { TransactionStatus } from "types/enums/TransactionStatus";
import useCryptoTransaction from ".";

describe("useCryptoTransaction", () => {
  let hook: ReturnType<typeof useCryptoTransaction>;

  const testHash = "0xAAAA";
  const testAmount = '5.00';
  const testEmail = 'user@ribon.io';

  const transactionData = [ testHash, testAmount, testEmail ];

  beforeEach(() => {
    const { result } = renderHook(() => useCryptoTransaction());
    hook = result.current;
  });
  
  describe("#createTransaction", () => {
    beforeEach(() => {
      cryptoTransactionApi.postTransaction = jest.fn(() => ({ transactionData } as any));
    });

    it("calls the usersApi searchUser with correct params", () => {
      hook.createTransaction(testHash, testAmount, testEmail);

      expect(cryptoTransactionApi.postTransaction).toHaveBeenCalledWith(...transactionData);
    });
  });

  describe("#updateTransactionStatus", () => {
    beforeEach(() => {
      cryptoTransactionApi.putTransactionStatus = jest.fn(() => ({ transactionData } as any));
    });

    it("calls the usersApi createUser with correct params", () => {
      hook.updateTransactionStatus(testHash, TransactionStatus.SUCCESS);

      expect(cryptoTransactionApi.putTransactionStatus).toHaveBeenCalledWith(testHash, TransactionStatus.SUCCESS);
    });
  });
});
