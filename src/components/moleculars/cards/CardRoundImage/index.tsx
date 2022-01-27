import * as S from "./styles";

export type Props = {
  rigthImage: string;
  leftImage: string;
  centerImage: string;
  bottomImage: string;
};
function CardRoundImage({
  rigthImage,
  leftImage,
  centerImage,
  bottomImage,
}: Props): JSX.Element {
  return (
    <S.Container>
      <S.RigthImage src={rigthImage} alt="" />
      <S.LeftImage src={leftImage} />
      <S.CenterImage src={centerImage} />
      <S.BottomImageContainer>
        <S.BottomImage src={bottomImage} />
      </S.BottomImageContainer>
    </S.Container>
  );
}

export default CardRoundImage;
