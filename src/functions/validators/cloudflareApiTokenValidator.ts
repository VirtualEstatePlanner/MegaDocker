/** @format */

export const cloudflareApiTokenValidator: Function = (stringToValidate: string): boolean => {
  if (!stringToValidate) {
    return false
  }
  const isExactlyFortyCharacters: boolean = stringToValidate!.length === 40
  const isAlphanumericRegex: RegExp = new RegExp(`[a-zA-Z0-9_-]`)
  const containsOnlyAlphanumerics: boolean = isAlphanumericRegex.test(stringToValidate!) ? true : false
  const isValidated: boolean = containsOnlyAlphanumerics && isExactlyFortyCharacters
  return isValidated
}
