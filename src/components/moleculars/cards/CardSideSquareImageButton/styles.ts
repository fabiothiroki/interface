import styled, { css } from "styled-components";

export const Container = styled.div`
  ${() => css`
    max-width: 444px;
    height: 100%;
    display: grid;
    grid-template-columns: 2fr 3fr;
    column-gap: 20px;
  `}
`;

export const Title = styled.h3`
  ${() => css``}
`;

export const Text = styled.h4`
  ${() => css`
    font-weight: 400;
  `}
`;

export const RightContainer = styled.div`
  ${() => css``}
`;
export const LeftContainer = styled.div`
  ${() => css``}
`;

export const ImageContainer = styled.div`
  height: 100px;
  width: 100px;
  margin-bottom: 8px;
`;
