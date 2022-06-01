import styled, { css } from "styled-components";

export const BillingInformationSectionContainer = styled.div`
  margin-top: 24px;
`;

export const Title = styled.h6`
  ${({ theme }) => css`
    margin: 20px 0;
    font-weight: 700;
    color: ${theme.colors.ribonBlack};
    font-size: 18px;
    line-height: 25.6px;
  `}
`;
