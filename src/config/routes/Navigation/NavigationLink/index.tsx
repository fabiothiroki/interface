import { LocationDescriptor } from "history";
import * as S from "../styles";

export type Props = {
  to: LocationDescriptor;
  icon: string;
  enabled?: boolean;
  title: string;
};
function NavigationLink({
  to,
  icon,
  title,
  enabled = false,
}: Props): JSX.Element {
  return (
    <S.StyledLink to={to}>
      <S.Icon src={icon} />
      <S.Title enabled={enabled}>{title}</S.Title>
    </S.StyledLink>
  );
}

export default NavigationLink;
