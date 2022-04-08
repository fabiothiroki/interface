import LayoutHeader from "layouts/LayoutHeader";
import Navigation from "config/routes/Navigation";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { useWalletContext } from "contexts/walletContext";
import { getChain, onAccountChange, validChain } from "lib/walletConnector";
import WalletIcon from "assets/icons/wallet-icon.svg";
import * as S from "./styles";

export type Props = {
  children: JSX.Element;
  hideNavigation?: boolean;
};

function WalletLayout({
  children,
  hideNavigation = false,
}: Props): JSX.Element {
  const { t } = useTranslation("translation", {
    keyPrefix: "layouts.walletLayout",
  });
  const { connectWallet, wallet, checkIfWalletIsConnected, setWallet } =
    useWalletContext();

  const handleChainChange = (chainId: string) => {
    validChain(chainId);
  };

  const handleAccountChange = (accounts: string[]) => {
    setWallet(accounts[0]);
  };

  useEffect(() => {
    checkIfWalletIsConnected();
    getChain(handleChainChange);
    onAccountChange(handleAccountChange);
  }, []);

  const handleWalletButtonClick = () => {
    connectWallet();
  };

  const walletButtonText = () => {
    if (!wallet) return t("connectWallet");

    return `${wallet.substring(0, 4)}...${wallet.substring(
      wallet.length - 4,
      wallet.length,
    )}`;
  };

  return (
    <>
      {!hideNavigation && <Navigation />}

      <S.Container>
        <LayoutHeader
          rightComponent={
            <S.WalletButton
              text={walletButtonText()}
              onClick={handleWalletButtonClick}
              outline
              round
              rightIcon={WalletIcon}
            />
          }
        />
        <S.BodyContainer>{children}</S.BodyContainer>
      </S.Container>
    </>
  );
}

export default WalletLayout;
