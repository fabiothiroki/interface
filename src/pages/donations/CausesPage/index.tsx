import CardCenterImageButton from "components/moleculars/cards/CardCenterImageButton";
import ngoFactory from "config/testUtils/factories/ngoFactory";
import { useState } from "react";
import Ngo from "types/entities/Ngo";
import * as S from "./styles";

function CausesPage(): JSX.Element {
  const [ngos, setNgos] = useState<Ngo[]>([ngoFactory()]);

  return (
    <S.Container>
      <h1>Causes</h1>
      {ngos.map((ngo) => (
        <CardCenterImageButton image={ngo.image} title={ngo.name} buttonText="doar" onClickButton={() => {}}/>))
      }
    </S.Container>
  )};

export default CausesPage;
