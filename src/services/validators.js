export const emailValidation = (value) => {
  const emailRegExp = new RegExp('^(.+)@(.+)$');
  return emailRegExp.test(value);
};

export const passwordValidation = (value) => !!value.length;

export const nameValidation = (value) => {
  const nameRegEx = new RegExp('[1-9]');
  return !nameRegEx.test(value);
};

export const questionHeadingValidaton = (value) => !!value.trim().length;
