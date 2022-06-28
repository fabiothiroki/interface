import { useTranslation } from "react-i18next";
import PromoterGivingsSection from "./PromoterGivingsSection";
import AllGivingsSection from "./AllGivingsSection";
import * as S from "./styles";

function GivingsSection(): JSX.Element {
  const { t } = useTranslation("translation", {
    keyPrefix: "promoters.fundPage.givingsSection",
  });

  return (
    <S.Container>
      <S.SectionTitle>{t("subtitleGivings")}</S.SectionTitle>
      <PromoterGivingsSection />

      <AllGivingsSection />
    </S.Container>
  );
}
export default GivingsSection;
