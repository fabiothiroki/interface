import { Contract } from "@ethersproject/contracts";
import { useMemo } from "react";
import { getContract } from "utils/contractUtils";

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
      return getContract(address, ABI);
    } catch (error) {
      console.error("Failed to get contract", error);
      return null;
    }
  }, [address, ABI]) as T;
}
