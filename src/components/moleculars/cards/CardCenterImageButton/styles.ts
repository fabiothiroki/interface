import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    background-color: ${theme.colors.ribonWhite};
    flex-direction: column;
    align-items: center;
    padding: 4px;
    border: 1px solid ${theme.colors.ribonWhite};
    box-sizing: border-box;
    border-radius: 16px;
    width: 100%;
    height: 100%;
    max-width: 312px;
    box-shadow: 8px 8px 20px -2px ${theme.colors.ribonShadow};
  `}
`;

export const Image = styled.img`
  ${() => css`
    width: 100%;
    height: auto;
    border-radius: 16px;
  `}
`;

export const ContainerText = styled.div`
  ${() => css`
    padding: 12px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `}
`;

export const Text = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.ribonBlack};
    font-weight: 400;
    text-align: center;
    margin: 8px 0;
  `}
`;
