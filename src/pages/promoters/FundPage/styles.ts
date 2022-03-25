import styled, { css } from "styled-components";

export const Container = styled.div`
  ${() => css``}
`;

export const Title = styled.h1`
  text-transform: uppercase;
  margin: 4px 0;
  font-weight: 900;

  ${({ theme }) => css`
    @media (min-width: ${theme.breakpoints.pad}) {
      font-size: 36px;
    }
  `}
`;

export const Subtitle = styled.p`
  ${({ theme }) => css`
    font-weight: 700;
    font-size: 14px;
    color: ${theme.colors.darkGray};
    margin-bottom: 28px;

    @media (min-width: ${theme.breakpoints.pad}) {
      margin: 8px 0 28px 0;
    }
  `}
`;

export const SectionTitle = styled.p`
  ${({ theme }) => css`
    font-weight: 700;
    color: ${theme.colors.ribonBlack};

    @media (min-width: ${theme.breakpoints.pad}) {
      margin: 8px 0;
    }
  `}
`;
