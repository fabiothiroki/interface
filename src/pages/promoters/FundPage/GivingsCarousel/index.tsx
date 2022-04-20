import { useTranslation } from "react-i18next";
import Carousel from "components/moleculars/sliders/Carousel";
import CardDoubleTextDividerButton from "components/moleculars/cards/CardDoubleTextDividerButton";
import useBreakpoint from "hooks/useBreakpoint";
import { logEvent } from "services/analytics";
import useNavigation from "hooks/useNavigation";
import { useWalletContext } from "contexts/walletContext";
import RightArrowBlack from "./assets/right-arrow-black.svg";
import { ReactComponent as BlueRightArrow } from "./assets/right-arrow-blue.svg";
import * as S from "./styles";

function GivingsCarousel(): JSX.Element {
  const { navigateTo } = useNavigation();
  const { t } = useTranslation("translation", {
    keyPrefix: "promoters.fundPage.givingsCarousel",
  });
  const { wallet, connectWallet } = useWalletContext();
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

  return (
    <S.Container>
      <Carousel sliderPerView={isMobile ? 1.6 : 4} spacing={-10}>
        <CardDoubleTextDividerButton
          firstText="22/02/2022"
          mainText="12.00"
          rightComplementText={coin}
          buttonText={t("linkTransactionText")}
          rightComponentButton={RightArrowBlack}
        />
        <CardDoubleTextDividerButton
          firstText="22/02/2022"
          mainText="12.00"
          rightComplementText={coin}
          buttonText={t("linkTransactionText")}
          rightComponentButton={RightArrowBlack}
        />
        <CardDoubleTextDividerButton
          firstText="22/02/2022"
          mainText="12.00"
          rightComplementText={coin}
          buttonText={t("linkTransactionText")}
          rightComponentButton={RightArrowBlack}
        />

        <S.LastCardCarousel
          onClick={() => {
            handleShowGivingsButtonClick();
          }}
        >
          <BlueRightArrow />
          <S.TextLastCard>{t("textLastCard")}</S.TextLastCard>
        </S.LastCardCarousel>
      </Carousel>
    </S.Container>
  );
}

export default GivingsCarousel;
