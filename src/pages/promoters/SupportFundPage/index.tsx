import { useTranslation } from "react-i18next";
import React, { useState } from "react";
import * as S from "./styles";

function SupportFundPage(): JSX.Element {
  const { t } = useTranslation("translation", {
    keyPrefix: "promoters.supportFundPage",
  });
  const [amount, setAmount] = useState<number>(0);

  return (
    <S.Container>
      <S.Title>{t("title")}</S.Title>
      <S.Subtitle>{t("subtitle")}</S.Subtitle>

      <S.Input
        name="amount"
        id="amount"
        type="number"
        placeholder="0.00"
        onChange={(e) => {
          setAmount(Number(e.target.value));
        }}
        value={amount}
      />

      <S.ButtonContainer>
        <S.FinishButton text={t("button")} onClick={() => {}} />
      </S.ButtonContainer>
    </S.Container>
  );
}

export default SupportFundPage;
