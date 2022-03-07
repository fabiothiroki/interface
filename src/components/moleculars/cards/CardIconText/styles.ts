import styled, { css } from "styled-components";

export const Container = styled.div`
  ${() => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 58px;
    width: 100%;
  `}
`;

export const Icon = styled.img`
  ${() => css`
    margin-right: 10px;
  `}
`;

export const Text = styled.h4`
  ${({ theme }) => css`
    font-weight: 400;
    color: ${theme.colors.ribonBlack};
  `}
`;

export const LeftContainer = styled.div`
  ${() => css`
    display: flex;
    align-items: center;
    width: 67%;
  `}
`;

export const RightContainer = styled.div`
  ${() => css`
    width: 33%;
  `}
`;
