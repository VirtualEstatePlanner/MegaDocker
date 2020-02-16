export const noWhiteSpaceValidator = (nowhitespacestring: string): boolean => {
  const noWhiteSpaceRegex: RegExp = new RegExp('/^((?!(``)).)*$/');
  const isValidated: boolean = noWhiteSpaceRegex.test(nowhitespacestring)
    ? true
    : false;
  return isValidated;
};
