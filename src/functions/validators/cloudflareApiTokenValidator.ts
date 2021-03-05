/** @format */

export const cloudflareApiTokenValidator = (cloudflareApiTokenString: string): boolean => {
  const isExactlyFortyCharacters: boolean = cloudflareApiTokenString.length === 40
  const isAlphanumericRegex: RegExp = new RegExp(`[a-zA-Z0-9_-]`)
  const containsOnlyAlphanumerics: boolean = isAlphanumericRegex.test(cloudflareApiTokenString) ? true : false
  const isValidated: boolean = containsOnlyAlphanumerics && isExactlyFortyCharacters
  return isValidated
}
