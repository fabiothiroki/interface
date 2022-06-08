import styled, { css } from "styled-components";

export const Container = styled.div`
  ${() => css`
    position: relative;
    width: 100%;
    z-index: 999;
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    width: 100%;
    margin-bottom: 12px;
    border: 1px solid ${theme.colors.ribonBlue};
    border-radius: 8px;
    padding: 8px 16px 8px 16px;
  `}
`;

export const OptionContainer = styled.div`
  ${({ theme }) => css`
    padding: 8px 16px;
    opacity: 1;
    z-index: 999;

    &:hover {
      background-color: ${theme.colors.hoverGray};
      cursor: pointer;
    }
  `}
`;

export const OptionText = styled.h4`
  font-weight: bold;
  line-height: 22px;
`;
