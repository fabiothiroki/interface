import Header from "components/atomics/sections/Header";
import CardCenterImageButton from "components/moleculars/cards/CardCenterImageButton";
import { useCallback, useEffect, useState } from "react";
import Heart from "assets/images/heart.svg";
import ModalIcon from "components/moleculars/modals/ModalIcon";
import { useTranslation } from "react-i18next";
import { logEvent } from "services/analytics";
import useNavigation from "hooks/useNavigation";
import NonProfit from "types/entities/NonProfit";
import useNonProfits from "hooks/apiHooks/useNonProfits";
import Loader from "components/atomics/Loader";
import Integration from "types/entities/Integration";
import integrationsApi from "services/api/integrationsApi";
import useQueryParams from "hooks/useQueryParams";
import { logError } from "services/crashReport";
import * as S from "./styles";

function CausesPage(): JSX.Element {
  const [donationModalVisible, setDonationModalVisible] = useState(true);
  const [confirmModalVisible, setConfirmModalVisible] = useState(false);
  const [chosenNonProfit, setChosenNonProfit] = useState<NonProfit>();
  const [integration, setIntegration] = useState<Integration>();
  const queryParams = useQueryParams();

  const { t } = useTranslation("translation", {
    keyPrefix: "donations.causesPage",
  });
  const { navigateTo } = useNavigation();
  const { nonProfits, isLoading } = useNonProfits();

  useEffect(() => {
    logEvent("donateIntroDial_view");
  }, []);

  useEffect(() => {
    async function fetchIntegration() {
      try {
        const integrationId = queryParams.get("integration_id");
        if (!integrationId) return;

        const { data } = await integrationsApi.getIntegration(
          parseInt(integrationId, 10),
        );

        setIntegration(data);
      } catch (e) {
        logError(e);
      }
    }

    fetchIntegration();
  }, []);

  const closeDonationModal = useCallback(() => {
    setDonationModalVisible(false);
  }, []);

  const closeConfirmModal = useCallback(() => {
    setConfirmModalVisible(false);
  }, []);

  const donate = useCallback(() => {
    navigateTo({
      pathname: "/donation-in-process",
      state: { nonProfit: chosenNonProfit, integration },
    });
    logEvent("donateConfirmDialButton_click", {
      causeId: chosenNonProfit?.id,
    });
  }, [chosenNonProfit]);

  const chooseNonProfit = useCallback((nonProfit: NonProfit) => {
    setChosenNonProfit(nonProfit);
  }, []);

  function handleButtonClick(nonProfit: NonProfit) {
    logEvent("donateCardButton_click", {
      causeId: nonProfit.id,
    });
    chooseNonProfit(nonProfit);
    setConfirmModalVisible(true);
  }

  return (
    <S.Container>
      <ModalIcon
        icon={Heart}
        title={t("donationModalTitle")}
        body={t("donationModalBody")}
        primaryButtonText={t("donationModalButtonText")}
        visible={donationModalVisible}
        onClose={closeDonationModal}
        primaryButtonCallback={closeDonationModal}
      />
      <ModalIcon
        icon={chosenNonProfit?.mainImage}
        title={t("confirmModalTitle")}
        body={chosenNonProfit?.impactDescription}
        primaryButtonText={t("confirmModalPrimaryButtonText")}
        primaryButtonCallback={donate}
        secondaryButtonText={t("confirmModalSecondaryButtonText")}
        secondaryButtonCallback={closeConfirmModal}
        visible={confirmModalVisible}
        onClose={closeConfirmModal}
        roundIcon
      />

      <Header sideLogo={integration?.logo} />
      <S.BodyContainer>
        <S.Title>{t("pageTitle")}</S.Title>
        <S.Text>{t("pageSubtitle")}</S.Text>
        {isLoading ? (
          <Loader />
        ) : (
          <S.CausesContainer>
            {nonProfits?.map((nonProfit, idx) => (
              <S.CausesCardContainer key={idx.toString()}>
                <CardCenterImageButton
                  image={nonProfit.mainImage}
                  title={nonProfit.impactDescription}
                  buttonText={t("donateText")}
                  onClickButton={() => handleButtonClick(nonProfit)}
                />
              </S.CausesCardContainer>
            ))}
          </S.CausesContainer>
        )}
      </S.BodyContainer>
    </S.Container>
  );
}

export default CausesPage;
