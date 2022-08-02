export function removeInsignificantZeros(price: string) {
  const last3 = price.slice(price.length - 3);
  if (last3 === ".00" || last3 === ",00") return price.split(last3)[0];
  return price;
}
