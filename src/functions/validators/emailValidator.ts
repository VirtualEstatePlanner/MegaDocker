export const emailValidator = (email: string): boolean => {
  let isValidated: boolean = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
    email
  )
    ? true
    : false;
  return isValidated;
};
