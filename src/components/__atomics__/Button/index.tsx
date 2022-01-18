import React, { ButtonHTMLAttributes } from "react";
import { ReactComponent as RibonIcon } from "assets/icons/ribon.svg";
import theme from "styles/theme";
import * as S from "./styles";

export type onClickType = () => void;

export type Props = {
  text: string;
  textColor?: string;
  backgroundColor?: string;
  borderColor?: string;
  ribons?: boolean;
  ribonsColor?: string;
  leftIcon?: string;
  altLeftIconText?: string;
  onClick: onClickType;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  text,
  textColor,
  backgroundColor,
  borderColor,
  ribons,
  ribonsColor,
  leftIcon,
  onClick,
  altLeftIconText = "left icon",
  ...props
}: Props): JSX.Element {
  return (
    <S.Container
      textColor={textColor}
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      ribonsColor={ribonsColor}
      onClick={onClick}
      leftIcon={leftIcon}
      {...props}
    >
      {leftIcon && <img id="left-icon" src={leftIcon} alt={altLeftIconText} />}
      {text}
      {ribons && <RibonIcon />}
    </S.Container>
  );
}

// TODO: remove default props
Button.defaultProps = {
  textColor: "white",
  backgroundColor: theme.colors.ribonBlue,
  borderColor: null,
  ribons: false,
  ribonsColor: theme.colors.ribonBlue,
};
