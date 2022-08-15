import styled from "styled-components";

export const Container = styled.div`
  padding: 4px;
  border: 1px solid ${({ theme }) => theme.colors.ribonWhite};
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.ribonWhite};
  box-sizing: border-box;
  box-shadow: 0px 4px 12px 0px ${({ theme }) => theme.colors.ribonShadow};
`;

export const Image = styled.img`
  width: 100%;
  height: 194px;
  border-radius: 16px;
  object-fit: cover;

  @media (min-width: ${({ theme }) => theme.breakpoints.pad}) {
    height: auto;
  }
`;

export const ContainerText = styled.div`
  width: 100%;
  padding: 8px 12px 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.h3`
  margin-bottom: 8px;
  font-weight: 700;
  align-self: flex-start;
  color: ${({ theme }) => theme.colors.ribonBlack};
`;
