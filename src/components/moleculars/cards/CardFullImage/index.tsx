import React from "react";
import * as S from "./styles";

export type Props = {
  title?: string;
  subtitle?: string;
  roundImage: string;
};
function CardFullImage({ title, subtitle, roundImage }: Props): JSX.Element {
  return (
    <S.Container backgroundImage="https://i.imgur.com/BwtK2hX.png">
      <S.RoundLogo src={roundImage} alt="logo" />
      <S.TextContainer>
        {title && <S.Title>{title}</S.Title>}
        {subtitle && <S.Subtitle>{subtitle}</S.Subtitle>}
      </S.TextContainer>
    </S.Container>
  );
}

export default CardFullImage;
