import { getAddress } from "@ethersproject/address";
import { AddressZero } from "@ethersproject/constants";
import { Contract } from "@ethersproject/contracts";

export function isAddress(value: any): string | false {
  try {
    return getAddress(value);
  } catch {
    return false;
  }
}

export function getContract(address: string, ABI: any): Contract {
  if (!isAddress(address) || address === AddressZero) {
    throw Error(`Invalid 'address' parameter '${address}'.`);
  }

  return new Contract(address, ABI);
}
