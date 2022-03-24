import Logo from "assets/icons/logo.svg";
import * as S from "./styles";

export type Props = {
  sideLogo?: string;
  rightComponent?: JSX.Element;
  rightComponent2?: JSX.Element;
};
function Header({
  sideLogo,
  rightComponent,
  rightComponent2,
}: Props): JSX.Element {
  return (
    <S.Container>
      <S.LeftContainer>
        <S.Logo src={Logo} alt="logo" />
        <S.Divider>|</S.Divider>
        <S.Logo src={sideLogo} alt="side-logo" />
      </S.LeftContainer>
      {rightComponent && (
        <S.RightContainer>
          {rightComponent2}
          {rightComponent}
        </S.RightContainer>
      )}
    </S.Container>
  );
}

export default Header;
