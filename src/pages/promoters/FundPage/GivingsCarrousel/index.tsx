import { useTranslation } from "react-i18next";
import Carousel from "components/moleculars/sliders/Carousel";
import CardBlank from "components/moleculars/cards/CardBlank";
import Divider from "components/atomics/Divider";
import theme from "styles/theme";
import { ReactComponent as BlackRightArrow } from "./assets/black-right-arrow.svg";
import * as S from "./styles";

const { colors } = theme;
const { lightGray } = colors;

function GivingsCarousel(): JSX.Element {
  const { t } = useTranslation("translation", {
    keyPrefix: "promoters.fundPage.givingsCarousel",
  });

  return (
    <S.Container>
      <Carousel sliderPerView={2}>
        <S.CardCarousel>
          <CardBlank>
            <S.DateGivingText>22/02/2022</S.DateGivingText>
            <S.ValueGivingText>
              12.00 <S.FundTextCoin>USDC</S.FundTextCoin>
            </S.ValueGivingText>
            <Divider color={lightGray} />
            <S.LinkContainer>
              <S.LinkSection>
                {t("linkTransactionText")} <BlackRightArrow />
              </S.LinkSection>
            </S.LinkContainer>
          </CardBlank>
        </S.CardCarousel>
        <S.CardCarousel>
          <CardBlank>
            <S.DateGivingText>22/02/2022</S.DateGivingText>
            <S.ValueGivingText>
              12.00 <S.FundTextCoin>USDC</S.FundTextCoin>
            </S.ValueGivingText>
            <Divider color={lightGray} />
            <S.LinkContainer>
              <S.LinkSection>
                {t("linkTransactionText")} <BlackRightArrow />
              </S.LinkSection>
            </S.LinkContainer>
          </CardBlank>
        </S.CardCarousel>
      </Carousel>
    </S.Container>
  );
}

export default GivingsCarousel;
