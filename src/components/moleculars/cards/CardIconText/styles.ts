import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 58px;
  width: 100%;
`;

export const Icon = styled.img`
  margin-right: 10px;
  width: 24px;
  height: 24px;
  object-fit: cover;
`;

export const Text = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.ribonBlack};
`;

export const InsideContainer = styled.div`
  display: flex;
  align-items: center;
`;
