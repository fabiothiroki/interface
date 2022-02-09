import Loader from "components/atomics/Loader";
import Divider from "components/atomics/Divider";
import CardRoundImage from "components/moleculars/cards/CardRoundImage";
import { useTranslation } from "react-i18next";
import theme from "styles/theme";
import * as S from "./styles";

function DonationInProcesPage(): JSX.Element {
  const { t } = useTranslation("translation", {
    keyPrefix: "donations.donationInProcess",
  });

  return (
    <S.Container>
      <S.CardRoundImageContainer>
        <CardRoundImage
          image="https://i.imgur.com/XcuQwoJ.png"
          bottomImage="https://i.imgur.com/5oJSpVO.png"
        />
      </S.CardRoundImageContainer>
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

export default DonationInProcesPage;
