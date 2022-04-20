import { useTranslation } from "react-i18next";
import CardBlank from "components/moleculars/cards/CardBlank";
import Button from "components/atomics/Button";
import { useEffect, useState } from "react";
import {
  DONATION_TOKEN_CONTRACT_ADDRESS,
  RIBON_CONTRACT_ADDRESS,
} from "utils/contractUtils";
import { utils } from "ethers";
import { useWalletContext } from "contexts/walletContext";
import useNavigation from "hooks/useNavigation";
import { useContract } from "hooks/useContract";
import DonationTokenAbi from "utils/abis/DonationToken.json";
import RibonAbi from "utils/abis/RibonAbi.json";
import { logError } from "services/crashReport";
import { logEvent } from "services/analytics";
import * as S from "./styles";
import GivingsCarousel from "./GivingsCarousel";

function FundPage(): JSX.Element {
  const coin = "USDC";
  const [donationPoolBalance, setDonationPoolBalance] = useState<string | null>(
    null,
  );
  const { navigateTo } = useNavigation();
  const { t } = useTranslation("translation", {
    keyPrefix: "promoters.fundPage",
  });
  const { wallet, connectWallet } = useWalletContext();
  const donationTokenContract = useContract({
    address: DONATION_TOKEN_CONTRACT_ADDRESS,
    ABI: DonationTokenAbi.abi,
  });
  const contract = useContract({
    address: RIBON_CONTRACT_ADDRESS,
    ABI: RibonAbi.abi,
  });

  async function fetchContractBalance() {
    try {
      const balance = await donationTokenContract?.balanceOf(
        RIBON_CONTRACT_ADDRESS,
      );
      const formattedBalance = parseFloat(utils.formatEther(balance)).toFixed(
        2,
      );

      setDonationPoolBalance(formattedBalance);
    } catch (e) {
      logError(e);
    }
  }

  const testEventFilter = async () => {
    console.log(contract);
    const events = await contract?.filters.PoolBalanceIncreased(wallet);
    console.log(events);
    if (events) console.log(await contract?.queryFilter(events));
  };

  const handleSupportButtonClick = () => {
    logEvent("fundConWalletBtn_click", {
      from: "supportButton",
    });
    if (wallet) {
      logEvent("fundSupportBtn_click", {
        from: "fundBalance",
      });
      navigateTo("/promoters/support-fund");
      return;
    }

    connectWallet();
  };

  useEffect(() => {
    fetchContractBalance();
    testEventFilter();
  }, []);

  useEffect(() => {
    logEvent("fundScreen_view");
  }, []);

  useEffect(() => {
    contract?.on("PoolBalanceIncreased", () => {
      fetchContractBalance();
    });
  }, []);

  return (
    <S.Container>
      <S.Title>{t("title")}</S.Title>
      <S.Subtitle>{t("subtitle")}</S.Subtitle>
      <S.SectionTitle>{t("fundBalance")}</S.SectionTitle>
      <S.CardContainer>
        <CardBlank>
          <S.FundText>
            {donationPoolBalance} <S.FundTextCoin>{coin}</S.FundTextCoin>
          </S.FundText>
          <Button
            text={t("fundSupportButtonText")}
            onClick={handleSupportButtonClick}
          />
        </CardBlank>
      </S.CardContainer>
      <S.SectionTitle>{t("subtitleGivings")}</S.SectionTitle>
      <S.CarouselContainer>
        {wallet ? (
          <GivingsCarousel />
        ) : (
          <S.CardBlank>
            <S.GivingText>{t("firstGivingText")}</S.GivingText>
            <Button
              text={t("firstGivingButtonText")}
              onClick={handleSupportButtonClick}
            />
          </S.CardBlank>
        )}
      </S.CarouselContainer>
    </S.Container>
  );
}

export default FundPage;
