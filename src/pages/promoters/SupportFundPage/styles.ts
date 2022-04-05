import styled, { css } from "styled-components";
import Button from "components/atomics/Button";

export const Container = styled.div`
  ${() => css`
    display: grid;
    grid-gap: 0px; // grid-template-rows: [line-2] 80px;
    height: 100vh;
    width: 100%;

    @media (min-width: ${({ theme }) => theme.breakpoints.pad}) {
      max-width: 340px;
      display: flex;
      flex-direction: column;

      align-items: center;
      margin: 0 auto;
    }
  `}
`;

export const Title = styled.h1`
  text-transform: uppercase;
  margin: 4px 0;
  font-weight: 900;

  ${({ theme }) => css`
    @media (min-width: ${theme.breakpoints.pad}) {
      font-size: 24px;
    }
  `}
`;

export const ButtonContainer = styled.div`
  ${() => css`
    box-shadow: 0px -4px 4px rgba(24, 86, 105, 0.15);
    height: 80px;
    background-color: white;
    width: 100%;
    padding: 12px 16px;
    align-self: end;
    display: flex;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;

    @media (min-width: ${({ theme }) => theme.breakpoints.pad}) {
      box-shadow: none;
      padding: 0;
      max-width: 340px;
    }
  `}
`;

export const FinishButton = styled(Button)`
  @media (min-width: ${({ theme }) => theme.breakpoints.pad}) {
    height: 56px;
  }
`;
