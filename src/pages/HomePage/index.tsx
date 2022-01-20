import { useEffect } from "react";
import { useContract } from "hooks/useContract";
import { useWalletContext } from "contexts/walletContext";
import { useNetwork } from "hooks/useNetwork";
import RibonABI from "utils/abis/RibonAbi.json";
import * as S from "./styles";
import Button from "../../components/atomics/Button";
import SliderImage from "../../components/moleculars/sliders/SliderImage";

function HomePage(): JSX.Element {
  const { wallet, connectWallet } = useWalletContext();
  const { isValidNetwork, currentNetwork } = useNetwork();
  const contract = useContract({
    address: "0x3e9D9ec429055BB7757ae30B51C356503b98dF79",
    ABI: RibonABI.abi,
  });

  async function getDonations() {
    console.log(contract);
    const donations = await contract?.getDonationPoolBalance();
    console.log(donations);
  }

  useEffect(() => {
    getDonations();
  }, [contract]);

  return (
    <S.Container>
      <h1>HomePage</h1>
      <Button text="Conectar Carteira" onClick={connectWallet} />
      <p>wallet: {wallet}</p>
      <p>
        network: {currentNetwork?.chainId} (
        {isValidNetwork() ? "valid" : "invalid"})
      </p>
      <SliderImage
        sliderImages={[
          { imageUrl: "https://picsum.photos/400/300" },
          { imageUrl: "https://picsum.photos/400/300" },
        ]}
      />
    </S.Container>
  );
}

export default HomePage;
