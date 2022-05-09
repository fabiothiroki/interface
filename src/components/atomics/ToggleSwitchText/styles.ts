import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    width: 472px;
    height: 32px;
    left: 236px;
    top: 234px;
    background: ${theme.colors.ribonWhite};
    border: 1px solid ${theme.colors.ribonBlue};
    border-radius: 40px;
  `}
`;

export const Selected = styled.a`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: static;
    width: 236px;
    height: 32px;
    color: ${theme.colors.ribonWhite};
    font-weight: 700;
    font-size: 16px;
    line-height: 160%;
    background: ${theme.colors.ribonBlue};
    border-radius: 16px;
    flex-grow: 1;
  `}
`;

export const Unselected = styled.a`
  ${({ theme }) => css`
    width: 236px;
    height: 32px;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    font-size: 16px;
    line-height: 160%;
    display: flex;
    align-items: center;
    text-align: center;
    color: ${theme.colors.ribonBlue};
    flex-grow: 1;
  `}
`;
