import * as S from "./styles";

export type Props = {
  logoImage: string;
  bottomImage: string;
  rightImageAlt?: string;
  logoImageAlt?: string;
  bottomImageAlt?: string;
};
function CardRoundImage({
  logoImage,
  bottomImage,
  logoImageAlt,
  bottomImageAlt,
}: Props): JSX.Element {
  return (
    <S.Container>
      <S.CenterImage src={logoImage} alt={logoImageAlt} />
      <S.BottomImageContainer>
        <S.BottomImage src={bottomImage} alt={bottomImageAlt} />
      </S.BottomImageContainer>
    </S.Container>
  );
}

export default CardRoundImage;
