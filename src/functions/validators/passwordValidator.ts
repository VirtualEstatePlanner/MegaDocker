/** @format */

export const passwordValidator = (password: string): boolean => {
  const passwordRegex: RegExp = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})')

  const isValidated: boolean = passwordRegex.test(password) ? true : false
  return isValidated
}
