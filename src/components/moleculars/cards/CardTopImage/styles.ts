import styled from "styled-components";

export const Container = styled.div`
  width: 160px;
  margin-bottom: 16px;
  padding: 16px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.ribonWhite};
  box-shadow: 0 4px 12px ${({ theme }) => theme.colors.ribonShadow};
`;

export const Image = styled.img`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  display: block;
  object-fit: cover;
`;

export const Text = styled.p`
  margin-top: 16px;
  font-weight: ${({ theme }) => theme.font.normal};
  font-size: 14px;
  text-align: center;
  color: ${({ theme }) => theme.colors.ribonBlack};
`;
