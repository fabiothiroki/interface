import Header from "components/atomics/sections/Header";
import CardSideImage from "components/moleculars/cards/CardSideImage";
import * as S from "./styles";

function ImpactPage(): JSX.Element {
  return (
    <S.Container>
      <Header />
      <S.Title>IMPACT</S.Title>
      <S.Subtitle>You used 99 donation tickets</S.Subtitle>
      <S.Wrapper>
        <CardSideImage
          text="you donated 99 days of pet food for rescued animals"
          imageUrl="https://picsum.photos/id/237/200/300"
          imageAlt="test"
        />
        <CardSideImage
          text="you donated 99 days of pet food for rescued animals"
          imageUrl="https://picsum.photos/id/237/200/300"
          imageAlt="test"
        />
        <CardSideImage
          text="you donated 99 days of pet food for rescued animals"
          imageUrl="https://picsum.photos/id/237/200/300"
          imageAlt="test"
        />
        <S.Button text="Show more" onClick={() => {}} />
      </S.Wrapper>
    </S.Container>
  );
}

export default ImpactPage;
