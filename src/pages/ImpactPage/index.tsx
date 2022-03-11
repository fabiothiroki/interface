import CardEmptySection from "components/moleculars/cards/CardEmptySection";
import CardTopImage from "components/moleculars/cards/CardTopImage";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { logEvent } from "services/analytics";
import impactApi from "services/api/impactApi";
import { logError } from "services/crashReport";
import * as S from "./styles";

function ImpactPage(): JSX.Element {
  // const [userImpact, setUserImpact] = useState([]);
  const ticketsUsed = 0;
  const impact = "99 days of pet food for rescued animals";

  const { t } = useTranslation("translation", {
    keyPrefix: "impactPage",
  });

  useEffect(() => {
    logEvent("profile_view");

    async function fetchImpact() {
      try {
        const { data } = await impactApi.getImpact();
        console.log(data);
        // setUserImpact(data);
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
            <CardTopImage
              text={t("impactText", { impact })}
              imageUrl="https://picsum.photos/id/237/200/300"
              imageAlt="test"
            />
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
