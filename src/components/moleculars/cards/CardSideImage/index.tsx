import * as S from "./styles";

export type Props = {
  imageUrl?: string;
  text?: string;
};
function CardSideImage({ imageUrl, text }: Props): JSX.Element {
  return (
    <S.Container>
      <S.Image src={imageUrl} />
      <S.Text>{text}</S.Text>
    </S.Container>
  );
}

export default CardSideImage;
