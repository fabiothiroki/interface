import React from "react";
import theme from "styles/theme";
import LottieAnimation from "components/atomics/LottieAnimation";
import Button, { onClickType } from "components/atomics/Button";
import errorIcon from "./assets/alert.svg";
import * as S from "./styles";

type RowProps = {
  id: number;
  icon: string;
  text: string;
};

export type Props = {
  visible?: boolean;
  position?: "center" | "start" | "end";
  overlayBackgroundColor?: "rgba(0, 68, 89, 0.4)" | "transparent";
  overlayJustifyContent?: "center" | "flex-end";
  modalBorder?: string;
  marginTop?: number;
  type?: "error" | "icon" | "image" | "blank" | "animation" | "rows";
  image?: string | null;
  rowsContent?: Record<any, any> | null;
  icon?: string | null;
  biggerIcon?: boolean;
  title?: string | null;
  titleColor?: string;
  body?: string | null;
  primaryButtonText?: string | null;
  primaryButtonLeftIcon?: string | undefined;
  primaryButtonLink?: string;
  primaryButtonTextColor?: string;
  primaryButtonColor?: string;
  primaryButtonBorderColor?: string;
  primaryButtonCallback?: onClickType;
  secondaryButtonText?: string | null;
  secondaryButtonLeftIcon?: string | undefined;
  secondaryButtonLink?: string;
  secondaryButtonTextColor?: string;
  secondaryButtonColor?: string;
  secondaryButtonBorderColor?: string;
  secondaryButtonCallback?: onClickType;
  contentLabel?: string;
  children?: JSX.Element[] | null;
  onClose?: () => void;
  highlightedText?: string;
  zIndex?: number;
  animationData?: Record<any, any>;
};

function Modal({
  visible = false,
  position = "center",
  overlayBackgroundColor = "rgba(0, 68, 89, 0.4)",
  overlayJustifyContent = "center",
  modalBorder = "",
  marginTop = 0,
  image = null,
  rowsContent = null,
  icon = null,
  biggerIcon = false,
  title = null,
  titleColor,
  body = null,
  children = null,
  type = "blank",
  primaryButtonText = null,
  primaryButtonLeftIcon = undefined,
  primaryButtonTextColor = "white",
  primaryButtonColor = theme.colors.ribonBlue,
  primaryButtonBorderColor,
  secondaryButtonText = null,
  secondaryButtonLeftIcon = undefined,
  secondaryButtonTextColor = theme.colors.darkGray,
  secondaryButtonBorderColor,
  secondaryButtonColor = "white",
  // TODO: discuss with de team to modify linter's rules
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  primaryButtonCallback = () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  secondaryButtonCallback = () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClose = () => {},
  contentLabel,
  highlightedText,
  zIndex = 3,
  animationData,
}: Props): JSX.Element {
  const customStyles = {
    overlay: {
      backgroundColor: overlayBackgroundColor,
      display: "flex",
      alignItems: position,
      justifyContent: overlayJustifyContent,
      zIndex,
    },
    content: {
      border: modalBorder,
      marginTop,
    },
  };

  function renderPrimaryButton() {
    if (primaryButtonText) {
      return (
        <Button
          leftIcon={primaryButtonLeftIcon}
          text={primaryButtonText}
          textColor={primaryButtonTextColor}
          backgroundColor={primaryButtonColor}
          borderColor={primaryButtonBorderColor}
          onClick={primaryButtonCallback}
        />
      );
    }

    return null;
  }

  function renderSecondaryButton() {
    if (secondaryButtonText) {
      <Button
        leftIcon={secondaryButtonLeftIcon}
        text={secondaryButtonText}
        textColor={secondaryButtonTextColor}
        backgroundColor={secondaryButtonColor}
        onClick={secondaryButtonCallback}
        borderColor={secondaryButtonBorderColor}
      />;
    }

    return null;
  }

  switch (type) {
    case "error":
      return (
        <S.ModalWithIcon
          isOpen={visible}
          onRequestClose={onClose}
          style={customStyles}
          contentLabel={contentLabel}
          ariaHideApp={false}
        >
          <S.Icon src={errorIcon} />
          <S.Title color={titleColor}>
            {title || "Temos um problema aqui..."}
          </S.Title>
          <S.Body>
            {body || "Tivemos um problema no app, tente novamente em breve"}
          </S.Body>
          <Button text="Voltar" onClick={onClose} />
        </S.ModalWithIcon>
      );
    case "icon":
      return (
        <S.ModalWithIcon
          isOpen={visible}
          onRequestClose={onClose}
          style={customStyles}
          contentLabel={contentLabel}
          ariaHideApp={false}
        >
          {biggerIcon
            ? icon && <S.BiggerIcon src={icon} />
            : icon && <S.Icon src={icon} />}
          {title && <S.Title color={titleColor}>{title}</S.Title>}
          {body && (
            <S.Body>
              {body}
              {highlightedText && (
                <S.HighlightedText>{highlightedText}</S.HighlightedText>
              )}
            </S.Body>
          )}
          {renderPrimaryButton()}
          {renderSecondaryButton()}
        </S.ModalWithIcon>
      );
    case "image":
      return (
        <S.ModalWithImage
          isOpen={visible}
          onRequestClose={onClose}
          style={customStyles}
          contentLabel={contentLabel}
          ariaHideApp={false}
        >
          {image && <S.Image src={image} />}
          <S.Container>
            <S.Title color={titleColor}>{title}</S.Title>
            <S.Body>{body}</S.Body>
            {renderPrimaryButton()}
            {renderSecondaryButton()}
          </S.Container>
        </S.ModalWithImage>
      );
    case "animation":
      return (
        <S.ModalWithIcon
          isOpen={visible}
          onRequestClose={onClose}
          style={customStyles}
          contentLabel={contentLabel}
          ariaHideApp={false}
        >
          {animationData && (
            <S.Animation>
              <LottieAnimation
                animationData={animationData}
                width={200}
                height={150}
              />
            </S.Animation>
          )}
          <S.Container>
            <S.Title color={titleColor}>{title}</S.Title>
            <S.Body>{body}</S.Body>
            {renderPrimaryButton()}
            {renderSecondaryButton()}
          </S.Container>
        </S.ModalWithIcon>
      );
    case "rows":
      return (
        <S.ModalWithIcon
          isOpen={visible}
          onRequestClose={onClose}
          style={customStyles}
          contentLabel={contentLabel}
          ariaHideApp={false}
        >
          {animationData && (
            <S.Animation>
              <LottieAnimation
                animationData={animationData}
                width={200}
                height={150}
              />
            </S.Animation>
          )}
          <S.RowsModalContainer>
            <S.Title color={titleColor}>{title}</S.Title>
            <S.RowsModalSection>
              {rowsContent &&
                rowsContent.map((row: RowProps) => (
                  <S.RowsModalRow key={row.id}>
                    {row.icon && <S.RowsModalIcon src={row.icon} />}
                    <S.RowsModalText>{row.text}</S.RowsModalText>
                  </S.RowsModalRow>
                ))}
            </S.RowsModalSection>
            {renderPrimaryButton()}
            {renderSecondaryButton()}
          </S.RowsModalContainer>
        </S.ModalWithIcon>
      );
    default:
      return (
        <S.BlankModal
          isOpen={visible}
          onRequestClose={onClose}
          style={customStyles}
          contentLabel={contentLabel}
          ariaHideApp={false}
        >
          {children}
        </S.BlankModal>
      );
  }
}

export default Modal;
