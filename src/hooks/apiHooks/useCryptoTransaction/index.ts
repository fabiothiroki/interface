import cryptoTransactionApi from "services/api/cryptoTransactionsApi";
import { TransactionStatus } from "types/enums/TransactionStatus";

function useCryptoTransaction() {
  async function createTransaction(
    hash: string,
    walletAddress: string,
    contractAddress: string,
    amount: number,
    status: TransactionStatus,
  ) {
    const { data: transaction } = await cryptoTransactionApi.postTransaction(
      hash,
      walletAddress,
      contractAddress,
      amount,
      status,
    );

    return transaction;
  }

  async function updateTransactionStatus(
    hash: string,
    status: TransactionStatus,
  ) {
    const { data: transaction } =
      await cryptoTransactionApi.putTransactionStatus(hash, status);

    return transaction;
  }

  return {
    createTransaction,
    updateTransactionStatus,
  };
}

export default useCryptoTransaction;
