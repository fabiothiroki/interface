import styled, { css } from "styled-components";

export const Container = styled.div`
  ${() => css`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
  `}
`;

export const Wrapper = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    height: 100%;
    max-width: 338px;
    gap: 8px;
  `}
`;
