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
import { Divider } from "components/atomics/Divider/styles";
import theme from "styles/theme";
import Spinner from "components/atomics/Spinner";
import { logEvent } from "services/analytics";
import { useLocation } from "react-router-dom";
import { useProvider } from "hooks/useProvider";
import * as S from "./styles";

type LocationStateType = {
  transHash: string;
};

function FundPage(): JSX.Element {
  const [donationPoolBalance, setDonationPoolBalance] = useState<string | null>(
    null,
  );
  const { state } = useLocation<LocationStateType>();
  const transactionHash = useState(state?.transHash);
  const [transactionResponse, setTransactionResponse] = useState<string | null>(
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
  const provider = useProvider();

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

  async function getReceipt() {
    try {
      const receipt = await provider?.getTransactionReceipt(transactionHash[0]);
      const response = receipt && receipt !== null ? "success" : null;
      console.log(receipt);
      setTransactionResponse(response);
    } catch (e) {
      console.log(e);
    }
    return null;
  }

  useEffect(() => {
    fetchContractBalance();
    console.log(transactionHash);
    console.log(transactionResponse, "oi");
    getReceipt();
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
            {donationPoolBalance} <S.FundTextCoin>USDC</S.FundTextCoin>
          </S.FundText>
          <Button
            text={t("fundSupportButtonText")}
            onClick={handleSupportButtonClick}
          />
        </CardBlank>
      </S.CardContainer>

      <S.GivingsContainer>
        <S.SectionTitle>{t("givingsTitle")}</S.SectionTitle>
        <S.GivingsCardContainer>
          {transactionResponse === "success" ? (
            <S.GivingsCard>
              <S.GivingDate>22/02/2022</S.GivingDate>
              <S.GivingText>
                12.00 <S.GivingTextCoin>USDC</S.GivingTextCoin>
              </S.GivingText>
              <Divider color={theme.colors.lightGray} />
              <S.StatusContainer>
                <S.TransactionLink>See Transaction</S.TransactionLink>
              </S.StatusContainer>
            </S.GivingsCard>
          ) : (
            <S.GivingsCard>
              <S.GivingDate>22/02/2022</S.GivingDate>
              <S.GivingText>
                12.00 <S.GivingTextCoin>USDC</S.GivingTextCoin>
              </S.GivingText>
              <Divider color={theme.colors.lightGray} />
              <S.StatusContainer>
                <Spinner />
                <S.ProcessingText>Processing Transaction...</S.ProcessingText>
              </S.StatusContainer>
            </S.GivingsCard>
          )}
        </S.GivingsCardContainer>
      </S.GivingsContainer>
    </S.Container>
  );
}

export default FundPage;
