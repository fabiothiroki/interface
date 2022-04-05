import Toast from "contexts/toastContext/toastComponent";
import useToast from "hooks/useToast";
import React, { useEffect } from "react";
import * as S from "./styles";

function ConfirmEmailPage(): JSX.Element {
  const toast = useToast();

  useEffect(() => {
    toast({ type: "success", message: "hehehehe" });
  }, []);

  return (
    <S.Container>
      <h1>ConfirmEmailPage</h1>
      <button
        type="button"
        onClick={() =>
          toast({ type: "error", message: "hehehehe", link: "google.com" })
        }
      >
        oioioi
      </button>
      <Toast />
    </S.Container>
  );
}

export default ConfirmEmailPage;
