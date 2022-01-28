import styled, { css } from "styled-components";

export const Container = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    gap: 40px;
  `}
`;
