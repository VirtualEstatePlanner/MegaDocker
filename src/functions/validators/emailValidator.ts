/** @format */

export const emailValidator: Function = (stringToValidate: string): boolean => {
  if (!stringToValidate) {
    return false
  }
  const emailRegex: RegExp = new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$')
  const isValidated: boolean = emailRegex.test(stringToValidate!) ? true : false
  return isValidated
}
