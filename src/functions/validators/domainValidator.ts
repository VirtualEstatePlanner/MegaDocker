export const domainValidator = (domain: string): boolean => {
  const domainRegex: RegExp = new RegExp(
    '/^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:.[a-zA-Z]{2,})+/'
  );
  const thisRegex: RegExp = domainRegex;
  const isValidated: boolean = thisRegex.test(domain) ? true : false;
  return isValidated;
};
