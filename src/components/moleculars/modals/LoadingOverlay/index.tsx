import React from "react";
import Loader from "components/atomics/Loader";
import * as S from "./styles";
import ModalBlank from "../ModalBlank";

export type Props = {
  text?: string;
};
function LoadingOverlay({ text }: Props): JSX.Element {
  return (
    <S.Container>
      <ModalBlank visible>
        <S.CenterDiv>
          <Loader />
          {text && <S.Message>{text}</S.Message>}
        </S.CenterDiv>
      </ModalBlank>
    </S.Container>
  );
}

export default LoadingOverlay;
