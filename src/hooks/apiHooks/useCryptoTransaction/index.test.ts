import { renderHook } from "@testing-library/react-hooks";
import cryptoTransactionApi from "services/api/cryptoTransactionsApi";
import { TransactionStatus } from "types/enums/TransactionStatus";
import useCryptoTransaction from ".";

describe("useCryptoTransaction", () => {
  let hook: ReturnType<typeof useCryptoTransaction>;

  const testHash = "0xAAAA";
  const testWalletAddress = "0xBBBB";
  const testContractAddress = "0xCCCC";
  const testAmount = 100;

  const transactionData = [ testHash, testWalletAddress, testContractAddress, testAmount ];

  beforeEach(() => {
    const { result } = renderHook(() => useCryptoTransaction());
    hook = result.current;
  });
  
  describe("#createTransaction", () => {
    beforeEach(() => {
      cryptoTransactionApi.postTransaction = jest.fn(() => ({ transactionData } as any));
    });

    it("calls the usersApi searchUser with correct params", () => {
      hook.createTransaction(testHash, testWalletAddress, testContractAddress, testAmount, TransactionStatus.PROCESSING);

      expect(cryptoTransactionApi.postTransaction).toHaveBeenCalledWith(...transactionData, TransactionStatus.PROCESSING);
    });
  });

  describe("#createUser", () => {
    beforeEach(() => {
      cryptoTransactionApi.putTransactionStatus = jest.fn(() => ({ transactionData } as any));
    });

    it("calls the usersApi createUser with correct params", () => {
      hook.updateTransactionStatus(testHash, TransactionStatus.SUCCESS);

      expect(cryptoTransactionApi.putTransactionStatus).toHaveBeenCalledWith(testHash, TransactionStatus.SUCCESS);
    });
  });

});
