import { defaultCustomStyles } from "../defaultCustomStyles";
import * as S from "./styles";

export type Props = {
  visible?: boolean;
  contentLabel?: string;
  children?: JSX.Element[] | null;
  onClose?: () => void;
};

function ModalBlank({
  visible = false,
  children = null,
  onClose = () => {},
  contentLabel,
}: Props): JSX.Element {
  return (
    <S.BlankModal
      isOpen={visible}
      onRequestClose={onClose}
      style={defaultCustomStyles}
      contentLabel={contentLabel}
      ariaHideApp={false}
    >
      {children}
    </S.BlankModal>
  );
}

export default ModalBlank;
