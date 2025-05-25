function power(base: number, exponent: number): number {
  if (exponent === 0) {
    return 1;
  }
  if (exponent < 0) {
    return 1 / power(base, -exponent);
  }
  let result = 1;
  for (let i = 0; i < exponent; i++) {
    result *= base;
  }
  return result;
}
