import { useForm } from "hooks/useForm";
import { useState } from "react";
import * as S from "./styles";

export type Props = {
  imputEmail?: string;
  label?: string;
  primaryButtonText?: string | null;
  secondaryButtonText?: string | null;
  onChange?: () => void;
  onClose?: () => void;
};
function ModalForm({
  imputEmail,
  label,
  primaryButtonText,
  secondaryButtonText,
  onChange,
  onClose,
}: Props): JSX.Element {
  const [form, onChange, clear] = useForm({ email: "" });
  const [login, setLogin] = useState(false);

  function onSubmitForm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLogin(form, clear);
  }

  return <S.Container></S.Container>;
}

export default ModalForm;
