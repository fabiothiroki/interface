import * as S from "./styles";

type Props = {
  children: JSX.Element[] | JSX.Element;
};

function HighlightedTextH1({ children }: Props): JSX.Element {
  return <S.HighlightedTextH1>{children}</S.HighlightedTextH1>;
}

export default HighlightedTextH1;
