import {
  createContext,
  useContext,
  useMemo,
  useCallback,
  useEffect,
  useState,
} from "react";
import { networks } from "config/networks";
import { logError } from "services/crashReport";
import { useProvider } from "hooks/useProvider";

export interface INetworkContext {
  isValidNetwork: boolean;
  changeNetwork: () => void;
  currentNetwork: {
    chainName: string;
    ribonContractAddress: string;
    donationTokenContractAddress: string;
    chainId: number;
    rpcUrls: string;
    nodeUrl: string;
    symbolName: string;
    currencyName: string;
    blockExplorerUrls: string;
  };
  getCurrentNetwork: () => void;
}

export type Props = {
  children: JSX.Element[] | JSX.Element;
};

export const NetworkContext = createContext<INetworkContext>(
  {} as INetworkContext,
);

function NetworkProvider({ children }: Props) {
  const [currentNetwork, setCurrentNetwork] = useState(networks[0]);
  const [isValidNetwork, setIsValidNetwork] = useState(false);
  const provider = useProvider();

  const getCurrentNetwork = useCallback(async () => {
    try {
      const providerNetwork = await provider?.getNetwork();
      if (providerNetwork) {
        const permittedNetworks = networks.filter(
          (network) => providerNetwork.chainId === network.chainId,
        );
        if (permittedNetworks.length > 0) {
          setCurrentNetwork(permittedNetworks[0]);
          setIsValidNetwork(true);
        }
      }
    } catch (e) {
      logError(e);
    }
  }, [provider]);

  const changeNetwork = () => {
    const defaultNetwork = networks[0];
    window.ethereum.request({
      method: "wallet_addEthereumChain",
      params: [
        {
          chainId: defaultNetwork.chainId,
          rpcUrls: [defaultNetwork.rpcUrls],
          chainName: defaultNetwork.chainName,
          nativeCurrency: {
            name: defaultNetwork.currencyName,
            symbol: defaultNetwork.symbolName,
            decimals: 18,
          },
          blockExplorerUrls: [defaultNetwork.blockExplorerUrls],
        },
      ],
    });
  };

  useEffect(() => {
    getCurrentNetwork();
  }, [getCurrentNetwork, currentNetwork]);

  useEffect(() => {
    window.ethereum?.on("chainChanged", getCurrentNetwork);
  }, []);

  const networkObject: INetworkContext = useMemo(
    () => ({
      currentNetwork,
      isValidNetwork,
      changeNetwork,
      getCurrentNetwork,
    }),
    [currentNetwork, isValidNetwork, changeNetwork],
  );

  return (
    <NetworkContext.Provider value={networkObject}>
      {children}
    </NetworkContext.Provider>
  );
}

export default NetworkProvider;

export const useNetworkContext = () => {
  const context = useContext(NetworkContext);

  if (!context) {
    throw new Error("useNetwork must be used within NetworkProvider");
  }

  return context;
};
