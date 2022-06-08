import { useState } from "react";
import * as S from "./styles";

export type Props = {
  suggestions: any[];
  placeholder: string;
};

function InputAutoComplete({ suggestions, placeholder }: Props): JSX.Element {
  const [filteredSuggestions, setFilteredSuggestions] = useState(suggestions);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [input, setInput] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    const userInput = e.target.value;
    const relatedSuggestions = suggestions
      ? suggestions.filter((suggestion) =>
          suggestion.toLowerCase().includes(userInput.toLowerCase()),
        )
      : [];

    setFilteredSuggestions(relatedSuggestions);
    setShowSuggestions(true);
  };

  const onClick = (e: React.MouseEvent<HTMLInputElement>) => {
    setInput(e.currentTarget.value);
    setFilteredSuggestions([]);
    setShowSuggestions(false);
  };

  const handleOptionClick = (value: string) => {
    setInput(value);
    setShowSuggestions(false);
  };

  return (
    <>
      <S.Input
        onChange={onChange}
        onClick={onClick}
        value={input}
        placeholder={placeholder}
      />
      {showSuggestions && input && (
        <S.Container>
          {filteredSuggestions.map(
            (value, index) =>
              index <= 1 && (
                <S.OptionContainer
                  onClick={() => handleOptionClick(value)}
                  key={index.toString(10)}
                >
                  <S.OptionText>{value}</S.OptionText>
                </S.OptionContainer>
              ),
          )}
        </S.Container>
      )}
    </>
  );
}

export default InputAutoComplete;
