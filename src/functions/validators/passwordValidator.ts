/** @format */

export const passwordValidator: Function = (stringToValidate: string): boolean => {
  if (!stringToValidate) {
    return false
  }
  const passwordRegex: RegExp = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})')
  const isValidated: boolean = passwordRegex.test(stringToValidate) ? true : false
  return isValidated
}
