import { useCallback, useState } from "react";

const networks = [
  {
    chainId: 0x13881,
    rpcUrls: ["https://rpc-mumbai.maticvigil.com"],
    chainName: "Mumbai Testnet",
  },
];
declare let window: any;

export function useNetwork() {
  const [currentNetworkId, setCurrentNetworkId] = useState<number>();

  const getCurrentNetworkId = useCallback(async () => {
    try {
      const chainId = await window.ethereum?.request({ method: "eth_chainId" });
      setCurrentNetworkId(chainId);
    } catch (e) {
      console.log(e);
    }
  }, []);

  function isValidNetwork(networkId?: number) {
    if (!networkId) return false;

    const networksChainIds = networks.map((network) => network.chainId);
    return networksChainIds.includes(Number(networkId));
  }

  return {
    currentNetworkId,
    getCurrentNetworkId,
    isValidNetwork,
  };
}
