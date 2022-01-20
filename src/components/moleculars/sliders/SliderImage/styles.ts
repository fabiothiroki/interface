import styled, { css } from "styled-components";

type NgoImageProps = {
  image: string;
};

export const NavigationWrapper = styled.div`
  position: relative;
  [class^="number-slide"],
  [class*=" number-slide"] {
    background: grey;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    color: #fff;
    font-weight: 500;
    height: 200px;
  }
`;

export const SlideImage = styled.div`
  background-image: url(${(props: NgoImageProps) => props.image});
  width: calc(100vw - 16px);
  height: calc(100vw - 16px);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 8px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  max-height: 209px;

  ${({ theme }) => css`
    @media (min-width: ${theme.breakpoints.pad}) {
      border-right: 1px solid white;
      max-width: 344px;
    }
  `}
`;

export const SlideVideo = styled.video`
  ${({ theme }) => css`
    min-width: 100%;
    height: calc(100vw - 16px);
    object-fit: cover;
    max-height: 209px;

    @media (min-width: ${theme.breakpoints.pad}) {
      border-right: 1px solid white;
      max-width: 344px;
    }
  `}
`;

export const PaginationContainer = styled.div`
  align-self: center;
  padding: 4px 8px;
  margin-top: -44px;
  margin-bottom: 23px;
  z-index: 1;
  min-width: 36px;
  height: 27px;
  opacity: 0.7;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const PaginationNumber = styled.h5`
  color: white;
  text-align: center;
`;
