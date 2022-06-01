import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import useGivingValues from "hooks/apiHooks/useGivingValues";
import { useLanguage } from "hooks/useLanguage";
import Dropdown from "components/atomics/Dropdown";
import Divider from "components/atomics/Divider";
import theme from "styles/theme";
import { Currencies } from "types/enums/Currencies";
import * as S from "../styles";

const { lightGray } = theme.colors;

const givingsDetails = [
  {
    givingTotal: "R$5.00",
    netGiving: "R$9.00",
    serviceFees: "R$1.00",
    cryptoGivings: "10 USDC",
  },
  {
    givingTotal: "R$10.00",
    netGiving: "R$9.00",
    serviceFees: "R$1.00",
    cryptoGivings: "10 USDC",
  },
  {
    givingTotal: "R$20.00",
    netGiving: "R$19.00",
    serviceFees: "R$1.00",
    cryptoGivings: "20 USDC",
  },
];

function CardSection(): JSX.Element {
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(0);
  const { netGiving, serviceFees, cryptoGivings } =
    givingsDetails[selectedButtonIndex];
  const { t } = useTranslation("translation", {
    keyPrefix: "promoters.supportFundPage.cardSection",
  });
  const { currentLang } = useLanguage();
  function defaultCoin() {
    if (currentLang === "pt-BR") return Currencies.BRL;

    return Currencies.USD;
  }
  const [currentCoin, setCurrentCoin] = useState<Currencies>(defaultCoin());
  const { givingValues, refetch: refetchGivingValues } =
    useGivingValues(currentCoin);

  function givingTotal() {
    if (!givingValues) return "";

    return givingValues[selectedButtonIndex].valueText;
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
            text={item.valueText}
            onClick={() => {
              setSelectedButtonIndex(index);
            }}
            outline={index !== selectedButtonIndex}
            key={item.value}
          />
        ))}
      </S.ValuesContainer>

      <Divider color={lightGray} />
      <S.Subtitle>{t("detailsSubtitle")}</S.Subtitle>
      <S.GivingValue>{givingTotal()}</S.GivingValue>
      <S.NetGivingValue>{t("netGivingText", { netGiving })}</S.NetGivingValue>
      <S.ServiceFeesValue>
        {t("serviceFeesText", { serviceFees })}
      </S.ServiceFeesValue>
      <S.CryptoGivingValue>
        {t("cryptoValueText", { cryptoGivings })}
      </S.CryptoGivingValue>

      <S.ButtonContainer>
        <S.FinishButton text={t("buttonTextCard")} onClick={() => {}} />
      </S.ButtonContainer>
    </S.CardSectionContainer>
  );
}

export default CardSection;
