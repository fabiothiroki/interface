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
  margin-bottom: 8px;
  text-align: center;
  color: ${({ theme, color }) => color || theme.colors.ribonBlack};
`;

export const FormContainer = styled.div`
  padding: 8px 0px;
`;
export const Input = styled.input`
  height: 39px;
  width: 100%;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.ribonBlue};
  padding: 8px;
  margin-bottom: 8px;
`;

export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.ribonGray};
`;
