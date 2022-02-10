import styled, { css } from "styled-components";

export const Container = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 8%;
  `}
`;

export const AnimationContainer = styled.div`
  ${({ theme }) => css`
      display: flex;
      flex-direction: column;
      align-items: center;

    @media (min-width: ${theme.breakpoints.pad}) {
      flex-grow: 1;
      width: 60%;
  }
      @media (min-width: ${theme.breakpoints.desktop}) {
      flex-grow: 1;
      width: 30%;
  `}
`;

export const LoaderContainer = styled.div`
  ${() => css`
    display: flex;
    margin: 10px 7px;
  `}
`;

export const DividerContainer = styled.span`
  ${() => css`
    margin: 20px 156px;
    text-align: center;
  `}
`;

export const AnimationText = styled.h2`
  ${({ theme }) => css`
    margin: 6px 0;
    color: ${theme.colors.ribonBlue};
    display: flex;
    flex-direction: column;
    align-items: center;
  `}
`;

export const ImpactText = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.ribonBlack};
    text-align: center;
    margin: 60px 20px;
  `}
`;
