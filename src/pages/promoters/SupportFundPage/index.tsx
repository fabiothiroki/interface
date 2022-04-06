import { useTranslation } from "react-i18next";
import React, { useEffect, useState } from "react";
import SimpleMaskMoney from "simple-mask-money";
import * as S from "./styles";

function SupportFundPage(): JSX.Element {
  const { t } = useTranslation("translation", {
    keyPrefix: "promoters.supportFundPage",
  });
  const [amount, setAmount] = useState("");

  const args = {
    afterFormat(e: string) {
      setAmount(e);
    },
    allowNegative: false,
    negativeSignAfter: false,
    prefix: "",
    suffix: "",
    fixed: true,
    fractionDigits: 2,
    decimalSeparator: ".",
    thousandsSeparator: ",",
    cursor: "end",
  };

  useEffect(() => {
    SimpleMaskMoney.setMask("#amount", args);
  }, []);

  const handleFinishButtonClick = () => {
    console.log(Number(amount));
    console.log(amount);
  };

  return (
    <S.Container>
      <S.Title>{t("title")}</S.Title>
      <S.Subtitle>{t("subtitle")}</S.Subtitle>

      <S.Input
        name="amount"
        id="amount"
        type="text"
        placeholder="0.00"
        inputMode="numeric"
      />

      <S.ButtonContainer>
        <S.FinishButton text={t("button")} onClick={handleFinishButtonClick} />
      </S.ButtonContainer>
    </S.Container>
  );
}

export default SupportFundPage;
