import Header from "components/atomics/sections/Header";
import CardCenterImageButton from "components/moleculars/cards/CardCenterImageButton";
import ngoFactory from "config/testUtils/factories/ngoFactory";
import { useState } from "react";
import Ngo from "types/entities/Ngo";
import * as S from "./styles";

function CausesPage(): JSX.Element {
  const [ngos] = useState<Ngo[]>([ngoFactory()]);

  return (
    <S.Container>
      <Header />
      <h1>Causes</h1>
      <p>Donate for free for a cause of your choice</p>
      {ngos.map((ngo) => (
        <CardCenterImageButton
          image={ngo.image}
          title={ngo.name}
          buttonText="Donate"
          onClickButton={() => {}}
        />
      ))}
    </S.Container>
  );
}

export default CausesPage;
