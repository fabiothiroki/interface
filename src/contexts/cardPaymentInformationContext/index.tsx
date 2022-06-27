import { useCurrentUser } from "contexts/currentUserContext";
import { useLoadingOverlay } from "contexts/loadingOverlayContext";
import { MODAL_TYPES } from "contexts/modalContext/helpers";
import { useModal } from "hooks/modalHooks/useModal";
import useNavigation from "hooks/useNavigation";
import useToast from "hooks/useToast";
import useGivingValues from "hooks/apiHooks/useGivingValues";
import { useLanguage } from "hooks/useLanguage";
import { coinByLanguage } from "lib/coinByLanguage";
import {
  createContext,
  useContext,
  SetStateAction,
  useState,
  useMemo,
  useCallback,
} from "react";
import { useTranslation } from "react-i18next";
import { logEvent } from "services/analytics";
import { logError } from "services/crashReport";
import GivingValue from "types/entities/GivingValue";
import { Currencies } from "types/enums/Currencies";
import creditCardPaymentApi from "services/api/creditCardPaymentApi";
import successIcon from "assets/icons/success-icon.svg";

export interface ICardPaymentInformationContext {
  setCurrentCoin: (value: SetStateAction<Currencies>) => void;
  setCountry: (value: SetStateAction<string>) => void;
  setState: (value: SetStateAction<string>) => void;
  setCity: (value: SetStateAction<string>) => void;
  setTaxId: (value: SetStateAction<string>) => void;
  setEmail: (value: SetStateAction<string>) => void;
  setNumber: (value: SetStateAction<string>) => void;
  setName: (value: SetStateAction<string>) => void;
  setExpirationDate: (value: SetStateAction<string>) => void;
  setCvv: (value: SetStateAction<string>) => void;
  setSelectedButtonIndex: (value: SetStateAction<number>) => void;
  setButtonDisabled: (value: SetStateAction<boolean>) => void;
  setCryptoGiving: (value: SetStateAction<string>) => void;
  refetchGivingValues: () => void;
  givingValue: () => number;
  givingTotal: () => string;
  buttonDisabled: boolean;
  currentCoin: Currencies;
  givingValues: GivingValue[] | undefined;
  country: string;
  state: string;
  city: string;
  taxId: string;
  email: string;
  number: string;
  name: string;
  expirationDate: string;
  cvv: string;
  selectedButtonIndex: number;
  cryptoGiving: string;
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
  const { currentLang } = useLanguage();

  const [currentCoin, setCurrentCoin] = useState<Currencies>(
    coinByLanguage(currentLang),
  );
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(0);

  const { givingValues, refetch: refetchGivingValues } =
    useGivingValues(currentCoin);

  const givingValue = useCallback(() => {
    if (givingValues) return givingValues[selectedButtonIndex]?.value;

    return 0;
  }, [givingValues, selectedButtonIndex, currentCoin]);

  const givingTotal = useCallback(() => {
    if (!givingValues) return "";

    return givingValues[selectedButtonIndex]?.valueText;
  }, [givingValues, selectedButtonIndex, currentCoin]);

  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [taxId, setTaxId] = useState("");
  const [email, setEmail] = useState(currentUser?.email ?? "");
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [cryptoGiving, setCryptoGiving] = useState("");

  const { showLoadingOverlay, hideLoadingOverlay } = useLoadingOverlay();

  const { t } = useTranslation("translation", {
    keyPrefix: "contexts.cardPaymentInformation",
  });

  const { navigateTo } = useNavigation();

  const { show, hide } = useModal({
    type: MODAL_TYPES.MODAL_ICON,
    props: {
      title: t("modalSuccessTitle").replace("{{value}}", cryptoGiving),
      body: t("modalSuccessDescription"),
      icon: successIcon,
      primaryButtonText: t("modalSuccessButton"),
      primaryButtonCallback: () => {
        navigateTo("/promoters/fund");
        hide();
      },
    },
  });

  const toast = useToast();

  console.log(cryptoGiving);

  const handleSubmit = async () => {
    logEvent("fundSupportConfirmBtn_click");
    showLoadingOverlay(t("loadingMessage"));

    const expiration = expirationDate.split("/");
    const paymentInformation = {
      email,
      country,
      state,
      city,
      tax_id: taxId,
      offer_id: givingValues?.[selectedButtonIndex]?.id ?? 0,
      card: {
        number: number.replace(/\D/g, ""),
        name,
        expirationMonth: expiration[0],
        expirationYear: expiration[1],
        cvv,
      },
    };
    try {
      await creditCardPaymentApi.postCreditCardPayment(paymentInformation);

      show();

      logEvent("fundGivingConfirmMdl_view");
    } catch (error) {
      logError(error);
      toast({
        message: t("onErrorMessage"),
        type: "error",
      });

      logEvent("toastNotification_view", {
        status: "transactionFailed",
      });
    } finally {
      hideLoadingOverlay();
    }
  };

  const cardPaymentInformationObject: ICardPaymentInformationContext = useMemo(
    () => ({
      currentCoin,
      setCurrentCoin,
      givingValue,
      givingTotal,
      givingValues,
      refetchGivingValues,
      country,
      setCountry,
      city,
      setCity,
      state,
      setState,
      taxId,
      setTaxId,
      handleSubmit,
      setName,
      name,
      setNumber,
      number,
      setEmail,
      email,
      setExpirationDate,
      expirationDate,
      setCvv,
      cvv,
      selectedButtonIndex,
      setSelectedButtonIndex,
      buttonDisabled,
      setButtonDisabled,
      setCryptoGiving,
      cryptoGiving,
    }),
    [
      currentCoin,
      givingValue,
      refetchGivingValues,
      country,
      city,
      state,
      taxId,
      email,
      number,
      name,
      expirationDate,
      cvv,
      selectedButtonIndex,
      buttonDisabled,
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
