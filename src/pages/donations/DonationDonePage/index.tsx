import CardRoundDoubleImage from "components/moleculars/cards/CardRoundDoubleImage";
import CardSideSquareImageButton from "components/moleculars/cards/CardSideSquareImageButton";
import { useTranslation } from "react-i18next";
import theme from "styles/theme";
import * as S from "./styles";

function DonationDonePage(): JSX.Element {
  const { t } = useTranslation("translation", {
    keyPrefix: "donations.donationDonePage",
  });

  return (
    <S.Container>
      <S.Wrapper>
        <CardRoundDoubleImage
          leftImage="https://i.imgur.com/usCwtqX.png"
          rightImage="https://picsum.photos/200/300"
        />
        <S.Title>{t("title")}</S.Title>
        <S.Subtitle>{t("subtitle")}</S.Subtitle>

        <S.HrDivider color={theme.colors.lightGray} width="90%" />

        <CardSideSquareImageButton
          title={t("ngoTitle")}
          text={t("ngoInformation")}
          image="https://i.imgur.com/BwtK2hX.png"
          buttonText="More info"
          onButtonClick={() => {}}
        />
      </S.Wrapper>

      <S.ButtonContainer>
        <S.FinishButton text={t("button")} onClick={() => {}} />
      </S.ButtonContainer>
    </S.Container>
  );
}

export default DonationDonePage;
