import Header from "components/atomics/sections/Header";
import CardCenterImageButton from "components/moleculars/cards/CardCenterImageButton";
import ngoFactory from "config/testUtils/factories/ngoFactory";
import { useState } from "react";
import Ngo from "types/entities/Ngo";
import * as S from "./styles";

function CausesPage(): JSX.Element {
  const [ngos] = useState<Ngo[]>([ngoFactory(), ngoFactory()]);

  return (
    <S.Container>
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
                onClickButton={() => {}}
              />
            </S.CausesCardContainer>
          ))}
        </S.CausesContainer>
      </S.BodyContainer>
    </S.Container>
  );
}

export default CausesPage;
