export const nowhitespaceValidator = (nowhitespacestring: string): boolean => {
  const nowhitespaceRegex: RegExp = new RegExp('/^((?!(``)).)*$/');
  const thisRegex: RegExp = nowhitespaceRegex;
  const isValidated: boolean = thisRegex.test(nowhitespacestring)
    ? true
    : false;
  return isValidated;
};
