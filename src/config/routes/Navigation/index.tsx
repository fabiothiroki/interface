import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import useBreakpoint from "hooks/useBreakpoint";
import CausesIconOn from "./assets/causesIconOn.svg";
import ImpactIconOn from "./assets/impactIconOn.svg";
import ImpactIconOff from "./assets/impactIconOff.svg";
import CausesIconOff from "./assets/causesIconOff.svg";
import * as S from "./styles";
import NavigationLink from "./NavigationLink";

export type Props = {
  isImpactPage: boolean;
};
function Navigation(): JSX.Element {
  const { t } = useTranslation("translation", {
    keyPrefix: "donations.menu",
  });

  const { isDesktop } = useBreakpoint();

  const location = useLocation();
  const { search } = location;
  const isImpactPage = ["/impact"].includes(location.pathname);
  const isCausesPage = ["/"].includes(location.pathname);

  const iconImpactPage = isImpactPage ? ImpactIconOn : ImpactIconOff;
  const iconCausesPage = isCausesPage ? CausesIconOn : CausesIconOff;

  return isDesktop ? (
    <S.ContainerDesktop>
      <NavigationLink
        to={{ pathname: "/", search }}
        icon={iconCausesPage}
        title={t("causesPageTitle")}
        enabled={isCausesPage}
      />
      <NavigationLink
        to={{ pathname: "/impact", search }}
        icon={iconImpactPage}
        title={t("impactTitle")}
        enabled={isImpactPage}
      />
    </S.ContainerDesktop>
  ) : (
    <S.ContainerMobile>
      <NavigationLink
        to={{ pathname: "/", search }}
        icon={iconCausesPage}
        title={t("causesPageTitle")}
        enabled={isCausesPage}
      />
      <NavigationLink
        to={{ pathname: "/impact", search }}
        icon={iconImpactPage}
        title={t("impactTitle")}
        enabled={isImpactPage}
      />
    </S.ContainerMobile>
  );
}

export default Navigation;
