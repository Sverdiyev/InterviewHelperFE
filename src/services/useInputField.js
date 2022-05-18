import { useState } from 'react';

const useInputField = (
  { defaultValue = '', validationCb = () => true } = { defaultValue: '', validationCb: () => true }
) => {
  const [inputValue, setInputValue] = useState(defaultValue);

  const [inputIsValid, setInputIsValid] = useState(validationCb(defaultValue) || null);

  const setInputValueHandler = (event) => {
    if (!event) return setInputIsValid(false);

    const value = event.target.value;
    setInputValue(value);
    if (!validationCb(value)) return setInputIsValid(false);
    setInputIsValid(true);
  };
  return [inputValue, setInputValueHandler, inputIsValid];
};

export default useInputField;
