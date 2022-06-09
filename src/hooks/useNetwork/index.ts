import { useCallback, useEffect, useState } from "react";
import { networks } from "config/networks";
import { useProvider } from "../useProvider";


export function useNetwork() {
  const [currentNetwork, setCurrentNetwork] = useState(networks.localhost);
  const [isValidNetwork, setIsValidNetwork] = useState(false);
  const provider = useProvider();

  const getCurrentNetwork = useCallback(async () => {
    try {
      const providerNetwork = await provider?.getNetwork()
      if (providerNetwork) {
        setIsValidNetwork(false);
        Object.entries(networks).map((network) => {
          if (providerNetwork.chainId === network[1].chainId) {
            setCurrentNetwork(network[1]);
            setIsValidNetwork(true);
          }
          return null;
        });
      }
    } catch (e) {
      console.log(e);
    }
  }, [provider]);

  useEffect(() => {
    getCurrentNetwork();
  }, [getCurrentNetwork]);

  useEffect(() => {
    window.ethereum?.on("chainChanged", getCurrentNetwork);
  }, []);

  return {
    currentNetwork,
    isValidNetwork,
  };
}
