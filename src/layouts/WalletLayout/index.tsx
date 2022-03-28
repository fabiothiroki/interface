import LayoutHeader from "layouts/LayoutHeader";
import Navigation from "config/routes/Navigation";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import * as S from "./styles";
import { useWalletContext } from "../../contexts/walletContext";

export type Props = {
  children: JSX.Element;
};

function WalletLayout({ children }: Props): JSX.Element {
  const { t } = useTranslation("translation", {
    keyPrefix: "layouts.walletLayout",
  });
  const { connectWallet, wallet, checkIfWalletIsConnected } =
    useWalletContext();

  useEffect(() => {
    checkIfWalletIsConnected();
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
      <Navigation />
      <S.Container>
        <LayoutHeader
          rightComponent={
            <S.WalletButton
              text={walletButtonText()}
              onClick={handleWalletButtonClick}
              outline
              round
            />
          }
        />
        <S.BodyContainer>{children}</S.BodyContainer>
      </S.Container>
    </>
  );
}

export default WalletLayout;
