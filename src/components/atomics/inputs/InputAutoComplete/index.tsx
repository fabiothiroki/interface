import ModalBlank from "components/moleculars/modals/ModalBlank";
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
        <S.Container id="autocomplete-container">
          <ModalBlank
            visible={showSuggestions}
            onClose={() => setShowSuggestions(false)}
            customStyles={{
              overlay: {
                backgroundColor: "transparent",
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "flex-end",
                position: "relative",
              },
              content: {
                paddingTop: 8,
                paddingBottom: 8,
                position: "absolute",
                boxShadow: "0px 4px 12px 0px rgba(24, 86, 105, 0.15)",
                zIndex: 1,
                margin: 0,
                width: "100%",
                maxWidth: "472px",
              },
            }}
            parentSelector={() =>
              document.querySelector("#autocomplete-container") || document.body
            }
          >
            {filteredSuggestions.map((value, index) => (
              <S.OptionContainer
                onClick={() => handleOptionClick(value)}
                key={index.toString(10)}
              >
                <S.OptionText>{value}</S.OptionText>
              </S.OptionContainer>
            ))}
          </ModalBlank>
        </S.Container>
      )}
    </>
  );
}

export default InputAutoComplete;
