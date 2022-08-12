import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    min-height: 140px;
    min-width: 240px;
    padding: 14px;
    border-radius: 16px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    box-sizing: border-box;
    background-color: ${theme.colors.ribonWhite};
    cursor: pointer;
    box-shadow: 8px 8px 20px -2px rgba(192, 192, 192, 0.75);
  `}
`;

export const Image = styled.img`
  height: 130px;
  margin-bottom: 8px;
  border-radius: 200px;
  object-fit: cover;
`;

export const Title = styled.h3`
  margin: 0;
  line-height: 25px;
`;

export const Subtitle = styled.h5`
  ${({ theme }) => css`
    color: ${theme.colors.ribonBlue};
  `}
`;
