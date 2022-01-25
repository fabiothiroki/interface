import styled, { css } from "styled-components";

export const Container = styled.div`
  ${() => css`
    max-width: 344px;
    height: 100%;
    display: flex;
  `}
`;

export const Title = styled.h3`
  ${() => css``}
`;

export const Text = styled.h4`
  ${() => css`
    font-weight: 400;
    line-height: 24px;
    margin-top: 4px;
  `}
`;

export const RightContainer = styled.div`
  ${() => css``}
`;
export const LeftContainer = styled.div`
  ${() => css`
    margin-right: 14px;
  `}
`;

export const ImageContainer = styled.div`
  height: 96px;
  width: 96px;
  margin-bottom: 8px;
`;
