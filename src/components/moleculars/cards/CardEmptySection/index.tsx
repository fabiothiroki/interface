import { ReactComponent as EmptyIcon } from "./assets/empty-section.svg";
import * as S from "./styles";

export type Props = {
  cardText: string;
  btnText: string;
};
function CardEmptySection({ cardText, btnText }: Props): JSX.Element {
  return (
    <S.Container>
      <EmptyIcon width="50px" height="50px" />
      <S.Text>{cardText}</S.Text>
      <S.EmptyDonationButton text={btnText} onClick={() => {}} />
    </S.Container>
  );
}

export default CardEmptySection;
