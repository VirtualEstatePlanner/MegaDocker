/** @format */

export const noWhitespaceOrSymbolsValidator: Function = (noSpacesOrSymbolsString: string): boolean => {
  const noWhiteSpaceRegex: RegExp = new RegExp(`^[sa-zA-Z0-9]*$`)
  const hasNoWhiteSpaceOrSymbols: boolean = noWhiteSpaceRegex.test(noSpacesOrSymbolsString) ? true : false
  const nameLengthRequirements: boolean = noSpacesOrSymbolsString.length < 20
  const isValidated: boolean = hasNoWhiteSpaceOrSymbols && nameLengthRequirements
  return isValidated
}
