import Header from "components/atomics/sections/Header";
import CardCenterImageButton from "components/moleculars/cards/CardCenterImageButton";
import ngoFactory from "config/testUtils/factories/ngoFactory";
import { useCallback, useState } from "react";
import Ngo from "types/entities/Ngo";
import Heart from "assets/images/heart.svg";
import ModalIcon from "components/moleculars/modals/ModalIcon";
import * as S from "./styles";

function CausesPage(): JSX.Element {
  const [ngos] = useState<Ngo[]>([ngoFactory(), ngoFactory()]);
  const [donationModalVisible, setDonationModalVisible] = useState(true);
  const [confirmModalVisible, setConfirmModalVisible] = useState(false);
  const [chosenNgo, setChosenNgo] = useState<Ngo>();

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
        title="Donate for free!"
        body="Choose one cause and send a donation sponsored by Ribon’s supporters."
        primaryButtonText="Continue"
        visible={donationModalVisible}
        onClose={closeDonationModal}
        primaryButtonCallback={closeDonationModal}
      />
      <ModalIcon
        icon={chosenNgo?.image}
        title="Confirm your donation"
        body="Choose one cause and send a donation sponsored by Ribon’s supporters."
        primaryButtonText="Confirm"
        primaryButtonCallback={donate}
        secondaryButtonText="Cancel"
        secondaryButtonCallback={closeConfirmModal}
        visible={confirmModalVisible}
        onClose={closeConfirmModal}
        roundIcon
      />

      <Header sideLogo="https://i.imgur.com/kJA77FC.png" />
      <S.BodyContainer>
        <S.Title>Causes</S.Title>
        <S.Text>Donate for free for a cause of your choice</S.Text>
        <S.CausesContainer>
          {ngos.map((ngo) => (
            <S.CausesCardContainer>
              <CardCenterImageButton
                image={ngo.image}
                title={ngo.impactDescription}
                buttonText="Donate"
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
