import CardTopImage from "components/moleculars/cards/CardTopImage";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { logEvent } from "services/analytics";
import * as S from "./styles";

function ImpactPage(): JSX.Element {
  const ticketsUsed = 99;
  const impact = "99 days of pet food for rescued animals";

  const { t } = useTranslation("translation", {
    keyPrefix: "impactPage",
  });

  useEffect(() => {
    logEvent("profile_view");
  }, []);

  return (
    <S.Container>
      <S.ImpactHeader />
      <S.Icon />
      <S.Title>{t("title").toUpperCase()}</S.Title>
      <S.Subtitle>{t("subtitle", { ticketsUsed })}</S.Subtitle>

      <S.CardsButtonContainer>
        <S.Wrapper>
          <CardTopImage
            text={t("impactText", { impact })}
            imageUrl="https://picsum.photos/id/237/200/300"
            imageAlt="test"
          />
          <CardTopImage
            text="you donated 99 days of pet food for "
            imageUrl="https://picsum.photos/id/237/200/300"
            imageAlt="test"
          />
          <CardTopImage
            text="you donated 99 days of pet food for rescued animals oauhsiush aiushiuahsi iohasuohs"
            imageUrl="https://picsum.photos/id/237/200/300"
            imageAlt="test"
          />
          <CardTopImage
            text="you donated 99 days of pet food for rescued animals"
            imageUrl="https://picsum.photos/id/237/200/300"
            imageAlt="test"
          />
          <CardTopImage
            text="you donated 99 days of pet food for rescued animals oauhsiush aiushiuahsi iohasuohs"
            imageUrl="https://picsum.photos/id/237/200/300"
            imageAlt="test"
          />
          <CardTopImage
            text="you donated 99 days of pet food for rescued animals"
            imageUrl="https://picsum.photos/id/237/200/300"
            imageAlt="test"
          />
          <CardTopImage
            text="you donated 99 days of pet food for rescued animals"
            imageUrl="https://picsum.photos/id/237/200/300"
            imageAlt="test"
          />
        </S.Wrapper>
        <S.Button text={t("button")} onClick={() => {}} />
      </S.CardsButtonContainer>
    </S.Container>
  );
}

export default ImpactPage;
