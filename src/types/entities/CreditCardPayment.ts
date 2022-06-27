export default interface CreditCardPayment {
  country: string;
  state: string;
  city: string;
  tax_id: string;
  offer_id: number;
  email: string;
  card: {
    number: string;
    name: string;
    expirationYear: string;
    expirationMonth: string;
    cvv: string;
  };
}
