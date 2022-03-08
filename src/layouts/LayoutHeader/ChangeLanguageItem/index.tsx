import globeIcon from "assets/icons/globe-icon.svg";
import CardIconText from "components/moleculars/cards/CardIconText";
import ButtonSwitch from "components/atomics/ButtonSwitch";
import { useLanguage } from "hooks/useLanguage";
import * as S from "./styles";

function ChangeLanguageItem(): JSX.Element {
  const { currentLang, handleSwitchLanguage } = useLanguage();

  function handleSwitch() {
    handleSwitchLanguage();
  }

  return (
    <S.Container>
      <CardIconText
        text="Change Langugage"
        icon={globeIcon}
        rightComponent={
          <ButtonSwitch
            leftText="PT"
            rightText="EN"
            onSwitch={() => handleSwitch()}
            initialCheckState={currentLang === "en-US"}
          />
        }
      />
    </S.Container>
  );
}

export default ChangeLanguageItem;
