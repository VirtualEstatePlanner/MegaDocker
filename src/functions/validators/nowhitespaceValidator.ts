export const noWhitespaceValidator = (nowhitespacestring: string): boolean => {
  const noWhiteSpaceRegex: RegExp = new RegExp(`^[s]*$`);
  const isValidated: boolean = noWhiteSpaceRegex.test(nowhitespacestring)
    ? true
    : false;
  return isValidated;
};
