import styled, { css } from "styled-components";

export const Container = styled.div`
  ${() => css``}
`;

export const ImageContainer = styled.div`
  ${() => css`
    width: 100%;
    height: 100%;
  `}
`;

export const LeftImage = styled.img`
  ${({ theme }) => css`
    position: relative;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: solid 5px ${theme.colors.ribonWhite};
    filter: drop-shadow(0px 20px 40px ${theme.colors.ribonShadow});
  `}
`;

export const RightImage = styled.img`
  ${({ theme }) => css`
    position: relative;
    width: 200px;
    height: 200px;
    right: 50px;
    border-radius: 50%;
    filter: drop-shadow(0px 20px 40px ${theme.colors.ribonShadow});
  `}
`;
