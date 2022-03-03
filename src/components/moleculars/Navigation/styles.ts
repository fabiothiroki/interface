import styled, { css } from "styled-components";
import theme from "styles/theme";
import { Link } from "react-router-dom";

type Props = {
  disabled: boolean;
};

export const Container = styled.div`
  ${() => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 50px 0px 50px;
  width: 80px;
  background: #FFFFFF;
  box-shadow: 0px 4px 12px rgba(24, 86, 105, 0.15);
  `}
`;

export const ContainerMobile = styled.div`
  ${() => css`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  position: absolute;
  width: 100%;
  align-self: flex-end;
  background: #FFFFFF;
  box-shadow: 0px 4px 12px rgba(24, 86, 105, 0.15);
  `}
`;

export const Title = styled.p`
  ${({ disabled }: Props) => css`
    color: ${disabled ? theme.colors.darkGray : theme.colors.ribonBlack};
    text-decoration: none;
  `}
`;

export const StyledLink = styled(Link)`
  ${() => css`
    text-decoration: none;
    display:flex;
    flex-direction: column;
    padding: 20px;
  `}
`;

export const Icon = styled.img`
  ${() => css`
    height: 32px;
  `}
`;
