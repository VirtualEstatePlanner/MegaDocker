export const emailValidator = (email: string): boolean => {
  const emailRegex: RegExp = new RegExp(
    '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'
  );
  const thisRegex: RegExp = emailRegex;
  const isValidated: boolean = thisRegex.test(email) ? true : false;
  return isValidated;
};
