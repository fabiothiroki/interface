import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import useBreakpoint from "hooks/useBreakpoint";
import CausesIconOn from "./assets/causesIconOn.svg";
import ImpactIconOn from "./assets/impactIconOn.svg";
import ImpactIconOff from "./assets/impactIconOff.svg";
import CausesIconOff from "./assets/causesIconOff.svg";
import FundIconOff from "./assets/fundIconOff.svg";
import FundIconOn from "./assets/fundIconOn.svg";
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

  function isInPath(path: string) {
    return [path].includes(location.pathname);
  }

  const isImpactPage = isInPath("/impact");
  const isCausesPage = isInPath("/");

  const iconImpactPage = isImpactPage ? ImpactIconOn : ImpactIconOff;
  const iconCausesPage = isCausesPage ? CausesIconOn : CausesIconOff;

  const routes = [
    {
      path: "/",
      iconOn: CausesIconOn,
      iconOff: CausesIconOff,
      title: t("causesPageTitle"),
    },
    {
      path: "/impact",
      iconOn: ImpactIconOn,
      iconOff: ImpactIconOff,
      title: t("impactTitle"),
    },
    {
      path: "/promoters/fund",
      iconOn: FundIconOn,
      iconOff: FundIconOff,
      title: t("fundPageTitle"),
    },
  ];

  return isDesktop ? (
    <S.ContainerDesktop>
      {routes.map((route) => (
        <NavigationLink
          to={{ pathname: route.path, search }}
          icon={isInPath(route.path) ? route.iconOn : route.iconOff}
          title={route.title}
          enabled={isInPath(route.path)}
        />
      ))}
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
