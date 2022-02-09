import * as S from "./styles";

export type Props = {
  image: string;
  bottomImage: string;
  rightImageAlt?: string;
  imageAlt?: string;
  bottomImageAlt?: string;
};
function CardRoundImage({
  image,
  bottomImage,
  imageAlt,
  bottomImageAlt,
}: Props): JSX.Element {
  return (
    <S.Container>
      <S.CenterImage src={image} alt={imageAlt} />
      <S.BottomImageContainer>
        <S.BottomImage src={bottomImage} alt={bottomImageAlt} />
      </S.BottomImageContainer>
    </S.Container>
  );
}

export default CardRoundImage;
