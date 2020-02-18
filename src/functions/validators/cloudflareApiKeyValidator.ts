export const cloudflareApiKeyValidator = (
  cloudflareApiKeyString: string
): boolean => {
  const isExactlyFortyCharacters: boolean =
    cloudflareApiKeyString.length === 40;
  const isAlphanumericRegex: RegExp = new RegExp(`[a-zA-Z0-9_-]`);
  const containsOnlyAlphanumerics: boolean = isAlphanumericRegex.test(
    cloudflareApiKeyString
  )
    ? true
    : false;
  const isValidated: boolean =
    containsOnlyAlphanumerics && isExactlyFortyCharacters;
  return isValidated;
};
