export const usernameValidator = (username: string): boolean => {
  const usernameRegex: RegExp = new RegExp('/^[a-zA-Z0-9]+$/');
  const isValidated: boolean = usernameRegex.test(username) ? true : false;
  return isValidated;
};
