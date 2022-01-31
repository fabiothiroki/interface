import { Contract } from "@ethersproject/contracts";
import { useMemo } from "react";
import { getContract } from "utils/contractUtils";
import { Web3Provider } from "@ethersproject/providers";
import { logError } from "../../services/crashReport";

type Props = {
  address: string;
  ABI: any;
};

export function useContract<T extends Contract = Contract>({
  address,
  ABI,
}: Props): T | null {
  return useMemo(() => {
    if (!address || !ABI) return null;
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new Web3Provider(ethereum);
        const signer = provider.getSigner();
        return getContract(address, ABI, signer);
      }

      return null;
    } catch (error) {
      logError(error);
      return null;
    }
  }, [address, ABI]) as T;
}
