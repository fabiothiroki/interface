import { useMemo } from "react";
import { Web3Provider } from "@ethersproject/providers";

export function useProvider() {
  return useMemo(() => {
    const provider = new Web3Provider(window.ethereum, "any");

    return provider;
  }, [window.ethereum]);
}
