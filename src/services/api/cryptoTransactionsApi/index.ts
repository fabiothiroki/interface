import { AxiosResponse } from "axios";
import { TransactionStatus } from "types/enums/TransactionStatus";
import { apiPost, apiPut } from "..";

const cryptoTransactionApi = {
  postTransaction: (
    transaction_hash: string,
    amount: string,
    email: string
  ): Promise<AxiosResponse<any>> =>
    apiPost("payments/cryptocurrency", { transaction_hash, amount, email }),
  
  putTransactionStatus: (
    transaction_hash: string,
    status: TransactionStatus
  ): Promise<AxiosResponse<any>> =>
    apiPut("payments/cryptocurrency", { transaction_hash, status })
};

export default cryptoTransactionApi;
