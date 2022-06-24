import { useApi } from "hooks/useApi";
import creditCardPaymentApi from "services/api/creditCardPaymentApi";
import CreditCardPayment from "types/entities/CreditCardPayment";

function usePayment(paymentInformations: CreditCardPayment) {
  const { data: paymentValues, isLoading } = useApi({
    key: "payment",
    fetchMethod: () =>
      creditCardPaymentApi.postCreditCardPayment(paymentInformations),
  });

  return { paymentValues, isLoading };
}

export default usePayment;
