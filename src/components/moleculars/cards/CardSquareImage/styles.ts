import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: stretch;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.ribonWhite};
  cursor: pointer;
  box-shadow: 8px 8px 20px -2px rgba(192, 192, 192, 0.75);
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 16px;
`;
