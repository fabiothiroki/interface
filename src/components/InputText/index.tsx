import React from "react";
import * as S from "./styles";

export type Props = {
  name: string;
  label: string;
  value?: string;
  type?: string;
  placeholder: string;
  maxLength?: number;
  minLength?: number;
  required?: boolean;
  onChange?: (value: any) => void;
};

function InputText({
  name,
  label,
  value,
  type,
  placeholder,
  onChange,
  required,
  maxLength,
  minLength,
}: Props): JSX.Element {
  return (
    <S.Container>
      <S.Input>
        {label && <label htmlFor={name}>{label}</label>}
        <input
          placeholder={placeholder}
          type={type}
          name={name}
          aria-label={name}
          value={value}
          required={required}
          maxLength={maxLength}
          minLength={minLength}
          onChange={onChange}
        />
      </S.Input>
    </S.Container>
  );
}

export default InputText;
