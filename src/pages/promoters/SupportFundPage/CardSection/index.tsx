import { useTranslation } from "react-i18next";
import { useState } from "react";
import useGivingValues from "hooks/apiHooks/useGivingValues";
import { useLanguage } from "hooks/useLanguage";
import * as S from "../styles";

function CardSection(): JSX.Element {
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(0);

  const { t } = useTranslation("translation", {
    keyPrefix: "promoters.supportFundPage",
  });

  const { currentLang } = useLanguage();

  function currentCoin() {
    if (currentLang === "pt-BR") {
      return "brl";
    }
    return "usd";
  }

  const { givingValues } = useGivingValues(currentCoin());

  return (
    <div>
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

      <S.ButtonContainer>
        <S.FinishButton text={t("buttonTextCard")} onClick={() => {}} />
      </S.ButtonContainer>
    </div>
  );
}

export default CardSection;
