import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 16px;

    width: 100%;
    height: 88px;
    padding: 20px 16px;

    background-color: ${theme.colors.ribonWhite};
    box-shadow: 0px 4px 12px rgba(24, 86, 105, 0.15);
    border-radius: 16px;
  `}
`;

export const Image = styled.img`
  width: 56px;
  height: 56px;
  object-fit: cover;
  border-radius: 50%;
`;

export const Text = styled.p`
  ${({ theme }) => css`
    font-size: 14px;
    color: ${theme.colors.ribonBlack};
    font-weight: ${theme.font.normal};
    line-height: 24px;
    max-width: 224px;
  `}
`;
