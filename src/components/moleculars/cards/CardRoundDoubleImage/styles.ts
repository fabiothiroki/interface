import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ImageContainer = styled.div`
  height: 180px;
  width: 310px;
  position: relative;
  margin: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: ${({ theme }) => theme.breakpoints.pad}) {
    width: 350px;
    height: 200px;
  }
`;

export const LeftImage = styled.img`
  ${({ theme }) => css`
    width: 180px;
    height: 180px;
    position: absolute;
    left: 0;
    border-radius: 50%;
    border: solid 5px ${theme.colors.ribonWhite};
    object-fit: cover;
    filter: drop-shadow(0px 20px 40px ${theme.colors.ribonShadow});

    @media (min-width: ${theme.breakpoints.pad}) {
      width: 200px;
      height: 200px;
    }
  `}
`;

export const RightImage = styled.img`
  ${({ theme }) => css`
    width: 180px;
    height: 180px;
    border-radius: 50%;
    position: absolute;
    right: 0;
    object-fit: cover;
    z-index: 1;
    filter: drop-shadow(0px 20px 40px ${theme.colors.ribonShadow});

    @media (min-width: ${theme.breakpoints.pad}) {
      width: 200px;
      height: 200px;
    }
  `}
`;
