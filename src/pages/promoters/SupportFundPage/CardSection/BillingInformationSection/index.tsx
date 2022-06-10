import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import InputAutoComplete from "components/atomics/inputs/InputAutoComplete";
import { Languages } from "types/enums/Languages";
import { useLanguage } from "hooks/useLanguage";
import { countryList } from "./countryList";
import { mask } from "./mask";
import * as S from "./styles";

function BillingInformationSection(): JSX.Element {
  const { t } = useTranslation("translation", {
    keyPrefix:
      "promoters.supportFundPage.cardSection.billingInformationSection",
  });
  const { currentLang } = useLanguage();
  const maxLengthByLanguage = currentLang === Languages.PT ? 14 : 11;

  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [taxId, setTaxId] = useState("");

  const handleChangeMask = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTaxId(mask(value, currentLang));
  };

  useEffect(() => {
    console.log(taxId, state, city, country);
  }, [taxId, state, city, country]);

  return (
    <S.BillingInformationSectionContainer>
      <S.Title>{t("title")}</S.Title>

      <S.Form>
        <InputAutoComplete
          suggestions={countryList}
          placeholder={t("country")}
          onOptionChanged={(value: string) => setCountry(value)}
        />
        <S.HalfInput
          placeholder={t("city")}
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <S.HalfInput
          placeholder={t("state")}
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
        <S.Input
          placeholder={t("taxId")}
          value={taxId}
          onChange={handleChangeMask}
          maxLength={maxLengthByLanguage}
        />
      </S.Form>
    </S.BillingInformationSectionContainer>
  );
}

export default BillingInformationSection;
