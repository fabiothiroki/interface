import Loader from "components/atomics/Loader";
import Header from "components/atomics/sections/Header";
import Divider from "components/atomics/Divider";
import CardRoundImage from "components/moleculars/cards/CardRoundImage";
import { useTranslation } from "react-i18next";
import theme from "styles/theme";
import * as S from "./styles";

function DonationInProcesPage(): JSX.Element {
  const { t } = useTranslation("translation", {
    keyPrefix: "donationInProcess",
  });
  return (
    <S.Container>
      <Header sideLogo="https://i.imgur.com/kJA77FC.png" />
      <S.BodyContainer>
        <CardRoundImage
          leftImage=" https://i.imgur.com/0ReKH37.png"
          centerImage="https://i.imgur.com/XcuQwoJ.png"
          bottomImage="https://i.imgur.com/5oJSpVO.png"
          rightImage="https://i.imgur.com/usCwtqX.png"
        />
      </S.BodyContainer>
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
