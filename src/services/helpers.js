import { useState } from 'react';

const useInputField = (validationCb) => {
  const [inputValue, setInputValue] = useState('');

  const [inputIsValid, setInputIsValid] = useState(false);

  const [inputIsTouched, setInputIsTouched] = useState(false);

  const setInputValueHandler = (event) => {
    setInputIsTouched(true);

    if (!event) return setInputIsValid(false);

    const value = event.target.value;
    setInputValue(value);
    if (validationCb(value)) return setInputIsValid(false);
    setInputIsValid(true);
  };
  return [inputValue, setInputValueHandler, inputIsValid, inputIsTouched];
};

export const emailValidation = (email) => {
  const emailRegExp = new RegExp(
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
  );
  return emailRegExp.exec(email);
};

export const passwordValidation = (value) => !value.length;
export const nameValidation = (name) => {
  const nameRegEx = new RegExp('/^([^0-9]*)$/');
  return nameRegEx.exec(name);
};

export default useInputField;
