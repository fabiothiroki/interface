import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import Dropdown from "components/atomics/Dropdown";
import { Currencies } from "types/enums/Currencies";
import { useCardPaymentInformation } from "contexts/cardPaymentInformationContext";
import useOffers from "hooks/apiHooks/useOffers";
import { logEvent } from "services/analytics";
import { removeInsignificantZeros } from "lib/formatters/currencyFormatter";
import CardSelect from "components/moleculars/cards/CardSelect";
import useNonProfits from "hooks/apiHooks/useNonProfits";
import NonProfit from "types/entities/NonProfit";
import * as S from "../styles";

function ImpactInformationSection(): JSX.Element {
  const [selectedNonProfit, setSelectedNonProfit] = useState<NonProfit>();

  const { t } = useTranslation("translation", {
    keyPrefix: "promoters.supportFundPage.cardSection",
  });
  const { nonProfits } = useNonProfits();

  useEffect(() => {
    if (nonProfits) setSelectedNonProfit(nonProfits[0]);
  }, []);

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

  const onOptionChanged = (nonProfit: NonProfit) => {
    setSelectedNonProfit(nonProfit);
  };

  const valueText = (value: NonProfit) => value.name;

  return (
    <S.ImpactSectionContainer>
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
      {nonProfits && (
        <S.ImpactSimulatorContainer>
          <CardSelect
            dropdownProps={{
              values: nonProfits,
              label: t("impactSimulationSection.label"),
              name: "nonProfits",
              onOptionChanged,
              valueText,
              containerId: "non-profits-dropdown",
            }}
          >
            <S.CardImpact>
              <S.CardImpactImage src={selectedNonProfit?.mainImage} />
              <S.CardImpactText>
                {selectedNonProfit?.impactDescription}
              </S.CardImpactText>
            </S.CardImpact>
          </CardSelect>
        </S.ImpactSimulatorContainer>
      )}
    </S.ImpactSectionContainer>
  );
}

export default ImpactInformationSection;
