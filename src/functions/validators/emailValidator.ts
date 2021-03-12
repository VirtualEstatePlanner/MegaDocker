/** @format */

export const emailValidator: Function = (email: string): boolean => {
  const emailRegex: RegExp = new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$')
  const isValidated: boolean = emailRegex.test(email) ? true : false
  return isValidated
}
