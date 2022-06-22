import { useTranslation } from "react-i18next";
import InputAutoComplete from "components/atomics/inputs/InputAutoComplete";
import { Languages } from "types/enums/Languages";
import { useLanguage } from "hooks/useLanguage";
import { mask } from "lib/maskForTaxId";
import { useCardPaymentInformation } from "contexts/cardPaymentInformationContext";
import InputText from "components/InputText";
import { countryList } from "./countryList";
import * as S from "./styles";

function BillingInformationSection(): JSX.Element {
  const { t } = useTranslation("translation", {
    keyPrefix:
      "promoters.supportFundPage.cardSection.billingInformationSection",
  });
  const { currentLang } = useLanguage();
  const maxLengthByLanguage = currentLang === Languages.PT ? 14 : 11;
  const { setCountry, state, setState, city, setCity, taxId, setTaxId } =
    useCardPaymentInformation();

  const handleChangeMask = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTaxId(mask(value, currentLang));
  };

  return (
    <S.BillingInformationSectionContainer>
      <S.Title>{t("title")}</S.Title>

      <S.Form>
        <InputAutoComplete
          name="country"
          suggestions={countryList}
          placeholder={t("country")}
          onOptionChanged={(value: string) => setCountry(value)}
        />
        <S.HalfInput
          name={city}
          placeholder={t("city")}
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <S.HalfInput
          name={state}
          placeholder={t("state")}
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
        <InputText
          name={taxId}
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
