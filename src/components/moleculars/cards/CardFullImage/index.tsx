import React from "react";
import Divider from "components/atomics/Divider";
import theme from "styles/theme";
import Spinner from "components/atomics/Spinner";
import * as S from "./styles";

const { colors } = theme;
const { white } = colors;

export type Props = {
  title?: string;
  subtitle?: string;
  roundImage?: string;
  loading?: boolean;
  backgroundImage: string;
};

function CardFullImage({
  title,
  subtitle,
  roundImage,
  loading,
  backgroundImage,
}: Props): JSX.Element {
  return (
    <S.Container backgroundImage={backgroundImage}>
      <S.ImageContainer>
        {roundImage ? <S.RoundLogo src={roundImage} alt="logo" /> : <div />}
      </S.ImageContainer>
      <S.TextContainer>
        <S.TitleContainer>
          {loading && <Spinner strokeColor={white} size="20" />}
          {title && <S.Title>{title}</S.Title>}
        </S.TitleContainer>
        <Divider color={white} width="80px" />
        {subtitle && <S.Subtitle>{subtitle}</S.Subtitle>}
      </S.TextContainer>
    </S.Container>
  );
}

export default CardFullImage;
