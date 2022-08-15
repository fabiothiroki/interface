import Dropdown, { Props as DropdownProps } from "components/atomics/Dropdown";
import * as S from "./styles";

export type Props = {
  dropdownProps: DropdownProps;
};
function CardSelect({ dropdownProps }: Props): JSX.Element {
  return (
    <S.Container>
      <Dropdown {...dropdownProps} />
    </S.Container>
  );
}

export default CardSelect;
