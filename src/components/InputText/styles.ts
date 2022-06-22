import styled, { css } from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
`;

export const Input = styled.div`
  ${({ theme }) => css`
    box-sizing: border-box;
    border-radius: 8px;
    width: 100%;
    max-width: 472px;
    height: 40px;
    margin-bottom: 12px;
    display: inline-block;
    color: ${theme.colors.ribonBlack};
    border: 1px solid ${theme.colors.darkGray};
    position: relative;

    label {
      position: relative;
      top: -9px;
      left: 10px;
      font-size: 12px;
      text-align: center;
      padding: 0 2px;
      font-weight: bold;
      display: inline;
      background-color: ${theme.colors.bgGray};
      color: ${theme.colors.darkGray};

      @media (min-width: ${theme.breakpoints.desktop}) {
        top: -8px;
      }
    }

    input {
      padding: 0 10px;
      color: ${theme.colors.ribonBlack};
      border: none;
      position: relative;
      top: -5px;
      box-sizing: border-box;
      border-radius: 5px;
      font-family: Lato;
      font-weight: bold;
      font-size: 14px;
      line-height: 20px;
      width: 100%;

      @media (min-width: ${theme.breakpoints.desktop}) {
        top: -8px;
      }

      &:placeholder-shown {
        border-color: ${theme.colors.ribonBlue};
      }
    }
  `}
`;
