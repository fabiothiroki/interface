import { useCallback, useEffect, useState } from "react";
import Ticket from "assets/images/ticket.svg";
import ModalIcon from "components/moleculars/modals/ModalIcon";
import { useTranslation } from "react-i18next";
import { logEvent } from "services/analytics";
import useNavigation from "hooks/useNavigation";
import NonProfit from "types/entities/NonProfit";
import useNonProfits from "hooks/apiHooks/useNonProfits";
import Loader from "components/atomics/Loader";
import { logError } from "services/crashReport";
import { useLocation } from "react-router-dom";
import useUsers from "hooks/apiHooks/useUsers";
import { useCurrentUser } from "contexts/currentUserContext";
import { useIntegrationId } from "hooks/useIntegrationId";
import useIntegration from "hooks/apiHooks/useIntegration";
import { useModal } from "hooks/modalHooks/useModal";
import { MODAL_TYPES } from "contexts/modalContext/helpers";
import * as S from "./styles";
import ConfirmEmail from "./ConfirmEmail";
import DonationTicketModal from "./DonationTicketModal";
import NonProfitsList from "./NonProfitsList";

type LocationStateType = {
  failedDonation: boolean;
  blockedDonation: boolean;
};

function CausesPage(): JSX.Element {
  const [confirmModalVisible, setConfirmModalVisible] = useState(false);
  const [chosenNonProfit, setChosenNonProfit] = useState<NonProfit>();
  const integrationId = useIntegrationId();
  const { integration } = useIntegration(integrationId);

  const { t } = useTranslation("translation", {
    keyPrefix: "donations.causesPage",
  });
  const { state } = useLocation<LocationStateType>();

  const { hide: closeWarningModal } = useModal(
    {
      type: MODAL_TYPES.MODAL_ERROR,
      props: {
        title: t("errorModalTitle"),
        body: t("errorModalText"),
        buttonText: t("errorModalButtonText"),
        onClose: () => closeWarningModal(),
        warning: true,
      },
    },
    state?.failedDonation,
  );

  const { navigateTo } = useNavigation();
  const { nonProfits, isLoading } = useNonProfits();
  const { findOrCreateUser } = useUsers();
  const { signedIn, setCurrentUser, currentUser } = useCurrentUser();

  useEffect(() => {
    logEvent("donateIntroDial_view");
  }, []);

  const closeConfirmModal = useCallback(() => {
    setConfirmModalVisible(false);
  }, []);

  const donate = useCallback(
    async (email: string) => {
      try {
        if (!signedIn) {
          const user = await findOrCreateUser(email);
          setCurrentUser(user);
        }
        navigateTo({
          pathname: "/donation-in-process",
          state: { nonProfit: chosenNonProfit, integration },
        });
      } catch (e) {
        logError(e);
      }
      logEvent("donateConfirmDialButton_click", {
        causeId: chosenNonProfit?.id,
      });
    },
    [chosenNonProfit],
  );

  return (
    <S.Container>
      <DonationTicketModal />
      {signedIn ? (
        <ModalIcon
          icon={Ticket}
          title={t("confirmModalAuthTitle")}
          body={`${chosenNonProfit?.impactByTicket} ${chosenNonProfit?.impactDescription}`}
          primaryButtonText={t("confirmModalPrimaryButtonText")}
          primaryButtonCallback={() => {
            if (currentUser) donate(currentUser.email);
          }}
          secondaryButtonText={t("confirmModalSecondaryButtonText")}
          secondaryButtonCallback={closeConfirmModal}
          visible={confirmModalVisible}
          onClose={closeConfirmModal}
          roundIcon
        />
      ) : (
        <ConfirmEmail
          onFormSubmit={(values) => {
            donate(values.email);
          }}
          visible={confirmModalVisible}
          icon={Ticket}
          title={t("confirmModalTitle")}
          primaryButtonText={t("confirmModalPrimaryButtonText")}
          secondaryButtonText={t("confirmModalSecondaryButtonText")}
          secondaryButtonCallback={closeConfirmModal}
        />
      )}

      <S.BodyContainer>
        <S.Title>{t("pageTitle")}</S.Title>
        {isLoading ? (
          <Loader />
        ) : (
          <S.CausesContainer>
            {nonProfits && (
              <NonProfitsList
                nonProfits={nonProfits}
                setChosenNonProfit={setChosenNonProfit}
                setConfirmModalVisible={setConfirmModalVisible}
              />
            )}
          </S.CausesContainer>
        )}
      </S.BodyContainer>
    </S.Container>
  );
}

export default CausesPage;
