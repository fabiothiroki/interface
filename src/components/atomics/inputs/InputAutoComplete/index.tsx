import ModalBlank from "components/moleculars/modals/ModalBlank";
import { useState } from "react";
import * as S from "./styles";

export type Props = {
  suggestions: any[];
  placeholder: string;
};

function InputAutoComplete({ suggestions, placeholder }: Props): JSX.Element {
  const [filteredSuggestions, setFilteredSuggestions] = useState(suggestions);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [input, setInput] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const userInput = e.target.value;
    const relatedSuggestions = suggestions
      ? suggestions.filter((suggestion) =>
          suggestion.toLowerCase().includes(userInput.toLowerCase()),
        )
      : [];

    setInput(userInput);
    setFilteredSuggestions(relatedSuggestions);
    setShowSuggestions(true);
    setActiveSuggestionIndex(0);
  };

  const onClick = (e: React.MouseEvent<HTMLInputElement>) => {
    setInput(e.currentTarget.value);
    setFilteredSuggestions([]);
    setShowSuggestions(false);
    setActiveSuggestionIndex(0);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!filteredSuggestions) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (activeSuggestionIndex < filteredSuggestions.length - 1) {
        setActiveSuggestionIndex(activeSuggestionIndex + 1);
      }
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (activeSuggestionIndex > 0) {
        setActiveSuggestionIndex(activeSuggestionIndex - 1);
      }
    } else if (e.key === "Enter") {
      e.preventDefault();
      setInput(filteredSuggestions[activeSuggestionIndex]);
      setShowSuggestions(false);
    }
  };

  return (
    <>
      <S.Input
        onChange={onChange}
        onClick={onClick}
        onKeyDown={onKeyDown}
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
              <S.OptionContainer key={index.toString(10)}>
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
