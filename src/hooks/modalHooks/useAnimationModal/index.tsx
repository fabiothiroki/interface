import { MODAL_TYPES } from "contexts/modalContext/helpers";
import { useEffect } from "react";
import Ticket from "assets/icons/ticket.svg";
import SupportersIcon from "assets/icons/supporters.svg";
import UserIcon from "assets/icons/user.svg";
import { useModal } from "../useModal";

export function useAnimationModal(initialState?: boolean) {
  const { show, hide } = useModal({
    type: MODAL_TYPES.MODAL_BLANK,
    props: {
      text: "Receveing Ticket",
      onClose: () => hide(),
      iconOrigin: SupportersIcon,
      textOrigin: "Supportes",
      iconDestiny: UserIcon,
      textDestiny: "User",
      icon: Ticket,
    },
  });

  const showAnimationModal = () => {
    show();
  };

  const hideAnimationModal = () => {
    hide();
  };

  useEffect(() => {
    if (initialState) showAnimationModal();
  }, []);

  return { showAnimationModal, hideAnimationModal };
}
