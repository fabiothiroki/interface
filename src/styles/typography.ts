import { css } from "styled-components";

const typography = css`
  ${({ theme }) => css`
    body {
      font-family: "Inter", sans-serif;
      font-size: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    @font-face {
      font-family: "Gambarino";
      src: local("Gambarino"),
        url(../assets/fonts/Gambarino.OTF) format("opentype");
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    span {
      color: ${theme.colors.darkGray};
    }
    h1 {
      font-size: 36px;
      line-height: 1.6;
      font-weight: 700;
    }

    h2 {
      font-size: 24px;
      line-height: 1.7;
      font-weight: 700;
    }

    h3 {
      font-size: 20px;
      line-height: 1.7;
      font-weight: 700;
    }

    h4 {
      font-size: 16px;
      line-height: 1.7;
      font-weight: 700;
    }

    h5 {
      font-size: 14px;
      line-height: 1.7;
      font-weight: 600;
    }

    h6 {
      font-size: 12px;
      line-height: 1.7;
      font-weight: 600;
    }

    p {
      font-size: 14px;
      line-height: 1.7;
      font-weight: 400;
    }

    button {
      font-size: 16px;
      line-height: 1.5;
      font-weight: 600;
    }
  `}
`;

export default typography;
