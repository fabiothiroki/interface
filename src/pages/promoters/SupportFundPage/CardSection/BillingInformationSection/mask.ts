import { Languages } from "types/enums/Languages";

export const mask = (v: string, language: string) => {
  let c = v.replace(/\D/g, "");

  if (language === Languages.PT) {
    c = c.replace(/(\d{3})(\d)/, "$1-$2");
    c = c.replace(/(\d{3})(\d)/, "$1.$2");
    c = c.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  } else {
    c = c.replace(/(\d{3})(\d)/, "$1-$2");
    c = c.replace(/(\d{2})(\d{3,4})$/, "$1-$2");
  }

  return c;
};
