import LayoutHeader from "layouts/LayoutHeader";
import Navigation from "config/routes/Navigation";
import { menuInFirstDonationFeature } from "config/abTest/features";
import * as S from "./styles";

export type Props = {
  children: JSX.Element;
  hideHeader?: boolean;
};
function MainLayout({ children, hideHeader = false }: Props): JSX.Element {
  function hasShowNavigationBar() {
    if (menuInFirstDonationFeature()) {
      return true;
    }
    return false;
  }
  return (
    <>
      {hasShowNavigationBar() && <Navigation />}
      <S.MainContainer>
        {!hideHeader && <LayoutHeader />}
        <S.MainBodyContainer>{children}</S.MainBodyContainer>
      </S.MainContainer>
    </>
  );
}

export default MainLayout;
