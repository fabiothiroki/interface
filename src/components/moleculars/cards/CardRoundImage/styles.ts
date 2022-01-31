import styled, { css } from "styled-components";

export const Container = styled.div`
  ${() => css`
    position: relative;
    width: 100%;
  `}
`;
export const RightImage = styled.img`
  ${({ theme }) => css`
    position: absolute;
    width: 168px;
    height: 168px;
    left: 800px;
    top: 233px;
    border-radius: 50%;
    border: solid 5px ${theme.colors.ribonWhite};

    filter: drop-shadow(0px 20px 40px ${theme.colors.ribonShadow});
    transform: matrix(-1, 0, 0, 1, 0, 0);
  `}
`;
export const LeftImage = styled.img`
  ${({ theme }) => css`
    position: absolute;
    width: 168px;
    height: 168px;
    left: 480px;
    top: 233px;
    border-radius: 50%;
    border: solid 5px ${theme.colors.ribonWhite};

    filter: drop-shadow(0px 20px 40px ${theme.colors.ribonShadow});
  `}
`;
export const CenterImage = styled.img`
  ${({ theme }) => css`
    position: absolute;
    width: 256px;
    height: 256px;
    left: 592px;
    top: 173px;
    border-radius: 50%;
    border: solid 5px ${theme.colors.ribonWhite};

    filter: drop-shadow(0px 20px 40px ${theme.colors.ribonShadow});
  `}
`;
export const BottomImageContainer = styled.div`
  ${({ theme }) => css`
    position: absolute;
    width: 80px;
    height: 80px;
    left: 680px;
    top: 389px;
    border-radius: 50%;
    background: ${theme.colors.ribonBlue};
  `}
`;
export const BottomImage = styled.img`
  ${() => css`
    position: absolute;
    width: 56px;
    height: 48px;
    margin: 16px 12px 16px 12px;
  `}
`;
