import styled from "styled-components";
import { Modal } from "../ModalBlank/styles";

export const ModalWithIcon = styled(Modal)`
  padding: 16px;
`;

export const Icon = styled.img`
  height: 96px;
  margin: -64px auto 8px;
  display: block;
`;

type TitleProps = {
  color?: string;
};

export const Title = styled.h2<TitleProps>`
  text-align: center;
  color: ${({ theme, color }) => color || theme.colors.ribonBlack};
`;

export const Body = styled.h3`
  margin: 8px 0px 20px;
  text-align: center;
  color: ${({ theme }) => theme.colors.darkGray};
`;

export const HighlightedText = styled.p`
  margin-top: 16px;
  text-align: center;
  font-weight: bold;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.ribonBlack};
`;
export const RowsModalRow = styled.div`
  margin-bottom: 28px;
  display: flex;
`;
