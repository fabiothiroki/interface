import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 82px;
  padding: 16px;
  border-radius: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 4px 12px rgba(24, 86, 105, 0.1);
`;

export const Title = styled.h3`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.ribonBlack};
`;

export const Subtitle = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.darkGray};
`;

export const LeftContainer = styled.div`
  width: 67%;
`;

export const RightContainer = styled.div`
  width: 33%;
`;
