import CardSideImage from "components/moleculars/cards/CardSideImage";
import * as S from "./styles";

function ImpactPage(): JSX.Element {
  return (
    <S.Container>
      <h1>Impact</h1>
      <S.Wrapper>
        <CardSideImage
          text="você doou x dias de y coisas"
          imageUrl="https://picsum.photos/id/237/200/300"
          imageAlt="test"
        />
        <CardSideImage
          text="você doou x dias de y coisas"
          imageUrl="https://picsum.photos/id/237/200/300"
          imageAlt="test"
        />
        <CardSideImage
          text="você doou x dias de y coisas"
          imageUrl="https://picsum.photos/id/237/200/300"
          imageAlt="test"
        />
      </S.Wrapper>
    </S.Container>
  );
}

export default ImpactPage;
