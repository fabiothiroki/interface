import * as S from "./styles";

type Props = {
  children: JSX.Element[] | JSX.Element;
};

export function HighlightedTextH1({ children }: Props): JSX.Element {
  return <S.HighlightedTextH1>{children}</S.HighlightedTextH1>;
}

export function HighlightedTextH2({ children }: Props): JSX.Element {
  return <S.HighlightedTextH2>{children}</S.HighlightedTextH2>;
}

export function HighlightedTextH3({ children }: Props): JSX.Element {
  return <S.HighlightedTextH3>{children}</S.HighlightedTextH3>;
}
