import Ticket from "assets/images/ticket.svg";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import useDonations from "hooks/apiHooks/useDonations";
import { useCurrentUser } from "contexts/currentUserContext";
import { logError } from "services/crashReport";
import useNavigation from "hooks/useNavigation";
import NonProfit from "types/entities/NonProfit";
import Integration from "types/entities/Integration";
import ConfirmEmail from "../ConfirmEmail";
import ConfirmDonationModal from "../ConfirmDonationModal";

type Props = {
  chosenNonProfit: NonProfit;
  integration: Integration;
  donateTicket: (email: string) => void;
  confirmModalVisible: boolean;
  donationInProcessModalVisible: boolean;
  setConfirmModalVisible: (visible: boolean) => void;
  setDonationInProcessModalVisible: (visible: boolean) => void;
  closeConfirmModal: () => void;
};
function ConfirmSection({
  chosenNonProfit,
  integration,
  donateTicket,
  confirmModalVisible,
  donationInProcessModalVisible,
  setConfirmModalVisible,
  setDonationInProcessModalVisible,
  closeConfirmModal,
}: Props): JSX.Element {
  const { t } = useTranslation("translation", {
    keyPrefix: "donations.causesPage",
  });

  const { donate } = useDonations();
  const { navigateTo } = useNavigation();
  const { signedIn } = useCurrentUser();

  async function handleDonate(email: string) {
    setDonationInProcessModalVisible(false);
    if (integration && chosenNonProfit) {
      try {
        await donate(integration?.id, chosenNonProfit?.id, email);
        navigateTo({
          pathname: "/donation-done",
          state: { nonProfit: chosenNonProfit },
        });
      } catch (e: any) {
        const newState =
          e.response.status === 403
            ? { blockedDonation: true }
            : { failedDonation: true };
        navigateTo({ pathname: "/", state: newState });
        window.location.reload();
        logError(e);
      }
    }
  }

  const showDonationInProcessModal = useCallback(async (email: string) => {
    setConfirmModalVisible(false);
    setDonationInProcessModalVisible(true);
    setTimeout(async () => {
      await handleDonate(email);
    }, 3000);
  }, []);

  return signedIn ? (
    <ConfirmDonationModal
      donate={showDonationInProcessModal}
      chosenNonProfit={chosenNonProfit}
      confirmModalVisible={confirmModalVisible}
      donationInProcessModalVisible={donationInProcessModalVisible}
      setConfirmModalVisible={setConfirmModalVisible}
    />
  ) : (
    <ConfirmEmail
      onFormSubmit={(values) => {
        donateTicket(values.email);
        showDonationInProcessModal(values.email);
      }}
      visible={confirmModalVisible}
      icon={Ticket}
      title={t("confirmModalTitle")}
      primaryButtonText={t("confirmModalPrimaryButtonText")}
      secondaryButtonText={t("confirmModalSecondaryButtonText")}
      secondaryButtonCallback={closeConfirmModal}
    />
  );
}

export default ConfirmSection;
