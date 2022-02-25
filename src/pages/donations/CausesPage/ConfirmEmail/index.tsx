import ModalForm from "components/moleculars/modals/ModalForm";
import { useState } from "react";
import { isValidEmail } from "lib/validators";

type Props = {
  onFormSubmit: (values: Record<any, any>) => void;
  visible: boolean;
  title: string;
  icon: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  secondaryButtonCallback: () => void;
};
function ConfirmEmail({
  onFormSubmit,
  visible,
  title,
  icon,
  primaryButtonText,
  secondaryButtonText,
  secondaryButtonCallback,
}: Props): JSX.Element {
  const [primaryButtonDisabled, setPrimaryButtonDisabled] = useState(true);

  const fields = [
    {
      name: "email",
      type: "email",
      placeholder: "E-mail",
      id: "email",
      required: true,
    },
  ];
  const initialState = {
    email: "",
  };

  return (
    <ModalForm
      formFields={fields}
      initialState={initialState}
      onFormSubmit={onFormSubmit}
      visible={visible}
      title={title}
      footer={<div>footer</div>}
      icon={icon}
      primaryButtonText={primaryButtonText}
      secondaryButtonText={secondaryButtonText}
      secondaryButtonCallback={secondaryButtonCallback}
      primaryButtonDisabled={primaryButtonDisabled}
      onValuesChange={(values) => {
        setPrimaryButtonDisabled(!isValidEmail(values.email));
      }}
    />
  );
}

export default ConfirmEmail;
