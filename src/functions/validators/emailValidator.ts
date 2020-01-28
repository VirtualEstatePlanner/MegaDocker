export const emailValidator = (email: string): boolean => {
  const emailRegex: RegExp = new RegExp(
    '/^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/'
  );
  const isValidated: boolean = emailRegex.test(email) ? true : false;
  return isValidated;
};
