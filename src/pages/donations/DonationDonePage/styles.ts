import styled, { css } from "styled-components";

export const Container = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    width: 100%;
    padding: 20px;
  `}
`;

export const Title = styled.h5`
  ${() => css`
    color: ${({ theme }) => theme.colors.ribonBlack};
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    line-height: 160%;
  `}
`;

export const Subtitle = styled.h6`
  ${() => css`
    color: ${({ theme }) => theme.colors.darkGray};
    margin-top: 8px;
    font-weight: bold;
    font-size: 16px;
    line-height: 160%;
  `}
`;
