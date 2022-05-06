import { useTranslation } from "react-i18next";
import Carousel from "components/moleculars/sliders/Carousel";
import CardDoubleTextDividerButton from "components/moleculars/cards/CardDoubleTextDividerButton";
import useBreakpoint from "hooks/useBreakpoint";
import Button from "components/atomics/Button";
import { logError } from "services/crashReport";
import { formatFromWei } from "lib/web3Helpers/etherFormatters";
import { formatDate } from "lib/web3Helpers/timeStampFormatters";
import { useEffect, useState, useCallback } from "react";
import { logEvent } from "services/analytics";
import useNavigation from "hooks/useNavigation";
import usePromoterDonations from "hooks/apiTheGraphHooks/usePromoterDonations";
import { useWalletContext } from "contexts/walletContext";
import { useLocation } from "react-router-dom";
import { useProvider } from "hooks/useProvider";
import useToast from "hooks/useToast";
import RightArrowBlack from "./assets/right-arrow-black.svg";
import { ReactComponent as BlueRightArrow } from "./assets/right-arrow-blue.svg";
import * as S from "./styles";
import "keen-slider/keen-slider.min.css";

type LocationStateType = {
  transactionHash: string;
  time: string;
  amount: number;
  processing: boolean;
};

function GivingsSection(): JSX.Element {
  const [promoterDonations, setPromoterDonations] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  const toast = useToast();
  const provider = useProvider();
  const { navigateTo } = useNavigation();
  const { t } = useTranslation("translation", {
    keyPrefix: "promoters.fundPage.givingsSection",
  });
  const { wallet, connectWallet } = useWalletContext();
  const { getPromoterDonations } = usePromoterDonations();
  const { isMobile } = useBreakpoint();
  const coin = "USDC";

  const { state } = useLocation<LocationStateType>();
  const [processingTransaction, setProcessingTransaction] = useState<boolean>(
    state?.processing,
  );

  const handleShowGivingsButtonClick = () => {
    logEvent("fundShowGivingsListBtn_click", {
      from: "yourGivingsCarousel",
    });
    if (wallet) {
      navigateTo("/promoters/show-givings");
      return;
    }
    connectWallet();
  };

  const transactionIsBeingProcessed = async (hash: string) => {
    try {
      const receipt = await provider?.getTransactionReceipt(hash);
      const response = receipt && receipt !== null ? "success" : null;
      if (response === "success") {
        setProcessingTransaction(false);
        toast({
          message: t("transactionSuccessText"),
          type: "success",
          link: `https://mumbai.polygonscan.com/tx/${hash}`,
        });
        console.log("transaction success");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const fetchPromoterDonations = useCallback(
    async (user: string) => {
      setLoading(true);
      try {
        const donations = await getPromoterDonations(user, isMobile ? 2 : 3);
        setPromoterDonations(donations);
      } catch (e) {
        logError(e);
      } finally {
        setLoading(false);
      }
    },
    [wallet],
  );

  const handleSupportButtonClick = () => {
    if (wallet) {
      logEvent("fundSupportBtn_click", {
        from: "giveNow",
      });
      navigateTo("/promoters/support-fund");
      return;
    }

    connectWallet();
  };

  useEffect(() => {
    if (wallet) {
      fetchPromoterDonations(wallet);
    }
  }, [wallet]);

  useEffect(() => {
    if (processingTransaction) {
      transactionIsBeingProcessed(state?.transactionHash);
    }
    console.log("useeffect");
  }, [state]);

  function concatLinkHash(hash: string) {
    return `https://mumbai.polygonscan.com/tx/${hash}`;
  }

  function shouldRenderCarousel() {
    return promoterDonations?.promoterDonations.length !== 0 && wallet;
  }

  function shouldRenderProcessingTransaction() {
    if (processingTransaction) {
      return (
        <CardDoubleTextDividerButton
          key={state.transactionHash}
          firstText={state.time}
          mainText={state.amount.toString()}
          rightComplementText={coin}
          buttonText={t("linkTransactionText")}
          rightComponentButton={RightArrowBlack}
          link={concatLinkHash(state.transactionHash)}
          processingText={t("processingText")}
          processing={processingTransaction}
        />
      );
    }
    return null;
  }

  function renderCardsCarousel() {
    return promoterDonations?.promoterDonations.map((item: any) => (
      <div className="keen-slider__slide" key={item.id}>
        <CardDoubleTextDividerButton
          key={item.id}
          firstText={formatDate(item.timestamp).toString()}
          mainText={formatFromWei(item.amountDonated)}
          rightComplementText={coin}
          buttonText={t("linkTransactionText")}
          rightComponentButton={RightArrowBlack}
          link={concatLinkHash(item.id)}
        />
      </div>
    ));
  }
  return (
    <S.Container>
      <S.SectionTitle>{t("subtitleGivings")}</S.SectionTitle>
      {shouldRenderProcessingTransaction()}
      {shouldRenderCarousel() ? (
        !loading && (
          <Carousel sliderPerView={isMobile ? 1.8 : 4} spacing={-10}>
            {renderCardsCarousel()}
            {false && (
              <div className="keen-slider__slide">
                <S.LastCardCarousel
                  onClick={() => {
                    handleShowGivingsButtonClick();
                  }}
                >
                  <BlueRightArrow />
                  <S.TextLastCard>{t("textLastCard")}</S.TextLastCard>
                </S.LastCardCarousel>
              </div>
            )}
          </Carousel>
        )
      ) : (
        <S.CardBlank>
          <S.GivingText>{t("firstGivingText")}</S.GivingText>
          <Button
            text={t("firstGivingButtonText")}
            onClick={handleSupportButtonClick}
          />
        </S.CardBlank>
      )}
    </S.Container>
  );
}
export default GivingsSection;
