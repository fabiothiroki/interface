import Loader from "components/atomics/Loader";
import Header from "components/atomics/sections/Header";
import CardRoundImage from "components/moleculars/cards/CardRoundImage";
import * as S from "./styles";

function DonationInProcesPage(): JSX.Element {
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
          <S.AnimationText>Donating...</S.AnimationText>
        </S.LoaderContainer>
        <S.Divider>____</S.Divider>
        <S.ImpactText>
          Ribon’s supporters are those responsible for paying for the free
          donations
        </S.ImpactText>
      </S.AnimationContainer>
    </S.Container>
  );
}

export default DonationInProcesPage;
