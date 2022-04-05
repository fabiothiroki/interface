import { useTranslation } from "react-i18next";
import * as S from "./styles";

function SupportFundPage(): JSX.Element {
  const { t } = useTranslation("translation", {
    keyPrefix: "promoters.supportFundPage",
  });

  return (
    <S.Container>
      <S.Title>{t("title")}</S.Title>

      <S.ButtonContainer>
        <S.FinishButton text={t("button")} onClick={() => {}} />
      </S.ButtonContainer>
    </S.Container>
  );
}

export default SupportFundPage;
