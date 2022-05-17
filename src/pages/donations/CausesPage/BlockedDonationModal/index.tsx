import ModalIcon from "components/moleculars/modals/ModalIcon";
import { useTranslation } from "react-i18next";
import blockedIcon from "assets/images/il-ticket-gray.svg";

type Props = {
  blockedModalVisible: boolean;
  closeBlockedModal: () => void;
};

function BlockedDonationModal({
  blockedModalVisible,
  closeBlockedModal,
}: Props): JSX.Element {
  const { t } = useTranslation("translation", {
    keyPrefix: "donations.causesPage",
  });

  return (
    <ModalIcon
      visible={blockedModalVisible}
      title={t("blockedModalTitle")}
      body={t("blockedModalText")}
      primaryButtonText={t("blockedModalButtonText")}
      primaryButtonCallback={closeBlockedModal}
      onClose={closeBlockedModal}
      icon={blockedIcon}
    />
  );
}

export default BlockedDonationModal;
