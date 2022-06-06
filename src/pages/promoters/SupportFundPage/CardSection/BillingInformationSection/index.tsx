import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import * as S from "./styles";

function BillingInformationSection(): JSX.Element {
  const { t } = useTranslation("translation", {
    keyPrefix:
      "promoters.supportFundPage.cardSection.billingInformationSection",
  });

  useEffect(() => {}, []);

  return (
    <S.BillingInformationSectionContainer>
      <S.Title>{t("title")}</S.Title>

      <S.Form>
        <S.Input placeholder={t("country")} />
        <S.HalfInput placeholder={t("city")} />
        <S.HalfInput placeholder={t("state")} />
        <S.Input placeholder={t("taxID")} />
      </S.Form>
    </S.BillingInformationSectionContainer>
  );
}

export default BillingInformationSection;
