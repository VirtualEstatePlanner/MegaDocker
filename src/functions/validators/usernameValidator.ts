export const usernameValidator = (password: string): boolean => {
  const usernameRegex: RegExp = new RegExp('/^[a-zA-Z0-9]+$/');
  const isValidated: boolean = usernameRegex.test(password) ? true : false;
  return isValidated;
};
