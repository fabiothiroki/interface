import CardSideImage from "components/moleculars/cards/CardSideImage";
import * as S from "./styles";

function ImpactPage(): JSX.Element {
  return (
    <S.Container>
      <S.ImpactHeader />
      <S.Icon />
      <S.Title>IMPACT</S.Title>
      <S.Subtitle>You used 99 donation tickets</S.Subtitle>

      <S.Wrapper>
        <CardSideImage
          text="you donated 99 days of pet food for rescued animals"
          imageUrl="https://picsum.photos/id/237/200/300"
          imageAlt="test"
        />
        <CardSideImage
          text="you donated 99 days of pet food for "
          imageUrl="https://picsum.photos/id/237/200/300"
          imageAlt="test"
        />
        <CardSideImage
          text="you donated 99 days of pet food for rescued animals oauhsiush aiushiuahsi iohasuohs"
          imageUrl="https://picsum.photos/id/237/200/300"
          imageAlt="test"
        />
        <CardSideImage
          text="you donated 99 days of pet food for rescued animals"
          imageUrl="https://picsum.photos/id/237/200/300"
          imageAlt="test"
        />
      </S.Wrapper>
      <S.Button text="Show more" onClick={() => {}} />
    </S.Container>
  );
}

export default ImpactPage;
