/** @format */

export const noWhitespaceValidator: Function = (stringToValidate: string): boolean => {
  if (!stringToValidate) {
    return false
  }
  const noWhiteSpaceRegex: RegExp = new RegExp(`^[s]*$`)
  const isValidated: boolean = noWhiteSpaceRegex.test(stringToValidate) ? true : false
  return isValidated
}
