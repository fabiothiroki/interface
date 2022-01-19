import React from "react";
import Button from "components/atomics/Button";
import ReactModal from "react-modal";
import * as S from "./styles";
import errorIcon from "./assets/alert.svg";
import { defaultCustomStyles } from "../defaultCustomStyles";

export type Props = {
  visible?: boolean;
  title?: string | null;
  titleColor?: string;
  body?: string | null;
  contentLabel?: string;
  onClose?: () => void;
  customStyles?: ReactModal.Styles;
  buttonText?: string;
};
function ModalError({
  visible = false,
  title = null,
  titleColor,
  body = null,
  onClose = () => {},
  contentLabel,
  customStyles,
  buttonText,
}: Props): JSX.Element {
  return (
    <S.ModalWithIcon
      isOpen={visible}
      onRequestClose={onClose}
      style={customStyles || defaultCustomStyles}
      contentLabel={contentLabel}
      ariaHideApp={false}
    >
      <S.Icon src={errorIcon} />
      <S.Title color={titleColor}>{title}</S.Title>
      <S.Body>{body}</S.Body>
      {buttonText && <Button text={buttonText} onClick={onClose} />}
    </S.ModalWithIcon>
  );
}

export default ModalError;
