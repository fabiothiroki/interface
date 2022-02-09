import * as S from "./styles";

export type Props = {
  image: string;
  imageLogo: string;
  imageAlt?: string;
  imageLogoAlt?: string;
};
function CardRoundImage({
  image,
  imageLogo,
  imageAlt,
  imageLogoAlt,
}: Props): JSX.Element {
  return (
    <S.Container>
      <S.CenterImage src={image} alt={imageAlt} />
      <S.BottomImageContainer>
        <S.BottomImage src={imageLogo} alt={imageLogoAlt} />
      </S.BottomImageContainer>
    </S.Container>
  );
}

export default CardRoundImage;
