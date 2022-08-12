import styled, { css } from "styled-components";

export const Container = styled.div`
  ${() => css`
    width: 100%;
    height: 82px;
    padding: 16px;
    border-radius: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 4px 12px rgba(24, 86, 105, 0.1);
  `}
`;

export const Title = styled.h3`
  ${({ theme }) => css`
    font-weight: 700;
    color: ${theme.colors.ribonBlack};
  `}
`;

export const Subtitle = styled.p`
  ${({ theme }) => css`
    font-size: 14px;
    color: ${theme.colors.darkGray};
  `}
`;

export const LeftContainer = styled.div`
  ${() => css`
    width: 67%;
  `}
`;

export const RightContainer = styled.div`
  ${() => css`
    width: 33%;
  `}
`;
