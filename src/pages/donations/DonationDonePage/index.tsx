import Divider from "components/atomics/Divider";
import CardRoundDoubleImage from "components/moleculars/cards/CardRoundDoubleImage";
import CardSideSquareImageButton from "components/moleculars/cards/CardSideSquareImageButton";
import { t } from "i18next";
import theme from "styles/theme";
import * as S from "./styles";

function DonationDonePage(): JSX.Element {
  return (
    <S.Container>
      <S.Wrapper>
        <CardRoundDoubleImage
          leftImage="https://i.imgur.com/usCwtqX.png"
          rightImage="https://picsum.photos/200/300"
        />
        <S.Title>{t("donations.donationDonePage.title")}</S.Title>
        <S.Subtitle>{t("donations.donationDonePage.subtitle")}</S.Subtitle>

        <Divider color={theme.colors.lightGray} />

        <CardSideSquareImageButton
          title="About Amor em Patas"
          text="Amor em Patas is an organization that aims to rescue abandoned, take care of them and seek adoption"
          image="https://i.imgur.com/BwtK2hX.png"
          buttonText="More info"
          onButtonClick={() => {}}
        />
      </S.Wrapper>
      
      <S.ButtonContainer>
        <S.FinishButton
          text={t("donations.donationDonePage.button")}
          onClick={() => {}}
        />
      </S.ButtonContainer>
    </S.Container>
  );
}

export default DonationDonePage;
