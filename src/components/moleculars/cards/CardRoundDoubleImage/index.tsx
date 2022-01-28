import * as S from "./styles";

export type Props = {
  leftImage?: string;
  rightImage?: string;
};

function CardRoundDoubleImage({ leftImage, rightImage }: Props): JSX.Element {
  return (
    <S.Container>
      <h1>CardRoundDoubleImage</h1>
      <S.ImageContainer>
        <S.LeftImage src={leftImage} />
        <S.RightImage src={rightImage} />
      </S.ImageContainer>
    </S.Container>
  );
}

export default CardRoundDoubleImage;
