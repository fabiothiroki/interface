import { useWalletContext } from "contexts/walletContext";
import * as S from "./styles";

function HomePage(): JSX.Element {
  const { wallet, connectWallet } = useWalletContext();
  return (
    <S.Container>
      <h1>HomePage</h1>
      <button type="button" onClick={connectWallet}>
        Conectar Carteira
      </button>
      <p>{wallet}</p>
    </S.Container>
  );
}

export default HomePage;
