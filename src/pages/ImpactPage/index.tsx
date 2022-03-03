import CardSideImage from "components/moleculars/cards/CardSideImage";
import { useTranslation } from "react-i18next";
import * as S from "./styles";

function ImpactPage(): JSX.Element {
  const ticketsUsed = 99;
  const impact = "99 days of pet food for rescued animals";

  const { t } = useTranslation("translation", {
    keyPrefix: "impactPage",
  });

  return (
    <S.Container>
      <S.ImpactHeader />
      <S.Icon />
      <S.Title>{t("title").toUpperCase()}</S.Title>
      <S.Subtitle>{t("subtitle", { ticketsUsed })}</S.Subtitle>

      <S.Wrapper>
        <CardSideImage
          text={t("impactText", { impact })}
          imageUrl="https://picsum.photos/id/237/200/300"
          imageAlt="test"
        />
        <CardSideImage
          text="you donated 99 days of pet food for "
          imageUrl="https://picsum.photos/id/237/200/300"
          imageAlt="test"
        />
        <CardSideImage
          text="you donated 99 days of pet food for rescued animals oauhsiush aiushiuahsi iohasuohs"
          imageUrl="https://picsum.photos/id/237/200/300"
          imageAlt="test"
        />
        <CardSideImage
          text="you donated 99 days of pet food for rescued animals"
          imageUrl="https://picsum.photos/id/237/200/300"
          imageAlt="test"
        />
      </S.Wrapper>
      <S.Button text="Show more" onClick={() => {}} />
    </S.Container>
  );
}

export default ImpactPage;
