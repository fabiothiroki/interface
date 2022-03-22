import CardIconText from "components/moleculars/cards/CardIconText";
import letterIcon from "assets/icons/letter-icon.svg";
import { useTranslation } from "react-i18next";
import { useCurrentUser } from "contexts/currentUserContext";
import Button from "components/atomics/Button";
import * as S from "./styles";

function LogoutItem(): JSX.Element {
  const { t } = useTranslation("translation", {
    keyPrefix: "layouts.layoutHeader.LogoutItem",
  });

  const { logoutCurrentUser } = useCurrentUser();

  function handleLogout() {
    console.log("logout");

    logoutCurrentUser();
  }

  return (
    <S.Container>
      <CardIconText
        text="pegar@email no contexto do usuário"
        icon={letterIcon}
        rightComponent={
          <Button
            outline
            text={t("LogoutButton")}
            onClick={() => handleLogout()}
          />
        }
      />
    </S.Container>
  );
}

export default LogoutItem;
