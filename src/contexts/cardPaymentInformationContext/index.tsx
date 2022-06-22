import { useCurrentUser } from "contexts/currentUserContext";
import {
  createContext,
  useContext,
  SetStateAction,
  useState,
  useMemo,
} from "react";

export interface ICardPaymentInformationContext {
  setCountry: (value: SetStateAction<string>) => void;
  setState: (value: SetStateAction<string>) => void;
  setCity: (value: SetStateAction<string>) => void;
  setTaxId: (value: SetStateAction<string>) => void;
  setEmail: (value: SetStateAction<string>) => void;
  setCardNumber: (value: SetStateAction<string>) => void;
  setCardName: (value: SetStateAction<string>) => void;
  setExpirationDate: (value: SetStateAction<string>) => void;
  setSecurityCode: (value: SetStateAction<string>) => void;
  setSelectedButtonIndex: (value: SetStateAction<number>) => void;
  country: string;
  state: string;
  city: string;
  taxId: string;
  email: string;
  cardNumber: string;
  cardName: string;
  expirationDate: string;
  securityCode: string;
  selectedButtonIndex: number;
  handleSubmit: () => void;
}

export type Props = {
  children: JSX.Element[] | JSX.Element;
};

export const CardPaymentInformationContext =
  createContext<ICardPaymentInformationContext>(
    {} as ICardPaymentInformationContext,
  );

function CardPaymentInformationProvider({ children }: Props) {
  const { currentUser } = useCurrentUser();

  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [taxId, setTaxId] = useState("");
  const [email, setEmail] = useState(currentUser?.email ?? "");
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [securityCode, setSecurityCode] = useState("");
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(0);

  const handleSubmit = () => {
    console.log({
      country,
      state,
      city,
      taxId,
      email,
      cardNumber,
      cardName,
      expirationDate,
      securityCode,
      selectedButtonIndex,
    });
  };

  const cardPaymentInformationObject: ICardPaymentInformationContext = useMemo(
    () => ({
      country,
      setCountry,
      city,
      setCity,
      state,
      setState,
      taxId,
      setTaxId,
      handleSubmit,
      setCardName,
      cardName,
      setCardNumber,
      cardNumber,
      setEmail,
      email,
      setExpirationDate,
      expirationDate,
      setSecurityCode,
      securityCode,
      selectedButtonIndex,
      setSelectedButtonIndex,
    }),
    [
      country,
      city,
      state,
      taxId,
      email,
      cardNumber,
      cardName,
      expirationDate,
      securityCode,
      selectedButtonIndex,
    ],
  );

  return (
    <CardPaymentInformationContext.Provider
      value={cardPaymentInformationObject}
    >
      {children}
    </CardPaymentInformationContext.Provider>
  );
}

export default CardPaymentInformationProvider;

export const useCardPaymentInformation = () => {
  const context = useContext(CardPaymentInformationContext);

  if (!context) {
    throw new Error(
      "useCardPaymentInformation must be used within CardPaymentInformationProvider",
    );
  }

  return context;
};
