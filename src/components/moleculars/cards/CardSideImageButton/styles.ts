import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 104px;
    max-width: 312px;
    padding: 15px 16px;
    border: 1px solid ${theme.colors.ribonWhite};
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    background-color: ${theme.colors.ribonWhite};
    cursor: pointer;

    &:hover {
      transition: transform 0.4s ease;
      transform: scale(1, 1.1);
    }

    @media (min-width: ${theme.breakpoints.pad}) {
      margin-bottom: 24%;
    }
  `}
`;

export const CardSection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const TextContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-left: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  #left-icon {
    margin-right: 2px;
    position: static;
  }
`;

export const RibonsAmountContainer = styled.div`
  ${({ theme }) => css`
    width: 60%;
    border-radius: 20px;
    position: absolute;
    bottom: 4px;
    background-color: ${theme.colors.ribonWhite};
  `}
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Title = styled.h3`
  ${({ theme }) => css`
    margin-bottom: 4px;
    font-weight: bold;
    text-align: center;
    line-height: 1.4;
    font-size: 16px;
    color: ${theme.colors.ribonBlack};
  `}
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Description = styled.h4`
  ${({ theme }) => css`
    text-align: center;
    line-height: 160%;
    color: ${theme.colors.darkGray};
  `}
`;

export const ImageSection = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  width: 88px;
  height: auto;
`;

export const CounterContainer = styled.span`
  ${({ theme }) => css`
    padding: 2px;
    min-width: 16px;
    border-radius: 100%;
    position: absolute;
    right: 0px;
    top: 8px;
    text-align: center;
    background-color: ${theme.colors.phcYellow2};
    color: ${theme.colors.ribonWhite};
  `}
`;
