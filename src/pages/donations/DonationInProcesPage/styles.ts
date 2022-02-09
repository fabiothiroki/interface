import styled, { css } from "styled-components";

export const Container = styled.div`
  min-height: 640px;

  ${({ theme }) => css`
    @media (min-width: ${theme.breakpoints.pad}) {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  `}
`;

export const BodyContainer = styled.div`
  width: 100%;
  padding: 70px;
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
      display: flex;
      flex-direction: column;
      align-items: center;

    @media (min-width: ${theme.breakpoints.pad}) {
      flex-grow: 1;
      height: 52px;
      width: 320px;
  `}
`;

export const LoaderContainer = styled.div`
  ${() => css`
    display: flex;
    margin-right: 7px;
     {
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
