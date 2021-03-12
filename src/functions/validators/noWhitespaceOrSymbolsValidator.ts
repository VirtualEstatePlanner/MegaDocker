/** @format */

export const noWhitespaceOrSymbolsValidator: Function = (stringToValidate: string): boolean => {
  if (!stringToValidate) {
    return false
  }
  const noWhiteSpaceRegex: RegExp = new RegExp(`^[sa-zA-Z0-9]*$`)
  const hasNoWhiteSpaceOrSymbols: boolean = noWhiteSpaceRegex.test(stringToValidate) ? true : false
  const nameLengthRequirements: boolean = stringToValidate.length < 20
  const isValidated: boolean = hasNoWhiteSpaceOrSymbols && nameLengthRequirements
  return isValidated
}
