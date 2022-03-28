import CardEmptySection from "components/moleculars/cards/CardEmptySection";
import CardTopImage from "components/moleculars/cards/CardTopImage";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { logEvent } from "services/analytics";
import impactApi from "services/api/impactApi";
import { logError } from "services/crashReport";
import Impact from "types/entities/Impact";
import * as S from "./styles";

function ImpactPage(): JSX.Element {
  const [userImpact, setUserImpact] = useState<Impact[]>();
  const ticketsUsed = 10;
  const space = " ";
  const { t } = useTranslation("translation", {
    keyPrefix: "impactPage",
  });

  useEffect(() => {
    logEvent("profile_view");

    async function fetchImpact() {
      try {
        const { data } = await impactApi.getImpact(2);
        setUserImpact(data);
      } catch (e) {
        logError(e);
      }
    }

    fetchImpact();
  }, []);

  const handleClick = () => {
    logEvent("profileShowAllButton_click");
  };

  return (
    <S.Container>
      <S.ImpactHeader />
      <S.Icon />
      <S.Title>{t("title").toUpperCase()}</S.Title>
      {ticketsUsed ? (
        <S.Subtitle>{t("subtitle", { ticketsUsed })}</S.Subtitle>
      ) : null}

      {ticketsUsed ? (
        <S.CardsButtonContainer>
          <S.Wrapper>
            {userImpact?.map((item) => (
              <CardTopImage
                key={item.nonProfit.id}
                text={
                  t("impactText") +
                  item.impact.toString() +
                  space +
                  item.nonProfit.impactDescription
                }
                imageUrl={item.nonProfit.backgroundImage}
                imageAlt={item.impact}
              />
            ))}
          </S.Wrapper>
          <S.Button text={t("button")} onClick={handleClick} />
        </S.CardsButtonContainer>
      ) : (
        <S.EmptySectionContainer>
          <CardEmptySection
            cardText={t("noImpactText")}
            btnText={t("noImpactButton")}
          />
        </S.EmptySectionContainer>
      )}
    </S.Container>
  );
}

export default ImpactPage;
