import Divider from "components/atomics/Divider";
import CardRoundDoubleImage from "components/moleculars/cards/CardRoundDoubleImage";
import CardSideSquareImageButton from "components/moleculars/cards/CardSideSquareImageButton";
import theme from "styles/theme";
import * as S from "./styles";

function DonationDonePage(): JSX.Element {
  return (
    <S.Container>
      <h1>DonationDonePage</h1>
      <div>
        <CardRoundDoubleImage
          leftImage="https://picsum.photos/200/300"
          rightImage="https://picsum.photos/200/300"
        />
        <Divider color={theme.colors.ribonBlue}/>

        <CardSideSquareImageButton
          title="About Amor em Patas"
          text="Amor em Patas is an organization that aims to rescue abandoned, take care of them and seek adoption"
          image="https://i.imgur.com/BwtK2hX.png"
          buttonText="More info"
          onButtonClick={() => {}}
        />
      </div>
    </S.Container>
  );
}

export default DonationDonePage;
