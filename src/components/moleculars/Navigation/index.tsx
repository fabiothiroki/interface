import { useTranslation } from "react-i18next";
import useBreakpoint from "hooks/useBreakpoint";
import CausesIconOn from "./assets/causesIconOn.svg";
import ImpactIconOn from "./assets/impactIconOn.svg";
import ImpactIconOff from "./assets/impactIconOff.svg";
import CausesIconOff from "./assets/causesIconOff.svg";
import * as S from "./styles";

export type Props = {
  isImpactPage: boolean
};
function Navigation({isImpactPage}: Props): JSX.Element {

  const { t } = useTranslation("translation", {
    keyPrefix: "donations.menu",
  });

  const { isDesktop } = useBreakpoint();

  return  isDesktop ? (
    <S.Container>
      <S.StyledLink to="/" >
        <S.Icon src={isImpactPage ? CausesIconOff : CausesIconOn} alt="causes" />
        <S.Title disabled={isImpactPage}>
          {t("causesPageTitle")}
        </S.Title>
      </S.StyledLink>
      <S.StyledLink to="/impact" >
        <S.Icon src={isImpactPage ? ImpactIconOn : ImpactIconOff} alt="impact" />
        <S.Title disabled={!isImpactPage}>
          {t("impactTitle")}
        </S.Title>
      </S.StyledLink>
    </S.Container>
  ) :  (
    <S.ContainerMobile>
      <S.StyledLink to="/" >
        <S.Icon src={isImpactPage ? CausesIconOff : CausesIconOn} alt="causes" />
        <S.Title disabled={isImpactPage}>
          {t("causesPageTitle")}
        </S.Title>
      </S.StyledLink>
      <S.StyledLink to="/impact" >
        <S.Icon src={isImpactPage ? ImpactIconOn : ImpactIconOff} alt="impact" />
        <S.Title disabled={!isImpactPage}>
          {t("impactTitle")}
        </S.Title>
      </S.StyledLink>
    </S.ContainerMobile>);
}

export default Navigation;