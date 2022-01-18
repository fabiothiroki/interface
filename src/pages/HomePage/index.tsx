import { useWalletContext } from "contexts/walletContext";
import { useNetwork } from "hooks/useNetwork";
import * as S from "./styles";

function HomePage(): JSX.Element {
  const { wallet, connectWallet } = useWalletContext();
  const { isValidNetwork, currentNetworkId } = useNetwork();
  return (
    <S.Container>
      <h1>HomePage</h1>
      <button type="button" onClick={connectWallet}>
        Conectar Carteira
      </button>
      <p>wallet: {wallet}</p>
      <p>
        network: {currentNetworkId} ({isValidNetwork() ? "valid" : "invalid"})
      </p>
    </S.Container>
  );
}

export default HomePage;
