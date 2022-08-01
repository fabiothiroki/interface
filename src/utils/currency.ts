export function removeInsignificantZeros(price: string) {
  return price.split(".00")[0];
}
