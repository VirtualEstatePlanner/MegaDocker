export const cloudflareApiKeyValidator = (
  cloudflareApiKeyString: string
): boolean => {
  const isAlphanumericRegex: RegExp = new RegExp(`[a-zA-Z0-9]{40,40}`);
  const containsOnlyAlphanumerics: boolean = isAlphanumericRegex.test(
    cloudflareApiKeyString
  )
    ? true
    : false;
  const isValidated: boolean = containsOnlyAlphanumerics;
  return isValidated;
};
