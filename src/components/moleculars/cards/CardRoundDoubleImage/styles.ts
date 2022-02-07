import styled, { css } from "styled-components";

export const Container = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `}
`;

export const ImageContainer = styled.div`
  ${() => css`
    width: 100%;
    height: 100%;
    margin: 20px 0;
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;

export const LeftImage = styled.img`
  ${({ theme }) => css`
    position: relative;
    width: 180px;
    height: 180px;
    left: 25px;
    border-radius: 50%;
    border: solid 5px ${theme.colors.ribonWhite};
    filter: drop-shadow(0px 20px 40px ${theme.colors.ribonShadow});
    @media (min-width: ${theme.breakpoints.pad}) {
      width: 200px;
      height: 200px;
    }
  `}
`;

export const RightImage = styled.img`
  ${({ theme }) => css`
    position: relative;
    width: 180px;
    height: 180px;
    right: 25px;
    border-radius: 50%;
    filter: drop-shadow(0px 20px 40px ${theme.colors.ribonShadow});
    @media (min-width: ${theme.breakpoints.pad}) {
      width: 200px;
      height: 200px;
    }
  `}
`;
