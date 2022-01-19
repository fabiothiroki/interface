import React from "react";
import LottieAnimation from "components/__atomics__/LottieAnimation";
import animationData from "./assets/loader.json";
import * as S from "./styles";

function Loader(): JSX.Element {
  return (
    <S.Container>
      <LottieAnimation animationData={animationData} width={40} height={40} />
    </S.Container>
  );
}

export default Loader;
