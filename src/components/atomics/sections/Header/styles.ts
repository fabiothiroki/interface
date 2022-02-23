import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    height: 56px;
    width: 100%;

    @media (min-width: ${theme.breakpoints.pad}) {
      justify-content: center;
      height: 128px;
      margin-left: 0;
    }
  `}
`;

export const Logo = styled.img`
  ${({ theme }) => css`
    @media (min-width: ${theme.breakpoints.pad}) {
      height: 32px;
      width: auto;
      object-fit: contain;
    }
  `}
`;

export const Divider = styled.span`
  ${({ theme }) => css`
    font-weight: 600;
    color: ${theme.colors.lightGray};
    margin: 0 8px;
  `}
`;
