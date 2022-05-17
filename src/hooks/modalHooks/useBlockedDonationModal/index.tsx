import { useModalContext } from "contexts/modalContext";
import { useTranslation } from "react-i18next";
import { MODAL_TYPES } from "contexts/modalContext/helpers";
import blockedIcon from "assets/images/il-ticket-gray.svg";
import { useEffect } from "react";

export function useBlockedDonationModal(initialState?: boolean) {
  const { showModal, hideModal } = useModalContext();
  const { t } = useTranslation("translation", {
    keyPrefix: "donations.causesPage",
  });

  const showBlockedDonationModal = () => {
    showModal({
      type: MODAL_TYPES.MODAL_ICON,
      props: {
        title: t("blockedModalTitle"),
        body: t("blockedModalText"),
        primaryButtonText: t("blockedModalButtonText"),
        primaryButtonCallback: hideModal,
        onClose: hideModal,
        icon: blockedIcon,
      },
    });
  };

  const hideBlockedDonationModal = () => {
    hideModal();
  };

  useEffect(() => {
    if (initialState) showBlockedDonationModal();
  }, []);

  return { showBlockedDonationModal, hideBlockedDonationModal };
}
