import { AxiosResponse } from "axios";
import { TransactionStatus } from "types/enums/TransactionStatus";
import { apiPost, apiPut } from "..";

const cryptoTransactionApi = {
  postTransaction: (
    hash: string,
    walletAddress: string,
    amount: number,
    status: TransactionStatus
  ): Promise<AxiosResponse<any>> =>
    apiPost("payments/cryptocurrency", { hash, walletAddress, amount, status }),
  
  putTransactionStatus: (
    hash: string,
    status: TransactionStatus
  ): Promise<AxiosResponse<any>> =>
    apiPut("payments/cryptocurrency", { hash, status })
};

export default cryptoTransactionApi;
