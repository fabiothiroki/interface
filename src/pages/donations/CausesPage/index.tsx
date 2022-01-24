import React from "react";
import { useCurrentUser } from "contexts/currentUserContext";
import * as S from "./styles";

function CausesPage(): JSX.Element {
  const { signedIn } = useCurrentUser();

  function handleDonateButtonClick() {
    if (signedIn) return console.log("go to donation finish");

    return console.log("go to email confirm");
  }

  return (
    <S.Container>
      <h1>CausesPage</h1>
      {signedIn ? "true" : "false"}
      <button type="button" onClick={handleDonateButtonClick}>
        donate
      </button>
    </S.Container>
  );
}

export default CausesPage;
