import { useTranslation } from "react-i18next";
import * as S from "./styles";

function FundPage(): JSX.Element {
  const { t } = useTranslation("translation", {
    keyPrefix: "promoters.fundPage",
  });
  return (
    <S.Container>
      <S.Title>{t("title")}</S.Title>
      <S.Subtitle>{t("subtitle")}</S.Subtitle>
    </S.Container>
  );
}

export default FundPage;
