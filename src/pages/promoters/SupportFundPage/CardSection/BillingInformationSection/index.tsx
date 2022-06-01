import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import Divider from "components/atomics/Divider";
import theme from "styles/theme";
import * as S from "./styles";

function BillingInformationSection(): JSX.Element {
  const { t } = useTranslation("translation", {
    keyPrefix:
      "promoters.supportFundPage.cardSection.billingInformationSection",
  });
  const { lightGray } = theme.colors;

  useEffect(() => {}, []);

  return (
    <S.BillingInformationSectionContainer>
      <Divider color={lightGray} />
      <S.Title>{t("title")}</S.Title>
    </S.BillingInformationSectionContainer>
  );
}

export default BillingInformationSection;
