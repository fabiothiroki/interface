import React, { Dispatch, SetStateAction, useState } from "react";
import ArrowDownIcon from "assets/icons/arrow-down-icon.svg";
import * as S from "./styles";

export type ValueDispatcher = Dispatch<SetStateAction<string>>;

export type Props = {
  name: string;
  label: string;
  values: string[];
};

function Dropdown({ name, label, values }: Props): JSX.Element {
  const [dropdownValue] = useState(values[0]);

  return (
    <S.Input>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        type="text"
        name={name}
        aria-label={name}
        value={dropdownValue}
        readOnly
      />
      <img src={ArrowDownIcon} alt="arrow-down" />
    </S.Input>
  );
}

export default Dropdown;
