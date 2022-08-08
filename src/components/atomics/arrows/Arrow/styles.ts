import styled, { css } from "styled-components";

type Props = {
  disabled: boolean;
};

const Arrow = styled.svg<Props>`
  ${({ fill, disabled }) => css`
    width: 28px;
    height: 56px;
    border-radius: 100% / 50%;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    position: absolute;
    top: 50%;
    background-color: ${disabled ? "rgba(0,0,0,0)" : "rgba(0,0,0,0.6)"};
    fill: ${fill};
    cursor: pointer;
    transform: translateY(-50%);
  `}
`;

export const ArrowRightImage = styled(Arrow)`
  left: auto;
  right: 0px;
`;

export const ArrowLeftImage = styled(Arrow)`
  left: 0px;
`;
