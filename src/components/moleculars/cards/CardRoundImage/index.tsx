import * as S from "./styles";

export type Props = {
  centerImage: string;
  bottomImage: string;
  rightImageAlt?: string;
  centerImageAlt?: string;
  bottomImageAlt?: string;
};
function CardRoundImage({
  centerImage,
  bottomImage,
  centerImageAlt,
  bottomImageAlt,
}: Props): JSX.Element {
  return (
    <S.Container>
      <S.Column>
        <S.BoxImage>
          <S.CenterImage src={centerImage} alt={centerImageAlt} />
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
