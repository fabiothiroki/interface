import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import Dropdown from "components/atomics/Dropdown";
import { Currencies } from "types/enums/Currencies";
import { useCardPaymentInformation } from "contexts/cardPaymentInformationContext";
import useOffers from "hooks/apiHooks/useOffers";
import { logEvent } from "services/analytics";
import { removeInsignificantZeros } from "lib/formatters/currencyFormatter";
import * as S from "../styles";

function ImpactInformationSection(): JSX.Element {
  const { t } = useTranslation("translation", {
    keyPrefix: "promoters.supportFundPage.cardSection",
  });

  const {
    currentCoin,
    setCurrentCoin,
    selectedButtonIndex,
    setSelectedButtonIndex,
  } = useCardPaymentInformation();

  const { offers, refetch: refetchOffers } = useOffers(currentCoin, false);

  useEffect(() => {
    refetchOffers();
  }, [currentCoin]);

  return (
    <>
      <Dropdown
        name="currency"
        label={t("currency")}
        values={[Currencies.USD, Currencies.BRL]}
        defaultValue={currentCoin}
        onOptionChanged={(value) => setCurrentCoin(value)}
      />
      <S.Subtitle>{t("subtitleCard")}</S.Subtitle>
      <S.ValuesContainer>
        {offers?.map((item, index) => (
          <S.CardValueButton
            text={removeInsignificantZeros(item?.price)}
            onClick={() => {
              logEvent("fundSupportAmountBtn_click", {
                option: item?.id,
              });
              setSelectedButtonIndex(index);
            }}
            outline={index !== selectedButtonIndex}
            key={item?.id}
          />
        ))}
      </S.ValuesContainer>
    </>
  );
}

export default ImpactInformationSection;
