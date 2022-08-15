import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 160px;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.ribonWhite};
  box-shadow: 0px 4px 12px rgba(24, 86, 105, 0.15);
  border-radius: 16px;
  margin-bottom: 16px;
`;

export const Image = styled.img`
  display: block;
  height: 72px;
  width: 72px;
  object-fit: cover;
  border-radius: 50%;
`;

export const Text = styled.p`
  margin-top: 16px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.ribonBlack};
  font-weight: ${({ theme }) => theme.font.normal};
  text-align: center;
`;
