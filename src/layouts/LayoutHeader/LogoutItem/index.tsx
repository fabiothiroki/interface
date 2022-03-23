import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useCurrentUser } from "contexts/currentUserContext";
import useNavigation from "hooks/useNavigation";

import CardIconText from "components/moleculars/cards/CardIconText";
import ModalIcon from "components/moleculars/modals/ModalIcon";
import warningIcon from "assets/icons/warning-icon.svg";
import letterIcon from "assets/icons/letter-icon.svg";
import Button from "components/atomics/Button";
import theme from "styles/theme";
import * as S from "./styles";

function LogoutItem(): JSX.Element {
  const { t } = useTranslation("translation", {
    keyPrefix: "layouts.layoutHeader.logoutItem",
  });

  const { logoutCurrentUser, currentUser } = useCurrentUser();
  const [email, setEmail] = useState("");
  const { navigateTo } = useNavigation();

  function handleLogout() {
    console.log("logout");

    logoutCurrentUser();
    navigateTo("/confirm-email");
  }

  useEffect(() => {
    if (currentUser) {
      setEmail(currentUser.email);
    }
  }, [currentUser]);

  return (
    <S.Container>
      <CardIconText
        text={email}
        icon={letterIcon}
        rightComponent={
          <Button
            outline
            text={t("logoutButton")}
            onClick={() => handleLogout()}
            textColor={theme.colors.lgRed}
            borderColor={theme.colors.lgRed}
            round
          />
        }
      />
      <ModalIcon
        visible
        title={t("logoutModalTitle")}
        body={t("logoutModalSubtitle")}
        primaryButtonText={t("confirmModalButton")}
        secondaryButtonText={t("cancelModalButton")}
        icon={warningIcon}
      />
    </S.Container>
  );
}

export default LogoutItem;
