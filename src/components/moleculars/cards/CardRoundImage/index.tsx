import * as S from "./styles";

export type Props = {
  image: string;
  logo: string;
  imageAlt?: string;
  logoAlt?: string;
};
function CardRoundImage({
  image,
  logo,
  imageAlt,
  logoAlt,
}: Props): JSX.Element {
  return (
    <S.Container>
      <S.CenterImage src={image} alt={imageAlt} />
      <S.BottomImageContainer>
        <S.BottomImage src={logo} alt={logoAlt} />
      </S.BottomImageContainer>
    </S.Container>
  );
}

export default CardRoundImage;
