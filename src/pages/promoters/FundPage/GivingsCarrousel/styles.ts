import styled, { css } from "styled-components";

export const Container = styled.div`
  ${() => css``}
`;

export const LinkContainer = styled.div`
  ${() => css``}
`;

export const CardCarousel = styled.div`
  ${({ theme }) => css`
    @media (min-width: ${theme.breakpoints.pad}) {
      max-width: 206px;
    }
  `}
`;

export const ValueGivingText = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.ribonBlue};
    font-size: 24px;
    font-weight: 900;
    margin-bottom: 8px;
  `}
`;

export const LinkSection = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.ribonBlack};
    font-size: 12px;
    margin-bottom: 8px;
    justify-content: space-between;
    display: flex;
  `}
`;

export const DateGivingText = styled.p`
  ${({ theme }) => css`
    font-style: italic;
    font-size: 12px;
    color: ${theme.colors.darkGray};
  `}
`;

export const FundTextCoin = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.ribonBlue};
    font-size: 14px;
    font-weight: 400;
  `}
`;
