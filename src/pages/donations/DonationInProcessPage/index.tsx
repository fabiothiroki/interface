import Loader from "components/atomics/Loader";
import Divider from "components/atomics/Divider";
import CardRoundImage from "components/moleculars/cards/CardRoundImage";
import { useTranslation } from "react-i18next";
import useNavigation from "hooks/useNavigation";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import NonProfit from "types/entities/NonProfit";
import theme from "styles/theme";
import * as S from "./styles";

type LocationStateType = {
  nonProfit: NonProfit;
};

function DonationInProcessPage(): JSX.Element {
  const { t } = useTranslation("translation", {
    keyPrefix: "donations.donationInProcess",
  });
  const { navigateTo } = useNavigation();
  const { state: { nonProfit } } = useLocation<LocationStateType>();


  async function handleDonation() {
    setTimeout(() => {
      navigateTo({pathname: "/donation-done", state: {nonProfit}});
    }, 2000);
  }

  useEffect(() => {
    console.log(nonProfit);
    handleDonation();
  }, []);

  return (
    <S.Container>
      <CardRoundImage
        image={nonProfit?.backgroundImage}
        logo={nonProfit?.logo}
      />
      <S.AnimationContainer>
        <S.LoaderContainer>
          <Loader />
          <S.AnimationText>{t("animationText")}</S.AnimationText>
        </S.LoaderContainer>
        <S.DividerContainer>
          <Divider color={theme.colors.ribonBlack} width="48px" />
        </S.DividerContainer>
        <S.ImpactText>{t("impactText")}</S.ImpactText>
      </S.AnimationContainer>
    </S.Container>
  );
}

export default DonationInProcessPage;
