import styled, { css } from "styled-components";
import Button from "components/atomics/Button";
import Divider from "components/atomics/Divider";

export const Container = styled.div`
  ${() => css`
    display: grid;
    grid-gap: 0px; // grid-template-rows: [line-2] 80px;
    height: 100vh;
    width: 100%;
    align-items: center;
  `}
`;

export const Wrapper = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    align-items: center;
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
    margin-top: 16px;
    font-weight: bold;
    font-size: 16px;
    line-height: 160%;
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
  `}
`;

export const HrDivider = styled(Divider)`
  padding: 0 100px;
  width: 50px;
`;

export const FinishButton = styled(Button)`
  margin: 0 auto;
`;
