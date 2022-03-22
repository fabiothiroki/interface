import CardIconText from "components/moleculars/cards/CardIconText";
import letterIcon from "assets/icons/letter-icon.svg";
import { useTranslation } from "react-i18next";
import Button from "components/atomics/Button";
import * as S from "./styles";

function LogOutItem(): JSX.Element {
  const { t } = useTranslation("translation", {
    keyPrefix: "layouts.layoutHeader.LogOutItem",
  });

  function handleLogout() {
    console.log("logout");
  }

  return (
    <S.Container>
      <CardIconText
        text={t("changeLanguageText")}
        icon={letterIcon}
        rightComponent={
          <Button outline text="email" onClick={() => handleLogout()} />
        }
      />
    </S.Container>
  );
}

export default LogOutItem;
