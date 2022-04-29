import { useTranslation } from "react-i18next";
import Carousel from "components/moleculars/sliders/Carousel";
import CardDoubleTextDividerButton from "components/moleculars/cards/CardDoubleTextDividerButton";
import useBreakpoint from "hooks/useBreakpoint";
import Button from "components/atomics/Button";
import { logError } from "services/crashReport";
import { useEffect, useState, useCallback } from "react";
import { logEvent } from "services/analytics";
import { utils } from "ethers";
import useNavigation from "hooks/useNavigation";
import usePromoterDonations from "hooks/apiHooks/usePromoterDonations";
import { useWalletContext } from "contexts/walletContext";
import RightArrowBlack from "./assets/right-arrow-black.svg";
import { ReactComponent as BlueRightArrow } from "./assets/right-arrow-blue.svg";
import * as S from "./styles";
import "keen-slider/keen-slider.min.css";

function GivingsSection(): JSX.Element {
  const [promoterDonations, setPromoterDonations] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  const { navigateTo } = useNavigation();
  const { t } = useTranslation("translation", {
    keyPrefix: "promoters.fundPage.givingsCarousel",
  });
  const { wallet, connectWallet } = useWalletContext();
  const { getPromoterDonations } = usePromoterDonations();
  const { isMobile } = useBreakpoint();
  const coin = "USDC";

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

  const fetchPromoterDonations = useCallback(
    async (user: string) => {
      setLoading(true);
      try {
        const donations = await getPromoterDonations(user);
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

  function formattedAmount(amount: number) {
    return parseFloat(utils.formatEther(amount)).toFixed(2);
  }

  function formattedDate(timestamp: number) {
    return new Date(timestamp * 1000).toLocaleDateString().toString();
  }

  function concatLinkHash(hash: string) {
    return `https://mumbai.polygonscan.com/tx/${hash}`;
  }

  function renderCarousel() {
    return promoterDonations?.promoterDonations.length !== 0 && wallet;
  }

  function renderCardsCarousel() {
    return promoterDonations?.promoterDonations.map((item: any) => (
      <div className="keen-slider__slide">
        <CardDoubleTextDividerButton
          key={item.id}
          firstText={formattedDate(item.timestamp).toString()}
          mainText={formattedAmount(item.amountDonated)}
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
      {renderCarousel() ? (
        !loading && (
          <Carousel sliderPerView={isMobile ? 1.6 : 4} spacing={-10}>
            {renderCardsCarousel()}
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
