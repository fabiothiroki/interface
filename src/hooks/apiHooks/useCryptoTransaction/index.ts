import cryptoTransactionApi from "services/api/cryptoTransactionsApi";
import { TransactionStatus } from "types/enums/TransactionStatus";

function useCryptoTransaction() {
  async function createTransaction(
    transactionHash: string,
    amount: string,
    email: string,
  ) {
    const { data: transaction } = await cryptoTransactionApi.postTransaction(
      transactionHash,
      amount,
      email,
    );

    return transaction;
  }

  async function updateTransactionStatus(
    transactionHash: string,
    status: TransactionStatus,
  ) {
    const { data: transaction } =
      await cryptoTransactionApi.putTransactionStatus(transactionHash, status);

    return transaction;
  }

  return {
    createTransaction,
    updateTransactionStatus,
  };
}

export default useCryptoTransaction;
