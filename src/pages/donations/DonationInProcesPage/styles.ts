import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;

  ${({ theme }) => css`
    @media (min-width: ${theme.breakpoints.pad}) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  `}
`;

export const BodyContainer = styled.div`
  width: 100%;

  ${({ theme }) => css`
    @media (min-width: ${theme.breakpoints.pad}) {
      display: flex;
      flex-direction: column;
      align-items: center;
      flex-grow: 3;
    }
  `}
`;

export const AnimationContainer = styled.div`
  ${({ theme }) => css`
    @media (min-width: ${theme.breakpoints.pad}) {
      display: flex;
      flex-direction: column;
      align-items: center;
      flex-grow: 1;

  `}
`;

export const AnimationText = styled.h4`
  margin: 4px 0;

  ${({ theme }) => css`
    @media (min-width: ${theme.breakpoints.pad}) {
      color: ${theme.colors.ribonBlue};
    }
  `}
`;

export const ImpactText = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.darkGray};
  `}
`;
