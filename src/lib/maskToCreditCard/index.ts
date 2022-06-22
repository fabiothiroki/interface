export const maskToCreditCard = (number: string) =>
  number
    .replace(/\s?/g, "")
    .replace(/(\d{4})/g, "$1 ")
    .trim();
