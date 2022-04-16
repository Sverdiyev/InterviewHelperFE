export const emailValidation = (email) => {
  const emailRegExp = new RegExp('^(.+)@(.+)$');
  return emailRegExp.test(email);
};

export const passwordValidation = (value) => !!value.length;
export const nameValidation = (name) => {
  const nameRegEx = new RegExp('/[1-9]/');
  return !nameRegEx.test(name);
};
