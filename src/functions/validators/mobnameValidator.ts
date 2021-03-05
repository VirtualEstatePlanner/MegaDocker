/** @format */

export const mobnameValidator = (mobnameString: string): boolean => {
  const noWhiteSpaceRegex: RegExp = new RegExp(`^[sa-z0-9]*$`)
  const hasNoWhiteSpaceOrSymbols: boolean = noWhiteSpaceRegex.test(mobnameString) ? true : false
  const nameLengthRequirements: boolean = mobnameString.length < 20
  const isValidated: boolean = hasNoWhiteSpaceOrSymbols && nameLengthRequirements
  return isValidated
}
