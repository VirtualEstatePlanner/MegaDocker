export const passwordValidator = (password: string): boolean => {
  const strongPasswordRegex: RegExp = new RegExp(
    '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})'
  );

  const isValidated: boolean = strongPasswordRegex.test(password)
    ? true
    : false;
  return isValidated;
};
