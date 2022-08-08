import styled, { css } from "styled-components";

type Props = {
  textColor?: string;
  backgroundColor?: string;
  borderColor?: string;
  ribonsColor?: string;
  leftIcon?: string;
  disabled?: boolean;
  borderRadius?: string;
};

export const Container = styled.button`
  ${({
    disabled,
    textColor,
    borderColor,
    backgroundColor,
    borderRadius,
  }: Props) => css`
    width: 100%;
    max-height: 40px;
    border: 1px solid black;
    border-radius: ${borderRadius || "8px"};
    padding: 10px 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    font-size: 16px;
    font-weight: bold;
    background-color: ${backgroundColor};
    border-color: ${borderColor || backgroundColor};
    color: ${textColor};
    opacity: ${disabled ? 0.5 : 1};

    media :hover {
      cursor: pointer;
    }

    #left-icon {
      margin-right: 4px;
    }

    #right-icon {
      margin-left: 4px;
    }

    svg {
      margin-left: 2px;

      path {
        fill: ${(props: Props) => props.ribonsColor};
      }
    }
  `}
`;
