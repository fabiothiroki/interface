import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import Dropdown from "components/atomics/Dropdown";
import theme from "styles/theme";
import { Currencies } from "types/enums/Currencies";
import Divider from "components/atomics/Divider";
import { useCardPaymentInformation } from "contexts/cardPaymentInformationContext";
import BillingInformationSection from "./BillingInformationSection";
import FeesSection from "./FeesSection";
import * as S from "./styles";
import PaymentInformations from "./PaymentInformationsSection";

const { lightGray } = theme.colors;

function CardSection(): JSX.Element {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const { t } = useTranslation("translation", {
    keyPrefix: "promoters.supportFundPage.cardSection",
  });

  const {
    handleSubmit,
    selectedButtonIndex,
    setSelectedButtonIndex,
    givingValues,
    givingTotal,
    refetchGivingValues,
    givingValue,
    currentCoin,
    setCurrentCoin,
  } = useCardPaymentInformation();

  const sections = [
    <FeesSection
      currency={currentCoin}
      givingValue={givingValue()}
      givingTotal={givingTotal()}
    />,
    <BillingInformationSection />,
    <PaymentInformations />,
  ];

  function handleClickNext() {
    if (currentSectionIndex < sections.length - 1) {
      setCurrentSectionIndex(currentSectionIndex + 1);
    } else {
      handleSubmit();
    }
  }

  useEffect(() => {
    refetchGivingValues();
  }, [currentCoin]);

  return (
    <S.CardSectionContainer>
      <Dropdown
        name="currency"
        label={t("currency")}
        values={[Currencies.USD, Currencies.BRL]}
        defaultValue={currentCoin}
        onOptionChanged={(value) => setCurrentCoin(value)}
      />
      <S.Subtitle>{t("subtitleCard")}</S.Subtitle>

      <S.ValuesContainer>
        {givingValues?.map((item, index) => (
          <S.CardValueButton
            text={item?.valueText}
            onClick={() => {
              setSelectedButtonIndex(index);
            }}
            outline={index !== selectedButtonIndex}
            key={item?.value}
          />
        ))}
      </S.ValuesContainer>

      <Divider color={lightGray} />

      {sections[currentSectionIndex]}
      <S.ButtonContainer>
        <S.FinishButton
          text={
            currentSectionIndex < sections.length - 1
              ? t("buttonTextCard")
              : t("buttonSubmit")
          }
          onClick={() => {
            handleClickNext();
          }}
        />
      </S.ButtonContainer>
    </S.CardSectionContainer>
  );
}

export default CardSection;
