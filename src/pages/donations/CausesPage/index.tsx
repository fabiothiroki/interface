import Header from "components/atomics/sections/Header";
import CardCenterImageButton from "components/moleculars/cards/CardCenterImageButton";
import ngoFactory from "config/testUtils/factories/ngoFactory";
import { useCallback, useState } from "react";
import Ngo from "types/entities/Ngo";
import Heart from "assets/images/heart.svg";
import ModalIcon from "components/moleculars/modals/ModalIcon";
import { useTranslation } from "react-i18next";
import * as S from "./styles";

function CausesPage(): JSX.Element {
  const [ngos] = useState<Ngo[]>([ngoFactory(), ngoFactory()]);
  const [donationModalVisible, setDonationModalVisible] = useState(true);
  const [confirmModalVisible, setConfirmModalVisible] = useState(false);
  const [chosenNgo, setChosenNgo] = useState<Ngo>();
  const { t } = useTranslation("translation", {
    keyPrefix: "donations.causesPage",
  });

  const closeDonationModal = useCallback(() => {
    setDonationModalVisible(false);
  }, []);

  const closeConfirmModal = useCallback(() => {
    setConfirmModalVisible(false);
  }, []);

  const donate = useCallback(() => {}, []);
  const chooseNgo = useCallback((ngo: Ngo) => {
    setChosenNgo(ngo);
    setConfirmModalVisible(true);
  }, []);

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
        icon={chosenNgo?.image}
        title={t("confirmModalTitle")}
        body={chosenNgo?.impactDescription}
        primaryButtonText={t("confirmModalPrimaryButtonText")}
        primaryButtonCallback={donate}
        secondaryButtonText={t("confirmModalSecondaryButtonText")}
        secondaryButtonCallback={closeConfirmModal}
        visible={confirmModalVisible}
        onClose={closeConfirmModal}
        roundIcon
      />

      <Header sideLogo="https://i.imgur.com/kJA77FC.png" />
      <S.BodyContainer>
        <S.Title>{t("pageTitle")}</S.Title>
        <S.Text>{t("pageSubtitle")}</S.Text>
        <S.CausesContainer>
          {ngos.map((ngo, idx) => (
            <S.CausesCardContainer key={idx.toString()}>
              <CardCenterImageButton
                image={ngo.image}
                title={ngo.impactDescription}
                buttonText={t("donateText")}
                onClickButton={() => {
                  chooseNgo(ngo);
                }}
              />
            </S.CausesCardContainer>
          ))}
        </S.CausesContainer>
      </S.BodyContainer>
    </S.Container>
  );
}

export default CausesPage;
