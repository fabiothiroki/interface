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
      margin: 20px 460px 100px 460px;
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
      height: 52px;
      width: 320px;
  `}
`;

export const LoaderContainer = styled.div`
  ${({ theme }) => css`
    @media (min-width: ${theme.breakpoints.pad}) {
      display: flex;
  `}
`;

export const DividerContainer = styled.span`
  ${() => css`
    margin: 24px 20px;
    text-align: center;
  `}
`;

export const AnimationText = styled.h2`
  margin: 4px 0;
  ${({ theme }) => css`
    @media (min-width: ${theme.breakpoints.pad}) {
      color: ${theme.colors.ribonBlue};
      text-align: center;
    }
  `}
`;

export const ImpactText = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.darkGray};
    text-align: center;
    margin-top: 20px;
  `}
`;
