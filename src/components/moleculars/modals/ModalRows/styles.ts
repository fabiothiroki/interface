import styled, { css } from "styled-components";
import { Modal } from "../ModalBlank/styles";

export const ModalWithIcon = styled(Modal)`
  padding: 16px;
`;

export const Icon = styled.img`
  display: block;
  height: 96px;
  margin: -64px auto 8px auto;
`;

export const BiggerIcon = styled.img`
  display: block;
  margin: -64px auto 16px auto;
`;

export const Animation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 50%;
  margin: -100px auto 5px auto;
`;

type TitleProps = {
  color?: string;
};

export const Title = styled.h2<TitleProps>`
  ${({ theme, color }) => css`
    text-align: center;
    color: ${color || theme.colors.ribonBlack};
  `}
`;

export const Body = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.darkGray};
    text-align: center;
    margin: 8px 0px 20px;
  `}
`;

export const RowsModalContainer = styled.div`
  padding-top: 16px;
`;

export const RowsModalSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  padding: 0;
`;

export const RowsModalRow = styled.div`
  display: flex;
  margin-bottom: 28px;
`;

export const RowsModalIcon = styled.img`
  display: flex;
`;

export const RowsModalText = styled.h4`
  display: flex;
  align-items: center;
  line-height: 23px;
`;
