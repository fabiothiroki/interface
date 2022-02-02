import * as S from "./styles";

export type Props = {
  rightImage: string;
  leftImage: string;
  centerImage: string;
  bottomImage: string;
  rightImageAlt?: string;
  leftImageAlt?: string;
  centerImageAlt?: string;
  bottomImageAlt?: string;
};
function CardRoundImage({
  rightImage,
  leftImage,
  centerImage,
  bottomImage,
  rightImageAlt,
  leftImageAlt,
  centerImageAlt,
  bottomImageAlt,
}: Props): JSX.Element {
  return (
    <S.Container>
      <S.Column>
        <S.BoxImage>
          <S.RightImage src={rightImage} alt={rightImageAlt} />
          <S.CenterImage src={centerImage} alt={centerImageAlt} />
          <S.LeftImage src={leftImage} alt={leftImageAlt} />
        </S.BoxImage>
        <S.BoxBottomImage>
          <S.BottomImageContainer>
            <S.BottomImage src={bottomImage} alt={bottomImageAlt} />
          </S.BottomImageContainer>
        </S.BoxBottomImage>
      </S.Column>
    </S.Container>
  );
}

export default CardRoundImage;
