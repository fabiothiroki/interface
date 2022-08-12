import styled, { css } from "styled-components";
import { Modal } from "../ModalBlank/styles";

export const ModalWithIcon = styled(Modal)`
  padding: 16px;
`;

export const Icon = styled.img`
  height: 80px;
  margin: -64px auto 8px;
  display: block;
`;

export const BiggerIcon = styled(Icon)`
  height: 100px;
`;

export const RoundIcon = styled(Icon)`
  border-radius: 70px;
  object-fit: cover;
`;

type TitleProps = {
  color?: string;
};

export const Title = styled.h2<TitleProps>`
  ${({ theme, color }) => css`
    margin-bottom: 16px;
    text-align: center;
    color: ${color || theme.colors.ribonBlack};
  `}
`;

export const Body = styled.h3`
  ${({ theme }) => css`
    margin: 0px 0px 20px;
    color: ${theme.colors.darkGray};
    text-align: center;
  `}
`;

export const HighlightedText = styled.p`
  ${({ theme }) => css`
    margin-top: 16px;
    font-weight: bold;
    text-align: center;
    font-size: 16px;
    color: ${theme.colors.ribonBlack};
  `}
`;

export const RowsModalRow = styled.div`
  margin-bottom: 28px;
  display: flex;
`;
